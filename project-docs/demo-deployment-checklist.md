# Demo Deployment Checklist
**Project:** Rada's Beauty – Client Demo  
**Stack:** React + TypeScript + Tailwind v4 + Vite → Vercel  
**Status:** Private demo. Not live. Not indexed.

---

## 1. Before You Push to GitHub

- [ ] Run `npm run build` locally — must exit with 0 errors, 0 warnings
- [ ] Confirm `.env` contains `VITE_ROBOTS_META=noindex, nofollow`
- [ ] Confirm `.env` is listed in `.gitignore` (it is — never commit it)
- [ ] Commit `.env.example` so Vercel setup is documented
- [ ] Check `public/assets/images/` contains both:
  - `hero-beauty.jpg` (hero background)
  - `rada-portrait.jpg` (About section)
- [ ] No placeholder text visible anywhere (`[NAME]`, `[PHONE]`, `TODO`, etc.)

---

## 2. Push to GitHub

```bash
# From project root
git add -A
git status          # verify — never blindly commit
git commit -m "Initial demo build – Rada's Beauty"
git remote add origin https://github.com/YOUR_USERNAME/radas-beauty-demo.git
git push -u origin main
```

> **Tip:** Make the GitHub repo **private**. The demo URL will still work for anyone you share it with, but the source code won't be public.

---

## 3. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project** → Import from GitHub
2. Select the `radas-beauty-demo` repo
3. Framework preset: **Vite** (auto-detected)
4. Build command: `npm run build` (default)
5. Output directory: `dist` (default)

### Set Environment Variables in Vercel

In the Vercel project settings → **Environment Variables**, add:

| Variable | Value | Environments |
|---|---|---|
| `VITE_ROBOTS_META` | `noindex, nofollow` | Production, Preview, Development |

> This ensures Vercel builds with `noindex` regardless of which branch triggers a deploy.

6. Click **Deploy**. Wait ~60 seconds.
7. Copy the `.vercel.app` URL — this is your demo link.

---

## 4. Mobile QA Checklist

Run through this on an actual iPhone (or Chrome DevTools → iPhone 15 Pro) **before** showing Rada.

### Hero Section
- [ ] Hero image loads (no alt text visible)
- [ ] Headline is fully readable over the image
- [ ] "Termin buchen" and phone buttons are both tappable and not overlapping
- [ ] Booking widget shows below the hero (not clipped)

### Booking Widget (Hero)
- [ ] Behandlung dropdown opens and shows all options
- [ ] Datum picker opens native date picker
- [ ] After selecting both, time pills appear with correct green/grey/red states
- [ ] "Termin buchen" button submits (form resets — no backend yet, expected)

### Navigation
- [ ] Sticky nav appears on scroll
- [ ] All nav links scroll to correct sections (Home, Behandlungen, Über mich, Kontakt, Buchen)
- [ ] Hamburger menu opens/closes on mobile

### Sticky Mobile CTA
- [ ] "Termin buchen" bar appears at bottom on mobile
- [ ] WhatsApp button visible above the sticky bar (not overlapping)
- [ ] Back-to-top button appears after scrolling ~500px

### Booking Section (Full)
- [ ] Category sidebar scrolls horizontally on mobile
- [ ] Selecting a service opens the booking step
- [ ] Day selector shows 7 upcoming days, no Sundays
- [ ] Time slots appear after selecting a day
- [ ] After picking time, name + phone form appears
- [ ] "← Zurück" returns to service list

### About Section
- [ ] Portrait image loads (Rada's photo)
- [ ] Text, trust points, and CTA buttons display correctly

### Contact Section
- [ ] Map link opens Google Maps
- [ ] Phone link initiates a call
- [ ] WhatsApp link opens WhatsApp with pre-filled message

### Footer
- [ ] Social icons visible (Instagram, Facebook, TikTok, Maps)
- [ ] Copyright year is correct (dynamic)
- [ ] All footer links work

---

## 5. What to Test Before Showing Rada

These are the things she will definitely notice:

1. **Her name and phone number** — appear correctly everywhere (`Rada Altwein`, `+41 78 795 21 35`)
2. **Her address** — Badenerstrasse 653, 8048 Zürich Altstetten
3. **Her services and prices** — match what she currently charges
4. **The hero photo** — does it look professional? Is she recognisable (if her portrait is the hero)?
5. **Mobile experience** — open it on your phone first, then hand her yours
6. **The booking flow** — walk through selecting a service → picking a day → picking a time → entering name → "Termin buchen"
7. **WhatsApp button** — tap it and confirm the pre-filled message looks right

---

## 6. What NOT to Do Before She Says Yes

- Do NOT register a domain for her
- Do NOT enable Google Analytics or any tracking
- Do NOT change the robots meta to `index, follow` (keep it `noindex` until she approves and pays)
- Do NOT submit the site to Google Search Console
- Do NOT send the demo URL to anyone except Rada
- Do NOT promise a go-live date before she has confirmed scope and price

---

## 7. After She Approves — Go-Live Checklist

When Rada confirms she wants to proceed:

### Domain & DNS
- [ ] Register `radasbeauty.ch` (or transfer from current registrar)
- [ ] Add custom domain in Vercel project settings
- [ ] Vercel auto-provisions SSL — wait for green certificate status

### SEO Switch
- [ ] In Vercel Environment Variables, change `VITE_ROBOTS_META` to `index, follow`
- [ ] Trigger a new deploy (push an empty commit or click "Redeploy" in Vercel)
- [ ] Verify `<meta name="robots" content="index, follow">` in the live page source

### Google Search Console
- [ ] Add property for `https://radasbeauty.ch`
- [ ] Verify via DNS TXT record (easiest with Vercel DNS)
- [ ] Submit sitemap (generate one — Vite plugin or manual `sitemap.xml`)
- [ ] Request indexing for the homepage

### Analytics (Optional)
- [ ] Add Plausible or Google Analytics 4 (privacy-compliant for Switzerland)
- [ ] Add `VITE_GA_ID` or similar env var

### Booking Backend (v2)
- [ ] Connect the booking form to a real endpoint (Calendly, Acuity, or custom webhook)
- [ ] Send confirmation email/SMS to client and Rada
- [ ] Test the full booking-to-confirmation flow end to end

### Final Live Check
- [ ] Open `https://radasbeauty.ch` in an incognito window
- [ ] Check page source for `robots: index, follow`
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/) — target 90+ mobile
- [ ] Run [Google Rich Results Test](https://search.google.com/test/rich-results) for LocalBusiness schema
- [ ] Check [W3C Validator](https://validator.w3.org/) for HTML errors

---

## 8. Environment Variable Reference

| Variable | Demo Value | Production Value | Purpose |
|---|---|---|---|
| `VITE_ROBOTS_META` | `noindex, nofollow` | `index, follow` | Controls Google crawling |

> To add more env-controlled values later (e.g., phone number, GA ID), follow the same pattern: add to `.env`, reference as `%VITE_VAR%` in `index.html` or `import.meta.env.VITE_VAR` in components.

---

## 9. Quick Links

| What | Where |
|---|---|
| Vercel dashboard | https://vercel.com/dashboard |
| PageSpeed Insights | https://pagespeed.web.dev/ |
| Google Rich Results | https://search.google.com/test/rich-results |
| Google Search Console | https://search.google.com/search-console |
| radas-beauty.ch (existing site) | https://radas-beauty.ch |
