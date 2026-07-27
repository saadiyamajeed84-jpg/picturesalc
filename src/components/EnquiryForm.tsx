"use client";

import { useState } from "react";
import { Check, Send, Loader2 } from "lucide-react";
import { courses } from "@/lib/courses";

export function EnquiryForm({
  type = "enquiry",
  compact = false,
  heading = "Request Your Free Consultation",
}: {
  type?: string;
  compact?: boolean;
  heading?: string;
}) {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    course: "",
    message: "",
  });

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-3xl border border-success/20 bg-success/5 p-8 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-success text-white">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-navy">Thank you, {form.name.split(" ")[0] || "friend"}!</h3>
        <p className="mt-2 text-ink/70">
          Your enquiry has been received. One of our student advisors will contact you within one working day.
          For an instant reply, message us on WhatsApp.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-navy/12 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/10";

  return (
    <form onSubmit={submit} className="rounded-3xl border border-navy/10 bg-white p-6 shadow-soft md:p-8">
      <h3 className="font-display text-xl font-bold text-navy">{heading}</h3>
      <p className="mt-1 text-sm text-ink/60">Fill in the form and we&apos;ll get back to you within 24 hours.</p>

      <div className={`mt-6 grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="ef-name" className="mb-1.5 block text-xs font-semibold text-navy">Full name *</label>
          <input id="ef-name" required value={form.name} onChange={(e) => set("name", e.target.value)} className={inputCls} placeholder="e.g. Sarah Ahmed" />
        </div>
        <div>
          <label htmlFor="ef-email" className="mb-1.5 block text-xs font-semibold text-navy">Email *</label>
          <input id="ef-email" type="email" required value={form.email} onChange={(e) => set("email", e.target.value)} className={inputCls} placeholder="you@email.com" />
        </div>
        <div>
          <label htmlFor="ef-phone" className="mb-1.5 block text-xs font-semibold text-navy">Phone / WhatsApp</label>
          <input id="ef-phone" value={form.phone} onChange={(e) => set("phone", e.target.value)} className={inputCls} placeholder="+60 ..." />
        </div>
        <div>
          <label htmlFor="ef-country" className="mb-1.5 block text-xs font-semibold text-navy">Country</label>
          <input id="ef-country" value={form.country} onChange={(e) => set("country", e.target.value)} className={inputCls} placeholder="Your country" />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="ef-course" className="mb-1.5 block text-xs font-semibold text-navy">Course of interest</label>
        <select id="ef-course" value={form.course} onChange={(e) => set("course", e.target.value)} className={inputCls}>
          <option value="">Select a course</option>
          {courses.map((c) => (
            <option key={c.slug} value={c.title}>{c.title}</option>
          ))}
          <option value="Not sure yet">Not sure yet — please advise</option>
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="ef-message" className="mb-1.5 block text-xs font-semibold text-navy">Your message</label>
        <textarea id="ef-message" rows={compact ? 3 : 4} value={form.message} onChange={(e) => set("message", e.target.value)} className={inputCls} placeholder="Tell us about your goals, current level, or any questions..." />
      </div>

      {state === "error" && (
        <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
          Something went wrong. Please try again or WhatsApp us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-navy transition-colors hover:bg-gold-light disabled:opacity-60"
      >
        {state === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {state === "loading" ? "Sending..." : "Send Enquiry"}
      </button>
      <p className="mt-3 text-center text-xs text-ink/50">
        By submitting, you agree to our privacy policy. We never share your details.
      </p>
    </form>
  );
}
