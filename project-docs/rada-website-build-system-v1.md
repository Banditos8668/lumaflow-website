# Local Business Website System — Founder Playbook v1

**Type:** Internal operating document
**Use:** Repeat this process for every local service business client
**First run:** Rada's Beauty, Zürich Altstetten — May 2026
**Next target build time:** 4–6 hours from brief to live demo URL

---

## What This Is

A repeatable system for turning a local business's broken or invisible web presence into a live, polished demo — and using that demo to close a paid website project.

The system has five stages:

```
SELECT → AUDIT → DEMO → REFINE → PITCH → SCALE
```

Each stage has a clear input, a clear output, and a clear decision point before moving on.

---

## Stage 0 — Lead Selection

**Goal:** spend time only on leads that can close fast, pay fairly, and reuse the system.

### Ideal Client Profile

The system is built for owner-operated local service businesses with simple service menus, high mobile usage, and no existing digital infrastructure worth keeping.

**Best fits:**
- Beauty salons and cosmetic studios
- Nail salons
- Massage and bodywork studios
- Physiotherapy and manual therapy clinics
- Skin and facial treatment specialists
- Solo operators with an existing client base

**Why these work:**
- Simple service structures — a data file can be completed in under an hour
- High mobile usage — clients search, browse, and book on phones
- Missed-call friction is common — operators work alone, can't answer during sessions
- Visual businesses — images exist on social media, no photoshoot required
- Owner-operated — one decision-maker, fast yes or no
- Decision cycle is days, not months

### Avoid Initially

**Not a fit for this system:**
- Restaurants — menus change constantly, multilingual requirements, reservation complexity
- E-commerce — product catalogues, payment systems, fulfilment logic
- Enterprise or multilingual sites — long approval chains, translation workflows, compliance
- Businesses needing custom backends — membership portals, booking APIs, bespoke databases
- Clients requiring heavy content production — no images, no copy, no brand assets

Every category above breaks speed, reuse, and profitability. One restaurant project can consume the time of four beauty studio projects. Take that trade only when the system is mature and the margin justifies the deviation.

### Qualification Checklist

Before building a demo, confirm:

- [ ] Existing business with real operating history
- [ ] Google reviews exist — confirms real customers, real address
- [ ] Current website is outdated, slow, or not mobile-friendly
- [ ] No clear booking or contact path on mobile
- [ ] Owner-operated or small team — not a franchise
- [ ] Visible friction: missed calls, no WhatsApp, no booking link
- [ ] Active Instagram or Facebook presence — images already exist
- [ ] Realistic ability to pay CHF 1'500–3'500

If more than two of these are absent, move to the next lead.

### Weekly Acquisition Targets

| Activity | Target |
|----------|--------|
| Businesses audited | 10/week |
| Demos built | 2/week |
| Pitches made | 5/week |
| Closes | 1/week |

Consistency matters more than volume spikes. Two demos every week compounds faster than ten in one week and none the next. The pipeline is built by showing up regularly, not by sprinting.

---

## Stage 1 — Audit

**Goal:** find the gap between what the client has and what they need. One finding should be so clear and so costly that it carries the pitch on its own.

### What to look for

Start with the most damaging technical problems, not the design. Design opinions are subjective. Technical failures are facts.

**Tier 1 — Immediately disqualifying (use as the lead finding):**
- `noindex` or `nofollow` in meta robots — Google is told to ignore the site
- No HTTPS — browsers flag it as insecure
- Site not loading on mobile — 60–80% of local search is mobile

**Tier 2 — High impact (strengthen the case):**
- No Google Business Profile, or unverified
- No structured data (LocalBusiness schema)
- Phone number not tappable
- No booking path or conversion action
- No Open Graph tags (site looks broken when shared on WhatsApp)
- No SSL, no sitemap, no robots.txt

**Tier 3 — Secondary (mention in scope, not in pitch):**
- Slow load time
- Outdated design
- No social media links
- No testimonials or trust signals

### The audit output

One sentence that explains the core problem in plain language — no jargon.

> **Rada's Beauty:** "Her website has a setting that tells Google not to show it in search results. She is paying for a website that is invisible."

This sentence is the pitch. Everything else is supporting evidence.

### How to do the audit (15 minutes)

