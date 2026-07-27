"use client";

import { useState } from "react";
import { Check, Loader2, Upload, FileText } from "lucide-react";

const inputCls =
  "w-full rounded-xl border border-navy/12 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/10";
const labelCls = "mb-1.5 block text-xs font-semibold text-navy";

const consents = [
  "I certify that the information provided in this form is complete and correct.",
  "I agree to abide by the policies, terms and conditions set by ACE Language Centres in the ACE Student Code of Conduct and ACE Cancellation & Refund Policy.",
  "I agree to pay all fees due on the dates stipulated by ACE Language Centres.",
  "I consent to the recording of my name, image, voice and any other personally identifiable information shared during virtual sessions or meetings (Zoom, Meet, Teams, Facebook etc.).",
  "I understand and consent to the collection and processing of Personal Data and Sensitive Personal Data as defined under the Personal Data Protection Act 2010 (\"PDPA\").",
  "I understand and agree to be placed on the ACE Online Certified Intensive English Programme as an alternative mode of study should ACE not offer in-person classes because of COVID-19 related constraints.",
];

function FileInput({ id, label, hint, required }: { id: string; label: string; hint: string; required?: boolean }) {
  const [name, setName] = useState("");
  return (
    <div>
      <label htmlFor={id} className={labelCls}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <label
        htmlFor={id}
        className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-navy/25 bg-mist px-4 py-3 text-sm transition-colors hover:border-navy/50"
      >
        <Upload className="h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
        <span className="truncate text-ink/70">{name || "Choose file…"}</span>
      </label>
      <input
        id={id}
        name={id}
        type="file"
        required={required}
        accept="image/*,application/pdf"
        onChange={(e) => setName(e.target.files?.[0]?.name ?? "")}
        className="sr-only"
      />
      <p className="no-justify mt-1 text-[0.7rem] text-ink/50">{hint}</p>
    </div>
  );
}

