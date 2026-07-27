# ACE Language Centre — Enterprise Website

Malaysia's premier English language centre — a modern, luxury, fully-responsive
enterprise website built with **Next.js 16 (App Router)**, **React 19**,
**TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **PostgreSQL via
Drizzle ORM**.

Brand: ACE Language Centre — a brand of World Best Services Malaysia Sdn Bhd (1310849-A).
Slogan: **ACE Your English.** · Achieve · Communicate · Excel.

---

## ✨ Features

- **15 course pages** (General, Intensive/AIEP, IELTS, TOEFL, PTE, MUET,
  Cambridge, Business, Kids, Teen, One-to-One, Online, Corporate/HRDF,
  Summer & Winter Camp, Ladies-Only) — each with fees card, 5+ FAQs, and a
  testimonial carousel.
- **100+ student testimonials**, tagged per course.
- **AIEP application form** (Intensive English) with document uploads
  (passport, photo, certificate, EMGS health form) → stored in DB + emailed.
- **Enquiry, Contact & Newsletter** forms → stored in DB + emailed to
  `info@acelanguagecentre.my`.
- **Multi-language** support (EN, AR, ZH, MS, ES, FR, JA, KO, RU) with
  automatic browser/region detection, manual switcher, cookie + localStorage
  persistence, and RTL support for Arabic.
- **Free English placement test** (interactive quiz) + homepage teaser.
- **SEO**: per-page metadata, Open Graph, Twitter cards, JSON-LD
  (Organization, LocalBusiness, Course, FAQ, Review, Breadcrumb), XML sitemap,
  robots.txt.
- **Accessibility**: semantic HTML, ARIA, keyboard nav, focus states,
  reduced-motion support.
- Blog (100+ SEO article ideas), Gallery, Events, Careers, Success Stories,
  Student Portal, legal pages, and more.

---

## 🧱 Tech Stack

| Layer         | Technology                          |
| ------------- | ----------------------------------- |
| Framework     | Next.js 16 (App Router, Turbopack)  |
| UI            | React 19, TypeScript, Tailwind CSS v4 |
| Animation     | Framer Motion                       |
| Icons         | lucide-react + custom SVGs          |
| Database      | PostgreSQL + Drizzle ORM            |
| Validation    | Zod                                 |
| Email         | Nodemailer (SMTP)                   |

---

## 📂 Project Structure

```
.
├── public/
│   ├── crest.svg                 # ACE heraldic crest logo
│   └── images/                   # Site imagery (replace with official ACE photos)
├── src/
│   ├── app/                      # App Router pages + API routes
│   │   ├── api/                  # aiep, enquiries, newsletter, health
│   │   ├── courses/[slug]/       # Dynamic course pages
│   │   ├── blog/[slug]/          # Dynamic blog pages
│   │   ├── student-services/[slug]/
│   │   ├── sitemap.ts, robots.ts # SEO
│   │   ├── layout.tsx, page.tsx  # Root layout + homepage
│   │   └── globals.css           # Design system / Tailwind theme
│   ├── components/               # Reusable UI + sections + i18n
│   ├── db/                       # Drizzle client + schema
│   └── lib/                      # site, courses, blog, data, seo, i18n, mailer…
├── .env.example                  # Environment variable template
├── drizzle.config.json           # Drizzle Kit config
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
└── package.json
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
```bash
cp .env.example .env
# then edit .env and set DATABASE_URL (and optionally SMTP_* for email)
```

### 3. Set up the database
Ensure PostgreSQL is running and `DATABASE_URL` points to it, then push the schema:
```bash
npx drizzle-kit push
```

### 4. Run the dev server
```bash
npm run dev
```
Visit http://localhost:3000

### 5. Production build
```bash
npm run build
npm run start
```

---

## 🗄️ Database Schema

Tables (see `src/db/schema.ts`):
- `enquiries` — contact/course enquiries
- `subscribers` — newsletter emails
- `aiep_applications` — Intensive English (AIEP) student visa applications

Apply changes with `npx drizzle-kit push`.

---

## 🔑 Environment Variables

| Variable        | Required | Description                                        |
| --------------- | -------- | -------------------------------------------------- |
| `DATABASE_URL`  | Yes      | PostgreSQL connection string                       |
| `NOTIFY_EMAIL`  | No       | Inbox for all form submissions (default: info@acelanguagecentre.my) |
| `MAIL_FROM`     | No       | From address for outgoing mail                     |
| `SMTP_HOST`     | No       | SMTP server host (enables email)                   |
| `SMTP_PORT`     | No       | SMTP port (default 587)                            |
| `SMTP_USER`     | No       | SMTP username                                      |
| `SMTP_PASS`     | No       | SMTP password                                      |

> The DB client is lazily initialised, so the app **builds** even without
> `DATABASE_URL` (e.g. on Vercel). The variable is only required at runtime
> when a database query executes.

---

## ☁️ Deploying to Vercel

1. Push this project to a Git repository and import it into Vercel.
2. In **Project → Settings → Environment Variables**, add `DATABASE_URL`
   (and optionally the `SMTP_*` / `NOTIFY_EMAIL` vars).
3. Deploy. Run `npx drizzle-kit push` against your production DB once to create tables.

---

## 🖼️ Replacing Images with Official ACE Photos

Current images live in `public/images/`. To use official ACE photography:
1. Add the official photos to `public/images/` (or `public/gallery/`).
2. Update the `src` references in the relevant pages/components.
3. Keep descriptive `alt` text for accessibility and SEO.

---

## 📜 Scripts

| Command             | Description                    |
| ------------------- | ------------------------------ |
| `npm run dev`       | Start dev server               |
| `npm run build`     | Production build               |
| `npm run start`     | Start production server        |
| `npm run lint`      | Run ESLint                     |
| `npm run typecheck` | TypeScript type-check          |

---

© 2019–2026 ACE Language Centre (World Best Services Malaysia Sdn Bhd) — 1310849-A. All rights reserved.
