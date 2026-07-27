import { db } from "@/db";
import { enquiries } from "@/db/schema";
import { z } from "zod";
import { sendNotificationEmail, enquiryEmail } from "@/lib/mailer";

export const dynamic = "force-dynamic";

const schema = z.object({
  name: z.string().min(2, "Please enter your name").max(160),
  email: z.string().email("Please enter a valid email").max(200),
  phone: z.string().max(60).optional().or(z.literal("")),
  country: z.string().max(120).optional().or(z.literal("")),
  course: z.string().max(160).optional().or(z.literal("")),
  type: z.string().max(60).optional().or(z.literal("")),
  message: z.string().max(4000).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = schema.safeParse(json);
    if (!parsed.success) {
      return Response.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }
    const d = parsed.data;
    const type = d.type || "enquiry";
    await db.insert(enquiries).values({
      name: d.name,
      email: d.email,
      phone: d.phone || null,
      country: d.country || null,
      course: d.course || null,
      type,
      message: d.message || null,
    });

    // Notify info@acelanguagecentre.my (never blocks the response on failure).
    await sendNotificationEmail(
      enquiryEmail({
        name: d.name,
        email: d.email,
        phone: d.phone,
        country: d.country,
        course: d.course,
        type,
        message: d.message,
      }),
    );

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