export function AiepForm() {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [uniPlan, setUniPlan] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");
    try {
      const fd = new FormData(e.currentTarget);
      const res = await fetch("/api/aiep", { method: "POST", body: fd });
      if (res.ok) {
        setState("done");
        window.scrollTo({ top: document.getElementById("aiep")?.offsetTop ?? 0, behavior: "smooth" });
      } else {
        const j = await res.json().catch(() => ({}));
        setErrorMsg(
          j.error === "file_too_large" || j.error === "attachments_too_large"
            ? "One or more files are too large. Please keep each file under 8 MB."
            : "Something went wrong. Please check your details and try again.",
        );
        setState("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again or email info@acelanguagecentre.my.");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-3xl border border-success/20 bg-success/5 p-10 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-success text-white">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold text-navy">Application received!</h3>
        <p className="mx-auto mt-2 max-w-lg text-ink/70">
          Thank you for applying to the ACE Intensive English Programme. Our admissions team will review your
          documents and contact you to begin your EMGS student visa process. For urgent queries, email
          <a href="mailto:info@acelanguagecentre.my" className="font-semibold text-navy"> info@acelanguagecentre.my</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-navy/10 bg-white p-6 shadow-soft md:p-8" encType="multipart/form-data">
      <div className="rounded-2xl bg-mist p-5">
        <p className="text-sm text-ink/75">
          This application form is exclusively for the <strong className="text-navy">ACE Intensive English Programme (AIEP)</strong>.
          Complete the required details to enrol and begin your EMGS student visa process (ages 18–35; the student pass covers the enrolled student only).
        </p>
        <p className="no-justify mt-2 text-sm font-semibold text-navy">
          Important: helping a friend apply? Please key in a unique (different) email address for each application.
        </p>
      </div>

      {/* Documents */}
      <h3 className="mt-8 font-display text-lg font-bold text-navy">Required Documents</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <FileInput id="passport" label="Passport Copy" required hint="All passport pages (blank & stamped), colour scan" />
        <FileInput id="photo" label="Photo" required hint="White background · 45 mm high × 35 mm wide" />
        <FileInput id="certificate" label="High School Certificate & Transcripts" required hint="With English translation if applicable" />
        <FileInput id="healthForm" label="EMGS Health Declaration Form" required hint="Download from EMGS (educationmalaysia.gov.my) — completed & signed" />
      </div>

      {/* University plans */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="uniPlan" className={labelCls}>Do you plan on attending a Malaysian university after ACE?</label>
          <select id="uniPlan" name="uniPlan" value={uniPlan} onChange={(e) => setUniPlan(e.target.value)} className={inputCls}>
            <option value="">Please select…</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Not sure">Not sure yet</option>
          </select>
        </div>
        {uniPlan === "Yes" && (
          <div>
            <label htmlFor="uniName" className={labelCls}>If yes, what is the university&apos;s name?</label>
            <input id="uniName" name="uniName" className={inputCls} placeholder="University name" />
          </div>
        )}
        <FileInput id="offerLetter" label="University Offer Letter" hint="Optional — upload if you already have one" />
      </div>

      {/* Programme selection */}
      <h3 className="mt-8 font-display text-lg font-bold text-navy">Programme Selection</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="programme" className={labelCls}>ACE Programme <span className="text-red-500">*</span></label>
          <select id="programme" name="programme" required className={inputCls} defaultValue="Intensive English Programme (AIEP)">
            <option>Intensive English Programme (AIEP)</option>
          </select>
        </div>
        <div>
          <label htmlFor="session" className={labelCls}>Session <span className="text-red-500">*</span></label>
          <select id="session" name="session" required className={inputCls}>
            <option value="">Please select…</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </div>
        <div>
          <label htmlFor="duration" className={labelCls}>Study Duration <span className="text-red-500">*</span></label>
          <select id="duration" name="duration" required className={inputCls}>
            <option value="">Please select…</option>
            <option>6 sessions</option>
            <option>12 sessions</option>
          </select>
        </div>
        <div>
          <label htmlFor="centre" className={labelCls}>Preferred ACE Centre <span className="text-red-500">*</span></label>
          <select id="centre" name="centre" required className={inputCls}>
            <option value="">Please select…</option>
            <option>Mont Kiara HQ</option>
            <option>USJ Taipan Branch</option>
          </select>
        </div>
      </div>

      {/* Student details */}
      <h3 className="mt-8 font-display text-lg font-bold text-navy">Student&apos;s Details</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelCls}>Full Name (as in Passport) <span className="text-red-500">*</span></label>
          <input id="fullName" name="fullName" required className={inputCls} placeholder="Full name" />
        </div>
        <div>
          <label htmlFor="passportNo" className={labelCls}>Passport No. <span className="text-red-500">*</span></label>
          <input id="passportNo" name="passportNo" required className={inputCls} placeholder="Passport number" />
        </div>
        <div>
          <label htmlFor="nationality" className={labelCls}>Nationality <span className="text-red-500">*</span></label>
          <input id="nationality" name="nationality" required className={inputCls} placeholder="Write your country name" />
        </div>
        <div>
          <label htmlFor="age" className={labelCls}>Age <span className="text-red-500">*</span></label>
          <input id="age" name="age" required type="number" min={18} max={35} className={inputCls} placeholder="18–35" />
        </div>
      </div>

      {/* Address */}
      <h3 className="mt-8 font-display text-lg font-bold text-navy">Student&apos;s Current Address</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="street" className={labelCls}>Street address <span className="text-red-500">*</span></label>
          <input id="street" name="street" required className={inputCls} placeholder="Street address" />
        </div>
        <div>
          <label htmlFor="city" className={labelCls}>City <span className="text-red-500">*</span></label>
          <input id="city" name="city" required className={inputCls} placeholder="City" />
        </div>
        <div>
          <label htmlFor="postalCode" className={labelCls}>Postal code <span className="text-red-500">*</span></label>
          <input id="postalCode" name="postalCode" required className={inputCls} placeholder="Postal code" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="state" className={labelCls}>State / Region <span className="text-red-500">*</span></label>
          <input id="state" name="state" required className={inputCls} placeholder="State / Region" />
        </div>
      </div>

      {/* Contact */}
      <h3 className="mt-8 font-display text-lg font-bold text-navy">Student&apos;s Contact Information</h3>
      <p className="no-justify mt-1 text-xs text-ink/55">If you are helping a friend apply, please use a unique (different) email address for each application.</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelCls}>Email Address <span className="text-red-500">*</span></label>
          <input id="email" name="email" type="email" required className={inputCls} placeholder="you@email.com" />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>Phone number <span className="text-red-500">*</span></label>
          <input id="phone" name="phone" required className={inputCls} placeholder="+..." />
        </div>
        <div>
          <label htmlFor="contactApp" className={labelCls}>Which app may we use to contact you? <span className="text-red-500">*</span></label>
          <select id="contactApp" name="contactApp" required className={inputCls}>
            <option value="">Please select…</option>
            <option>WhatsApp</option>
            <option>WeChat</option>
            <option>LINE</option>
          </select>
        </div>
        <div>
          <label htmlFor="contactId" className={labelCls}>WeChat / LINE ID (if any)</label>
          <input id="contactId" name="contactId" className={inputCls} placeholder="ID" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>Any questions or messages for us?</label>
          <textarea id="message" name="message" rows={3} className={inputCls} placeholder="Your message (optional)" />
        </div>
      </div>

      {/* Consent */}
      <h3 className="mt-8 font-display text-lg font-bold text-navy">Consent &amp; Verification</h3>
      <div className="mt-4 space-y-3">
        {consents.map((c, i) => (
          <label key={i} className="flex items-start gap-3 text-sm text-ink/75">
            <input type="checkbox" name={`consent${i + 1}`} required className="mt-1 h-4 w-4 shrink-0 accent-[#091b63]" />
            <span>{c} <span className="text-red-500">*</span></span>
          </label>
        ))}
      </div>

      <p className="no-justify mt-6 rounded-xl bg-mist p-4 text-xs text-ink/60">
        <FileText className="mr-1 inline h-3.5 w-3.5" /> By submitting this form you accept the Terms &amp; Conditions,
        ACE Student Code of Conduct and ACE Cancellation &amp; Refund Policy of ACE Language Centre. The EMGS Health
        Declaration Form can be downloaded from educationmalaysia.gov.my (EMGS).
      </p>

      {state === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold text-navy transition-colors hover:bg-gold-light disabled:opacity-60"
      >
        {state === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {state === "loading" ? "Submitting…" : "Submit AIEP Application"}
      </button>
    </form>
  );
}
