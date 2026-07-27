import nodemailer from "nodemailer";

// Notification inbox for all enquiries and contacts.
export const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "info@acelanguagecentre.my";
const FROM_EMAIL = process.env.MAIL_FROM || "ACE Language Centre <info@acelanguagecentre.my>";

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter | null {
  if (transporter) return transporter;
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null; // SMTP not configured
  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
  return transporter;
}

type MailInput = {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  attachments?: { filename: string; content: Buffer }[];
};

/**
 * Sends a notification email to info@acelanguagecentre.my.
 * Returns true if sent, false if SMTP is not configured (data is still stored in the DB).
 * Never throws — email failure must not break the enquiry flow.
 */
export async function sendNotificationEmail({ subject, html, text, replyTo, attachments }: MailInput): Promise<boolean> {
  const t = getTransporter();
  if (!t) {
    console.info(`[mailer] SMTP not configured — skipping email to ${NOTIFY_EMAIL}: ${subject}`);
    return false;
  }
  try {
    await t.sendMail({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL,
      subject,
      text,
      html,
      replyTo,
      attachments,
    });
    return true;
  } catch (err) {
    console.error("[mailer] Failed to send email:", err);
    return false;
  }
}

export function enquiryEmail(d: {
  name: string;
  email: string;
  phone?: string | null;
  country?: string | null;
  course?: string | null;
  type: string;
  message?: string | null;
}) {
  const rows = [
    ["Type", d.type],
    ["Name", d.name],
    ["Email", d.email],
    ["Phone", d.phone || "—"],
    ["Country", d.country || "—"],
    ["Course", d.course || "—"],
    ["Message", d.message || "—"],
  ];
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#111;max-width:560px">
      <h2 style="color:#091b63">New ${d.type} enquiry — ACE Language Centre</h2>
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
      <p style="color:#666;font-size:12px;margin-top:16px">Sent from acelanguagecentre.edu.my</p>
    </div>`;
  return { subject: `New ${d.type} enquiry: ${d.name}`, text, html, replyTo: d.email };
}
