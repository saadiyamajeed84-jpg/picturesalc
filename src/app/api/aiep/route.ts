import { db } from "@/db";
import { aiepApplications } from "@/db/schema";
import { sendNotificationEmail } from "@/lib/mailer";

export const dynamic = "force-dynamic";

const MAX_FILE = 8 * 1024 * 1024; // 8 MB per file
const MAX_TOTAL = 20 * 1024 * 1024; // 20 MB total attachments

function str(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    const fullName = str(form.get("fullName"));
    const email = str(form.get("email"));
    if (fullName.length < 2 || !/^\S+@\S+\.\S+$/.test(email)) {
      return Response.json({ ok: false, error: "invalid_input" }, { status: 400 });
    }

    // Collect uploaded files
    const fileFields = [
      "passport",
      "photo",
      "certificate",
      "healthForm",
      "offerLetter",
    ] as const;

    const attachments: { filename: string; content: Buffer }[] = [];
    const docSummary: string[] = [];
    let total = 0;

    for (const field of fileFields) {
      const f = form.get(field);
      if (f && typeof f === "object" && "arrayBuffer" in f) {
        const file = f as File;
        if (file.size === 0) continue;
        if (file.size > MAX_FILE) {
          return Response.json({ ok: false, error: "file_too_large", field }, { status: 400 });
        }
        total += file.size;
        if (total > MAX_TOTAL) {
          return Response.json({ ok: false, error: "attachments_too_large" }, { status: 400 });
        }
        const buf = Buffer.from(await file.arrayBuffer());
        attachments.push({ filename: `${field}-${file.name}`, content: buf });
        docSummary.push(`${field}: ${file.name} (${Math.round(file.size / 1024)} KB)`);
      }
    }

    const data = {
      fullName,
      passportNo: str(form.get("passportNo")) || null,
      nationality: str(form.get("nationality")) || null,
      age: str(form.get("age")) || null,
      street: str(form.get("street")) || null,
      city: str(form.get("city")) || null,
      postalCode: str(form.get("postalCode")) || null,
      state: str(form.get("state")) || null,
      email,
      phone: str(form.get("phone")) || null,
      contactApp: str(form.get("contactApp")) || null,
      contactId: str(form.get("contactId")) || null,
      programme: str(form.get("programme")) || null,
      session: str(form.get("session")) || null,
      duration: str(form.get("duration")) || null,
      centre: str(form.get("centre")) || null,
      uniPlan: str(form.get("uniPlan")) || null,
      uniName: str(form.get("uniName")) || null,
      documents: docSummary.join("; ") || null,
      message: str(form.get("message")) || null,
    };

    await db.insert(aiepApplications).values(data);

    const rows: [string, string][] = [
      ["Full Name", data.fullName],
      ["Passport No.", data.passportNo || "—"],
      ["Nationality", data.nationality || "—"],
      ["Age", data.age || "—"],
      ["Address", [data.street, data.city, data.postalCode, data.state].filter(Boolean).join(", ") || "—"],
      ["Email", data.email],
      ["Phone", data.phone || "—"],
      ["Contact via", `${data.contactApp || "—"} ${data.contactId ? `(${data.contactId})` : ""}`],
      ["Programme", data.programme || "—"],
      ["Session", data.session || "—"],
      ["Duration", data.duration || "—"],
      ["Preferred Centre", data.centre || "—"],
      ["Plans university?", data.uniPlan || "—"],
      ["University name", data.uniName || "—"],
      ["Documents", data.documents || "None uploaded"],
      ["Message", data.message || "—"],
    ];

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;color:#111;max-width:600px">
        <h2 style="color:#091b63">New AIEP Application — ACE Language Centre</h2>
        <table style="border-collapse:collapse;width:100%">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:8px 12px;background:#f7f8fc;font-weight:600;border:1px solid #eee">${k}</td><td style="padding:8px 12px;border:1px solid #eee">${String(
                  v,
                ).replace(/</g, "&lt;")}</td></tr>`,
            )
            .join("")}
        </table>
      </div>`;

    await sendNotificationEmail({
      subject: `AIEP Application: ${data.fullName} (${data.nationality || "—"})`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html,
      replyTo: data.email,
      attachments,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[aiep] error", err);
    return Response.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