1. Google the business name + city — does the website appear?
2. Open the site on your phone — does it load and feel usable?
3. View page source (Cmd+U) — search for `noindex`, `nofollow`, `robots`
4. Check [PageSpeed Insights](https://pagespeed.web.dev) — note mobile score
5. Check if Google Business Profile exists and is verified
6. Try to find a phone number above the fold without scrolling

Document the findings in a single paragraph. You do not need a spreadsheet.

---

## Stage 2 — Demo Strategy

**Goal:** build a demo that makes the contrast between "what they have" and "what's possible" unmissable in 10 seconds on a phone.

### The demo is not a redesign

The demo is a proof-of-concept. It must show:
1. This is specifically their business — their name, address, services, phone number
2. It works correctly on mobile
3. There is a clear path to contact or book

It does not need to be perfect. It needs to be visibly better.

### What the demo must prove in 10 seconds (above the fold on a phone)

- [ ] The business name is visible
- [ ] A clear headline communicates what the business does
- [ ] A CTA button is visible without scrolling
- [ ] A tappable phone number is visible

If all four are present before scrolling, the demo works.

### Design direction decisions (make these before touching the build tool)

**Palette:** warm, not cold. Beauty and wellness businesses should feel personal, not clinical. Avoid corporate blues and greys. Anchor around one warm primary — rose, terracotta, deep burgundy — with a warm cream background.

**Typography:** pair one serif (personality, warmth) with one clean sans (readability, trust). Playfair Display + Inter is a reliable combination for this category.

**Tone:** the copy should sound like the owner, not a marketing department. Personal pronouns. Short sentences. Specific details over generic claims.

**Sections to always include for a local service business:**
1. Hero (headline + CTA + phone)
2. Services with prices (the most common unanswered question)
3. About / who is behind this (trust, especially for solo operators)
4. Testimonials (social proof)
5. Contact + map (removes friction to visit)
6. FAQ (handles objections before the first appointment)

**Sections that add conversion value for beauty/wellness specifically:**
- A "missed call" or request form — clients call during treatment hours and get no answer; this captures those lost leads
- A sticky mobile CTA bar — keeps the booking action always accessible while scrolling
- A WhatsApp button — in Switzerland, WhatsApp is the primary low-friction contact method

---

## Stage 3 — Build Process

**Goal:** go from brief to live demo URL in one focused session. No overbuilding.

### The build tool approach (using Claude Code)

Claude Code is used iteratively, not in one large prompt. Each pass has a single objective. This prevents scope creep and keeps the output reviewable at each step.

**The pass structure that worked:**

| Pass | Objective | Rule |
|------|-----------|------|
| Scaffold | Project running on localhost | No content, no styling |
| Structure | All sections assembled in correct order | No styling |
| Design normalise | Consistent palette, type, spacing across all sections | No content yet |
| Content fill | Real German copy, real data, real images | No new components |
| Refinement | Fix visual issues, spacing, copy quality | Only targeted edits |
| Polish | SEO, performance, accessibility | No redesign |
| Launch prep | Build passes, Vercel config, favicon, schemas | No new features |

**The critical discipline:** do not move to the next pass until the current pass is done. "I'll fix the spacing later" always becomes technical debt.

### Prompt discipline

Each Claude Code prompt should have:
- One clear objective stated upfront
- Explicit constraints ("do not redesign anything", "targeted edits only")
- A definition of done ("build must pass with zero errors")

When a pass produces something that needs a major rethink, stop. Revert only the specific change. Do not allow a correction to become a redesign.

### The data file principle

All client-specific content lives in one file: `src/data/[client].ts`. Components receive content as props from this file. Nothing business-specific is hardcoded inside a component.

This means: to build the next client's site, you update the data file. You do not touch components.

If you find yourself editing component copy directly — stop and move it to the data file first.

### The single-page constraint (v1)

The demo is always a single page. No routing, no subpages, no blog. One URL, all content visible by scrolling.

This constraint:
- Keeps build time under a day
- Makes the demo easy to hand to someone and navigate
- Forces every section to earn its place

Multi-page architecture is a v2 conversation after the client has signed.

---

## Stage 4 — Refinement Loop

**Goal:** move from "working" to "trustworthy." These are different standards.

### The refinement mindset

A working demo proves the concept. A trustworthy demo closes the client. The gap is:
- Consistency — does every section feel like the same brand?
- Specificity — does every sentence sound like this specific business?
- Confidence — would you hand this URL to someone without apologising for anything?

### What to review in each refinement pass

**Copy review:**
- Remove every generic phrase ("quality service", "dedicated to excellence")
- Replace with specific details ("over 20 years", "no appointments needed", "3 minutes from Tram 2")
- Read every sentence aloud. If it sounds corporate, rewrite it

**Visual review:**
- Does every section use the same button style?
- Are all dropdown/select fields consistent?
- Is spacing consistent between sections?
- Does the mobile view feel as intentional as the desktop view?

**Conversion review:**
- Is the phone number tappable in at least 4 places?
- Is there a booking or contact action in every section?
- Is the sticky mobile CTA visible while scrolling?
- Does the WhatsApp button appear without covering other content?

### When to stop refining

You are done when:
1. You can hand someone the phone and they use it without any explanation from you
2. There is nothing on the page you are embarrassed by
3. The build passes with zero errors

Do not optimise further after these three conditions are met.

---

## Claude / AI Workflow Failure Patterns

**Goal:** know where AI-assisted workflows break down so you can constrain before it happens, not fix after.

### Common Failure Modes

- **Over-refactoring unrelated sections** — fixing one thing, breaking three others that were already working
- **Unnecessary layout changes** — a working structure gets reorganised because the prompt was interpreted too broadly
- **Breaking mobile while fixing desktop** — layout edits introduce shifts that aren't caught until mobile is tested
- **Spacing system drift** — one pass introduces a slightly different rhythm that propagates inconsistency across sections
- **Generic copy replacement** — specific, personal copy gets replaced with marketing-sounding language during a "refinement" pass
- **Architecture hallucination** — adding abstractions, new components, or extra state that solve no real problem
- **Rewriting instead of refining** — a correction becomes a redesign because the prompt scope was too open
- **Broken anchor links** — layout changes shift or rename section IDs without updating corresponding nav links
- **Accidental global CSS changes** — edits to shared styles break elements in unrelated sections
- **Effect and animation creep** — transitions and hover states accumulate until the page feels busy

### Mitigation Rules

- One objective per prompt — never combine "fix the spacing" with "update the copy" in one instruction
- One section per pass during late-stage refinement — do not touch three sections at once
- Freeze working sections explicitly — tell Claude what not to touch, not just what to change
- Never redesign and refactor in the same pass
- Test mobile after every pass that touches layout, spacing, or images
- After 70% completion, switch to targeted edits only — no structural changes
- Run the build after every major change — catch errors immediately before they compound
- Short prompts close to launch — the longer the prompt, the broader the interpretation

AI is fast at generation and fragile during refinement. The operator's job is not to generate more — it is to constrain precisely.

---

## Stage 5 — Launch Readiness

**Goal:** the demo should be indistinguishable from a live production website.

### The non-negotiables before any client meeting

- [ ] `robots: index, follow` — confirmed in page source (this is the core sales point)
- [ ] Live URL on Vercel — not localhost
- [ ] URL opens in under 3 seconds on mobile data
- [ ] Phone number tappable in nav, hero, contact, and footer
- [ ] CTA button visible above the fold on a 390px screen
- [ ] No lorem ipsum, no placeholder text, no broken images
- [ ] Build passes with zero errors

### SEO minimum (for demo credibility)

- Page title under 60 characters
- Meta description under 160 characters
- LocalBusiness structured data (name, address, phone, hours)
- FAQPage structured data
- Open Graph image (so the URL looks correct when shared on WhatsApp)
- Favicon (so the browser tab looks finished)

### Performance minimum

- Hero image loads immediately (prioritised fetch)
- All other images load lazily (only when scrolled into view)
- Total JavaScript under 100 KB gzipped

These are not perfectionist standards. They are the threshold between "looks like a real website" and "looks like a demo."

---

## The Emotional Layer

Most local business owners are not buying design. They are not evaluating component architecture or page speed scores. They are buying relief.

**What they are actually paying for:**
- Certainty that their business can be found online
- The feeling that they look professional to new customers
- Fewer missed calls and lost leads
- Something that works without them having to manage it
- Trust that the person building it understands their world

**What they are afraid of:**
- Spending money on something that doesn't work — again
- Being locked into a system they can't understand or control
- Looking outdated in front of clients
- Technology that requires ongoing attention they don't have

Most owners approaching a new website conversation have already been burned. A previous agency over-promised. A freelancer disappeared. A platform they built themselves never ranked on Google. They are not cynical — they are cautious.

The live demo short-circuits that caution. It removes the gap between "here is what I will build" and "here is what it already looks like." The client can see their name, their address, their services, and their phone number on a working page before any money changes hands. The uncertainty collapses.

The emotional power of this process comes from four things: specificity — it is unmistakably their business, not a template. Realism — it is a live URL, not a mock-up. Speed — it already exists before they expected anything. And showing instead of explaining — no pitch deck, no proposal, no promise.

The silence after handing them the phone is not awkward. It is the moment the sale happens.

---

## Stage 6 — The Pitch

**Goal:** create a contrast. Not a presentation.

### The walk-in structure

**Step 1 — Show the problem (30 seconds)**
Pull out your phone. Search Google for their business name. When the site doesn't appear, say:

> "Das ist das Problem."

Do not explain further yet. Let the absence speak.

**Step 2 — Show the solution (20 seconds of silence)**
Open the demo URL. Hand them the phone. Say nothing. Let them scroll.

**Step 3 — Name what they just saw (one sentence)**
> "Das ist Ihr Name, Ihre Adresse, Ihre Behandlungen — und Google kann es finden."

**Step 4 — Explain the root cause (plain language)**
> "Ihre jetzige Website hat eine Einstellung, die Google sagt: diese Seite soll nicht angezeigt werden. Das ist keine Design-Frage. Das ist eine einzige Zeile."

**Step 5 — Offer the path forward**
> "Das Full-Paket — neue Website, Google-Optimierung, Buchungssystem — kostet CHF 2'200. Fertig in einer Woche."

### What not to do

- Do not explain how websites work
- Do not mention Tailwind, React, or any technology
- Do not show them the code
- Do not apologise for anything on the demo
- Do not present multiple options in the first conversation

### Handling objections

| Objection | Response |
|-----------|----------|
| "Ich muss darüber nachdenken" | "Natürlich. Ich lasse Ihnen die Demo-URL — schauen Sie sie sich in Ruhe an. Wann passt ein kurzes Telefonat diese Woche?" |
| "Meine jetzige Website hat mich schon viel gekostet" | "Das glaube ich. Und genau deshalb ist es wichtig, das jetzt zu beheben — jeder Monat ohne Google-Sichtbarkeit ist verlorene Anfragen." |
| "Brauche ich das wirklich?" | "Suchen Sie einmal selbst nach Kosmetikstudio in Altstetten. Das sind Ihre Mitbewerber. Die erscheinen. Sie nicht." |

---

## Stage 7 — Scaling the System

**Goal:** make the second client faster than the first.

### The intake-to-data-file workflow

Every client engagement starts with structured intake. The intake output maps directly to the data file.

**Intake fields (collect before touching the build tool):**

```
Business name:
Owner name:
Phone:
Address:
Hours:
Services (name + short description + price range + duration):
About the owner (2–3 sentences in their voice):
3 testimonials (text + first name + service type):
6–8 FAQ questions and answers:
Social media handles (Instagram, Facebook, TikTok):
```

Feed this to Claude with: *"Generate the client data file in this format: [paste the TypeScript interface]."*

With a complete intake, the data file takes 10 minutes to generate, not 2 hours.

### The image workflow

Collect 8–10 images minimum per client:
- 1 hero / atmosphere image
- 1 portrait of the owner
- 1 image per service (6 for a standard beauty studio)

Compress all images before adding to the project. Source images from the client's existing social media if they have none (common). Resize service images to 900px wide; portrait to 700px; hero to 1440px.

Naming convention: `service-[slug].jpg`, `hero-[slug].jpg`, `portrait-[name].jpg`.

### The component library is fixed

Do not rebuild the component system per client. The 16 components in this system cover every standard local service business. What changes per client:

| What changes | What doesn't |
|-------------|-------------|
| Data file content | Component structure |
| Brand colours (3 hex values) | Layout system |
| Images | Booking UX logic |
| Copy | Mobile patterns |
| Social URLs | Floating button system |
| Schema addresses | SEO head structure |

If a client's business genuinely requires a new component, add it to the library. Do not create one-off components that only work for one client.

### Pricing model

| Tier | Deliverable | Price |
|------|-------------|-------|
| Demo only | Live Vercel URL — used as sales asset, not handed off | Free |
| Starter | 1-page site, custom domain, SEO setup, Vercel deployment | CHF 1'500 |
| Standard | 1-page site + booking integration + Google Business setup | CHF 2'200 |
| Full | Multi-page, blog, intake system, monthly maintenance | CHF 3'500 + CHF 150/mo |

The demo pays for itself when it closes one Standard engagement.

### What makes this business defensible

The demo is not the product. The process is.

Any web designer can build a page. The defensible position is:
1. You audit before you design — you come with a finding, not a pitch
2. You know the specific failure modes of local service businesses
3. You build fast enough that the demo exists before the client has time to say no
4. You speak their language — local, German, specific to their situation

---

## Time & Profitability Rules

**Goal:** protect the economics of the system. Speed and reuse are not shortcuts — they are the business model.

### Non-Negotiables

- Demo build: 4–6 hours maximum
- Refinement before pitch: 2 hours maximum
- No custom backend in v1 — ever
- No CMS during the demo stage
- No client revision rounds before commitment and payment
- No redesign loops triggered by vague feedback
- No custom animations unless the component is reusable across clients
- No "just one extra thing" after launch prep begins

These are not constraints imposed by time pressure. They exist because every exception erodes the margin that makes this sustainable.

### Profitability Target

| Metric | Target |
|--------|--------|
| Revenue per project | CHF 2'000–3'500 |
| Total hours | Under 25 |
| Component reuse | 70–80% |
| Effective hourly rate | CHF 100–140 |

The goal is not a perfect website. The goal is a profitable, repeatable outcome that leaves capacity for the next client.

### Scope Control

Every deviation from the reusable system increases delivery time, cognitive load, and support burden. A feature built once for one client is maintenance debt. A feature built once for the library is leverage.

Before adding anything that wasn't in the previous project, ask: can this be reused for the next three clients? If not, it probably should not exist yet.

**Custom work compounds complexity.** The client who needs the most custom work is rarely the most profitable — they are usually the most draining.

---

## What to Build in v2

**For the client (add after signing):**
- Real booking system integration (Fresha, Salonkee, or Calendly)
- WhatsApp pre-fill from booking widget selections
- Instagram feed embed (strong for beauty studios posting regularly)
- Google Business Profile optimisation as a separate paid service

**For the system (improve the build process):**
- Notion intake form that outputs a structured JSON → data file in one step
- Automated image compression in the build pipeline (no manual sips commands)
- WebP image format (30–40% smaller than JPEG at equal quality)
- Per-service subpages with individual schema markup (major SEO uplift)
- Sitemap auto-generation on build

**For the pitch:**
- A short case study document from Rada's Beauty once the relationship progresses
- Before/after screenshots of the audit finding and the demo side by side
- A one-page PDF leave-behind summarising the offer

---

## System Evolution Path

The current system is optimised for speed and validation. It is not optimised for scale. That is intentional. Architecture should be earned through repeated delivery, not assumed from the start.

| Phase | Goal |
|-------|------|
| Phase 1 | Close first 3 paying clients |
| Phase 2 | Identify repeated patterns and bottlenecks |
| Phase 3 | Extract reusable components and section variants |
| Phase 4 | Introduce a theme layer and layout variants per industry |
| Phase 5 | Create industry-specific starter kits |

The first goal is not architecture perfection. The first goal is finding out what actually sells, what clients ask for after signing, and what breaks during delivery.

Premature architecture is a common founder trap. After one successful project, the temptation is to generalise everything immediately — build a framework, a CMS, an admin panel. That work destroys the speed advantage before the business has validated what it is actually selling.

A reusable system should emerge from repeated delivery patterns, not assumptions about what might be needed. Do not build complex abstractions before real clients, real revision requests, real deployment problems, and real support requests have exposed what genuinely needs to be systematised. Those problems are the specification. Everything before them is a guess.

---

## Strategic Direction

This is not a freelance website business. The website is the entry point. The business is local conversion infrastructure.

What local service businesses actually need is not a prettier page. They need to be found when someone searches nearby, to capture leads that would otherwise be missed, and to make contact or booking effortless. The website solves the visibility and first-impression problem. Everything that follows solves the retention and revenue problem.

### The Full System

| Layer | What it does |
|-------|-------------|
| Website | Visibility, trust, first conversion |
| Google Business Profile | Local search ranking, reviews, maps presence |
| Missed-call capture | Automated response to unanswered calls |
| WhatsApp automation | Lead qualification and appointment confirmation |
| Booking flow | Captures intent 24/7, reduces back-and-forth |
| GEO / AI search | Presence in AI-generated local recommendations |
| Review system | Prompts satisfied clients to leave Google reviews |
| Appointment reminders | Reduces no-shows with automated follow-up |
| Intake automation | Replaces manual onboarding and intake forms |
| Lead tracking | Where leads come from, what converts |
| Lightweight CRM | Client history, follow-up triggers, retention logic |
| AI assistant | Answers questions, qualifies leads after hours |

Not all of this is built on day one. Each layer is introduced as the client sees value and the relationship matures. The website earns trust. The infrastructure earns retention.

### Recurring Revenue Opportunities

| Service | Monthly value |
|---------|--------------|
| Hosting and maintenance | CHF 80–150 |
| SEO and GEO retainer | CHF 200–400 |
| Google Business Profile management | CHF 150–250 |
| WhatsApp and missed-call automation | CHF 150–300 |
| Appointment reminder system | CHF 100–200 |
| Intake automation | CHF 100–200 |
| Lead tracking dashboard | CHF 100–150 |

One client on Standard plus a basic maintenance and SEO retainer generates CHF 2'500–3'000 in month one and CHF 300–500 every month after. Ten clients on retainer is a sustainable business that does not require constant new sales.

**The website gets the first payment. The system creates the business.**

---

## The Real Moat

Websites are becoming commoditised. AI-generated UI is becoming commoditised. Fast builds are becoming commoditised. Any competent developer with the right tools can ship a clean one-page site in a day.

That is not the advantage.

Most competitors do one of two things: focus on aesthetics — the site looks good but does not convert — or focus on technical delivery — the site is built correctly but the client has no idea how it helps their business. Neither position is defensible on its own.

The advantage is combining UX thinking, conversion logic, automation awareness, and genuine understanding of how local service businesses operate day to day — and then delivering it fast enough that the client sees the solution before they've finished processing the problem.

**The website is not the moat. The operational understanding is.**

A client who trusts you with their website will trust you with their Google Business Profile, their missed-call system, their WhatsApp automation, their review flow, and eventually their entire customer communication infrastructure. That trust is not built by design quality alone. It is built by arriving with a specific finding, a working solution, and a clear price — before they asked for any of it.

Visibility, trust, booking, communication, lead capture, and retention are not separate services. For a local business owner, they are one problem: how do I get more clients and not lose the ones I have. The business that can connect those layers into a coherent, simple system — and maintain it — owns the relationship.

The future business is not building websites. It is building lightweight revenue infrastructure for local businesses that cannot afford, and do not need, an enterprise agency.

---

## Quick Reference — The System in One Page

```
1. FIND THE CLIENT
   Local service business with an existing site.
   Beauty, wellness, food, fitness, health.

2. DO THE AUDIT (15 minutes)
   Google them. Can you find them?
   Open on mobile. Does it work?
   View source. Is there noindex?
   One finding. One sentence.

3. BUILD THE DEMO (4–6 hours)
   Fill the data file with their real content.
   Use real images. Real copy. Real prices.
   One page. Live URL. Mobile-first.

4. REFINE TO TRUSTWORTHY
   Consistent design. No generic copy.
   No broken states. Build passes zero errors.
   Would you hand it over without apologising?

5. PITCH THE CONTRAST
   Show Google not finding them.
   Hand them the phone. Stay silent.
   Name the fix. Give the price. Close.

6. REPEAT
   Next client: update data file.
   Swap images.
   Update domain and schemas.
   Ship in half the time.
```

---

*This document covers the process. For technical implementation details — stack, component architecture, SEO configuration, and build setup — see `technical-architecture-v1.md`.*
