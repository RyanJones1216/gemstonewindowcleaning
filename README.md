# Gemstone Window Cleaning — Website

A Next.js 13+ (App Router) website for Gemstone Window Cleaning, built with Tailwind CSS.

---

## ⚠️ Before You Go Live: Replace the Phone Number

The site uses a placeholder phone number in two places. You **must** update both before launching.

### 1. SMS Link — `components/Contact.tsx`

Find this line:
```tsx
href="sms:+1XXXXXXXXXX"
```
Replace `XXXXXXXXXX` with your 10-digit phone number (digits only, no dashes or spaces).

Example:
```tsx
href="sms:+15555550123"
```

### 2. Display Number — `components/Contact.tsx`

Find this line:
```tsx
(XXX) XXX-XXXX
```
Replace it with your formatted phone number:
```tsx
(555) 555-0123
```

Also update the identical placeholder in `components/Hero.tsx`:
```tsx
href="sms:+1XXXXXXXXXX"
```

---

## Getting Started

Install dependencies (already done if you ran `create-next-app`):
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
app/
  layout.tsx      — Root layout, fonts, metadata
  page.tsx        — Single-page assembly
  globals.css     — Tailwind + custom animations + color theme
components/
  Navbar.tsx      — Sticky frosted-glass nav
  Hero.tsx        — Full-screen hero with gradient + gem shapes
  Services.tsx    — Exterior & Interior service cards
  WhyUs.tsx       — Three benefit columns
  Contact.tsx     — Text-us CTA section
  Footer.tsx      — Logo, tagline, copyright
```

---

## Deployment

The easiest path is [Vercel](https://vercel.com) — connect your GitHub repo and it deploys automatically on every push.
