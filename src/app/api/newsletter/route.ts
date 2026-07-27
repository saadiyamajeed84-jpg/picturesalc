import { db } from "@/db";
import { subscribers } from "@/db/schema";
import { z } from "zod";
import { sql } from "drizzle-orm";
import { sendNotificationEmail } from "@/lib/mailer";

export const dynamic = "force-dynamic";

const schema = z.object({ email: z.string().email().max(200) });

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = schema.safeParse(json);
    if (!parsed.success) {
      return Response.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }
    await db
      .insert(subscribers)
      .values({ email: parsed.data.email })
      .onConflictDoNothing({ target: subscribers.email });
    await db.execute(sql`select 1`);

    await sendNotificationEmail({
      subject: `New newsletter subscriber: ${parsed.data.email}`,
      text: `New newsletter subscriber: ${parsed.data.email}`,
      html: `<p>New newsletter subscriber: <strong>${parsed.data.email}</strong></p>`,
      replyTo: parsed.data.email,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
