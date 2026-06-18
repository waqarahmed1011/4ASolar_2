<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Website Reverse-Engineer Template

## What This Is
A reusable template for reverse-engineering any website into a clean, modern Next.js codebase using AI coding agents. The Next.js + shadcn/ui + Tailwind v4 base is pre-scaffolded — just run `/clone-website <url1> [<url2> ...]`.

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui (Radix primitives, Tailwind CSS v4, `cn()` utility)
- **Icons:** Lucide React (default — will be replaced/supplemented by extracted SVGs)
- **Styling:** Tailwind CSS v4 with oklch design tokens
- **Deployment:** Vercel

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Responsive: mobile-first

## Design Principles
- **Pixel-perfect emulation** — match the target's spacing, colors, typography exactly
- **No personal aesthetic changes during emulation phase** — match 1:1 first, customize later
- **Real content** — use actual text and assets from the target site, not placeholders
- **Beauty-first** — every pixel matters

## Project Structure
```
src/
  app/              # Next.js routes
  components/       # React components
    ui/             # shadcn/ui primitives
    icons.tsx       # Extracted SVG icons as React components
  lib/
    utils.ts        # cn() utility (shadcn)
  types/            # TypeScript interfaces
  hooks/            # Custom React hooks
public/
  images/           # Downloaded images from target site
  videos/           # Downloaded videos from target site
  seo/              # Favicons, OG images, webmanifest
docs/
  research/         # Inspection output (design tokens, components, layout)
  design-references/ # Screenshots and visual references
scripts/            # Asset download scripts
```

## MOST IMPORTANT NOTES
- When launching Claude Code agent teams, ALWAYS have each teammate work in their own worktree branch and merge everyone's work at the end, resolving any merge conflicts smartly since you are basically serving the orchestrator role and have full context to our goals, work given, work achieved, and desired outcomes.
- After editing `AGENTS.md`, run `bash scripts/sync-agent-rules.sh` to regenerate platform-specific instruction files.
- After editing `.claude/skills/clone-website/SKILL.md`, run `node scripts/sync-skills.mjs` to regenerate the skill for all platforms.

@docs/research/INSPECTION_GUIDE.md

---

# 4A Solar — Project Context

This section contains everything an agent needs to work on this project without reading separate docs files. The three subsections below are the canonical, merged source of truth.

---

## Business Context

> Colors, fonts, spacing, and animation patterns are NOT specified here — those come from the Design System section below. This section is business facts only.

**Business:** 4A Solar
**Tagline:** Keep It Simple
**Phone:** 773-502-1529
**Email:** contact@4asolar.com
**Address:** 5912 Crain St, Morton Grove, Illinois 60053
**Electrical License:** 24-35956
**Domain:** 4asolar.com
**Founded:** 2026 (Chicago operations; owner has 15+ years of solar experience dating back to 2010)
**Hosting:** Netlify
**Service Area:** All of Illinois

**Owner:** Muqheet "Sam" Syed

**Owner Background:**
- Former Senior Electrical Engineer at Motorola for 10 years, working on cryptographic hardware
- Founded a solar company in San Diego in 2010, installed 100+ solar systems there
- NABCEP instructor, taught certification courses at the college level
- Trained 200+ photovoltaic systems installers across the country
- Former Education Committee Member at a national solar industry organization
- Volunteer installer for a nonprofit providing solar to low-income families
- Now bringing this experience to Illinois through 4A Solar

**What makes Sam different:**
- Engineering background means systems are designed for performance, not sales quotas
- He has personally trained 200+ other installers, so his standards are effectively the industry standard
- 100% customer satisfaction record across his career, every past customer gave 5 stars
- No-pressure philosophy: system sizing is based on engineering math, not upselling

### Services

- Residential Solar
- Commercial Solar
- Solar for Non-Profits
- Battery Storage Systems
- EV Charger Installation
- Service & Repairs
- Solar Incentives Consulting

### Certifications

- NABCEP Certified PV Installation Professional
- NABCEP Certified PV Systems Inspector
- NABCEP Certified PV Technical Sales
- ETA Certified PV Installer
- OSHA Certified
- NEC Code for Photovoltaics, NFPA Certificate

**Badge image files (in brand_assets, copy into this project's public/images folder):**
- NABCEP Board Certified PV Installation Professional badge
- NABCEP Board Certified PV System Inspector badge
- North American Board of NABCEP Certified Energy Practitioners logo
- 4A Solar company logo

These three NABCEP badges are 4A Solar's primary trust signal, since being certified in installation, inspection, AND technical sales simultaneously is rare in the industry. They should appear somewhere prominent, ideally in more than one place across the homepage.

### Key Stats

- 15+ years of solar experience
- 100+ solar PV systems installed
- 200+ solar professionals trained
- 100% 5-star customer satisfaction record
- Serving all of Illinois

### Testimonials (Adapted from Real Client and Colleague Reviews)

Use these five. They are already written and approved, no need to invent new ones.

**1. Henry Chang, Homeowner**
"From the survey and planning to the finished product, Sam executed the entire installation with thorough professionalism. He had excellent knowledge of the system and provided multiple alternatives that would work well with our house. Finished exactly on time, no surprises whatsoever. I would recommend anyone interested in solar to hire Sam."

**2. Victoria Srour, Homeowner**
"Sam installed a complicated off-grid solar system for our two new homes. Because of his analysis and understanding of our needs, we are now enjoying free electricity. His hard work and creativity were unlike anything we had seen. An awesome experience we will never forget."

**3. Jim Knoke, Senior Engineer**
"Sam managed the installation of a solar system for my home. He got it done quickly and cleanly. There were no problems with the installation or the system. Sam was easy to talk to and incredibly responsive to every question I asked. First-class service from start to finish."

**4. Cindy Forcier, Product Manager**
"We purchased a solar system from Sam and could not be happier. He was very knowledgeable and helped us understand every step of the process. He stayed in contact after installation to make sure everything ran perfectly. His engineering background made all the difference."

**5. Mike Neville, Solar Industry Professional**
"Sam has installed over 100 solar systems since 2011. His company received five-star reviews from every customer on Yelp. Everyone who works with him remarks on how knowledgeable he is and how his team always goes above and beyond to make sure every customer is completely satisfied, through the installation and long after."

If the approved component mapping calls for fewer or more than five testimonials, keep them in this same order of preference (1 is strongest, 5 is the backup) when trimming.

### Service Area Detail

Based in Morton Grove. Also serving: Skokie, Evanston, Niles, Glenview, Park Ridge, Des Plaines, Schaumburg, and the rest of Illinois.

**Hours:** Mon-Fri 8am-6pm, Sat 9am-3pm

### Educational Content (for any blog/news-style section)

If the existing layout has a slot for short educational articles or news cards, these topics fit 4A Solar and can be used to fill it:

- How Solar Works
- Guide to Going Solar
- Understanding Net Metering
- Federal Investment Tax Credits
- Illinois Solar Incentives (SRECs)
- Illinois Shines Program
- ComEd Solar Rebates

Each can be a short excerpt (2-3 sentences) written specifically for 4A Solar's audience, not generic industry copy.

### Inner Pages Planned (Build After Homepage)

Residential, Commercial, Non-Profits, Batteries, EV Chargers, Service & Repairs, Solar Incentives, About Us. Stub pages get built first with placeholder "coming soon" content and a working link back to the homepage contact section; full content for each comes one at a time in later sessions.

---

## Design System

The Virya Energy visual identity is 4A Solar's permanent design system. Do not revert to any prior navy/orange palette. The full reference lives at `docs/design-system.md` — the key values every agent needs are summarized here.

### Colors

**Virya Palette (Tailwind tokens via `@theme inline`):**

| Token | CSS Variable | Hex | Role |
|---|---|---|---|
| Orange (primary) | `--color-virya-orange` | `#ff5938` | CTAs, accents, active states, brand highlights |
| Beige | `--color-virya-beige` | `#eee8e2` | Alternating section backgrounds |
| Muted | `--color-virya-muted` | `#9f908d` | Secondary text, muted heading words, stat labels |
| Dark | `--color-virya-dark` | `#1f1e1e` | Primary body text, mobile menu background |
| Light | `--color-virya-light` | `#fefefe` | Page background, scrolled header |
| Green | `--color-virya-green` | `#185649` | Footer pre-footer CTA card |
| Dark Green | `--color-virya-dark-green` | `#0f4338` | Footer outer background |
| Stat Card | `--color-virya-stat-card` | `#afc2bb` | Statistics section left highlight card |

**Section background rhythm** (white and beige alternate throughout, green footer as anchor):
- HeroSection: `#1a1a1a` behind video, `bg-black/35` overlay
- ItemsSlider, MapSection, ProjectsSlider: `#eee8e2`
- StatisticsSection, BrandPromiseSection, HighlighterServices, LatestNews: `#ffffff`
- SiteFooter outer: `#0f4338` | Pre-footer CTA card: `#185649`

### Typography

**Single typeface: Source Sans 3** (loaded via `next/font/google` as `--font-source-sans`).
- Weights loaded: 300, 400, 600, 700 (normal + italic)
- All headings use **weight 400** (regular). Hierarchy comes from size and color, never bold.
- Letter-spacing on all headings: `−0.02em`

**Key heading sizes:**
- Hero H1: `clamp(56px, 8.33vw, 120px)`
- Section H2: `clamp(36px, 3.5vw, 48px)` (standard) or `clamp(36px, 3.84vw, 55.25px)` (virya-h2 class)
- Footer CTA / Stats card H2: `clamp(28px, 3.5vw, 52px)`

**Split heading pattern:** Primary word in `#1f1e1e`, secondary "muted" word in `#9f908d`.
**Orange accent pattern:** One keyword highlighted in `#FF5938` within otherwise white/light headings.

### Buttons

All buttons use `border-radius: 999px` — no rectangular buttons anywhere.

| Class | Style |
|---|---|
| `.virya-btn-primary` | Orange fill (#ff5938), white text, padding 14px 28px, 16px font |
| `.virya-btn-outline` | Transparent bg, white border at 60% opacity, white text — for dark backgrounds |
| `.virya-btn-ghost` | Transparent bg, dark border at 25% opacity, dark text, 15px font — for light backgrounds |

### Spacing

- Section vertical padding: `80px 0` (most sections), `100px 0` (BrandPromise)
- `.virya-wrapper`: max-width 1440px, padding `0 80px` → `0 40px` (≤1024px) → `0 24px` (≤640px)
- Narrow wrapper: max-width 1200px, padding `0 40px`
- Card internal padding: `24px` standard, `32px 24px` stat boxes, `40px` stat left card

### Border Radius

| Value | Used On |
|---|---|
| `999px` | All buttons, pill tags, map filter tabs |
| `50%` | Slider nav arrow buttons |
| `24px` | Footer CTA card |
| `20px` | Slider cards (ItemsSlider, ProjectsSlider), stat left card, HighlighterServices image |
| `16px` | Stat boxes, news cards |

### Animations

- **`virya-fade-up`**: `opacity 0 → 1`, `translateY(24px → 0)`, 0.7s ease forwards
- **Horizontal sliders**: `transform translateX`, `0.4s ease` transition
- **Header scroll**: transparent → frosted glass at 80px scroll depth, `all 0.3s ease`
- **Button hovers**: `0.2s ease` on background/border transitions
- **Typewriter** (HighlighterServices): 80ms/char type, 50ms/char erase, 2500ms pause, 500ms cursor blink
- **Lottie** (StatisticsSection, BrandPromiseSection): loaded via `next/dynamic` SSR-disabled, looping

### Utility Classes

`.virya-wrapper`, `.virya-h1`, `.virya-h2`, `.virya-btn-primary`, `.virya-btn-outline`, `.virya-btn-ghost`, `.text-virya-orange`, `.text-virya-muted`, `.text-virya-dark`, `.text-virya-light`, `.bg-virya-beige`, `.bg-virya-orange`, `.bg-virya-green`, `.bg-virya-dark-green`, `.animate-fade-up`, `.hide-scrollbar`

---

## Section Mapping

**Status:** Approved. Implement component by component per this mapping.

This is the final approved content mapping from Virya Energy → 4A Solar. For each section: what changes, what the new content is, and any pending asset decisions.

### 1. SiteHeader

**Changes:** Logo, 8 nav links, CTA button text + destination. Add a topbar above the main nav.

**Nav links:**

| Slot | New label | href |
|---|---|---|
| 1 | Residential | `/residential` |
| 2 | Commercial | `/commercial` |
| 3 | Non-Profits | `/non-profits` |
| 4 | Batteries | `/batteries` |
| 5 | EV Chargers | `/ev-chargers` |
| 6 | Service & Repairs | `/service-repairs` |
| 7 | Solar Incentives | `/solar-incentives` |
| 8 | About Us | `/about` |

**CTA:** "Get a Free Quote" → `#contact`

**Topbar:** Add a topbar component above the header using the existing design system colors. Reference `brand_assets/topbar.png` for layout. Include the phone number (773-502-1529) and a "Get a Free Quote" CTA button. No new colors — use tokens from `docs/design-system.md`.

**Logo:** Replace `virya-logo.png` with `4asolar-logo.png` (copy from `brand_assets` to `public/images/`).

**NABCEP badges:** Add the 3 NABCEP badge images to the top-left of the hero section (near hamburger menu area).

---

### 2. HeroSection

**Changes:** H1 text, body paragraph, CTA labels + destinations. Video asset.

**H1:** `"Keep It Simple."`

**Body paragraph:** Leave empty (same as current — the `<p>` tag is already empty).

**CTAs:**

| Current | New | href |
|---|---|---|
| "Build with us →" | "Get a Free Quote" | `#contact` |
| "Discover our work" | "Call Us" | `tel:773-502-1529` |

**Hero video:** Replace `/videos/hero.mp4` with `newhero.mp4` from `brand_assets`.

---

### 3. ItemsSlider

**Changes:** Section heading, all 6 slide cards → 7 cards. Add one card to the array.

**Section heading:** "Our " (dark) + "services" (muted)

**7 cards (full data):**

| # | Icon | Title dark | Title muted | Title rest | Description |
|---|---|---|---|---|---|
| 1 | `/icons/solar.svg` | "Residential " | "solar" | " design and installation." | "Custom-sized systems for Illinois homeowners. Every design is based on your actual usage and roof conditions — no oversizing, no upselling." |
| 2 | `/icons/solar.svg` | "Commercial " | "solar" | " for businesses of all sizes." | "We design and install commercial solar systems that reduce operating costs and qualify for federal and state tax incentives." |
| 3 | `/icons/solar.svg` | "Solar for " | "non-profits" | " — mission-aligned energy." | "Non-profit organizations qualify for special incentive pathways. We help you navigate grant eligibility and maximize savings." |
| 4 | `/icons/solar.svg` | "Battery " | "storage" | " systems for energy independence." | "Pair your solar system with battery backup to keep the lights on during outages and maximize your self-consumption." |
| 5 | `/icons/solar.svg` | "EV charger " | "installation" | " for home and business." | "We install Level 2 EV chargers alongside your solar system, letting you charge your vehicle on clean Illinois solar energy." |
| 6 | `/icons/solar.svg` | "Service and " | "repairs" | " for existing solar systems." | "We diagnose and repair solar systems of any brand. Annual inspections available to keep your system producing at peak output." |
| 7 | `/icons/solar.svg` | "Solar incentives " | "consulting" | " — Illinois and federal." | "We walk you through the Federal ITC, Illinois Shines SRECs, ComEd rebates, and net metering so you know exactly what you'll save." |

**Note on icons:** `/icons/solar.svg` is used as a fallback across all 7 cards until service-specific icons are sourced. This is fine for launch.

**Note on images:** Current stock images in `/public/images/` can remain as placeholders until 4A Solar-specific photography is acquired.

---

### 4. StatisticsSection

**Changes:** Left card heading + button, 4 stat boxes (numbers + labels). Lottie files pending decision.

**Left highlight card:**
- Heading: `"4A Solar"` (orange) + `"\nby the\nnumbers"` (white)
- Button: "About Sam" → `/about`

**4 stat boxes:**

| Box | Number | Label |
|---|---|---|
| 1 | "15+" | "Years of solar experience" |
| 2 | "100+" | "Solar PV systems installed" |
| 3 | "200+" | "Solar professionals trained" |
| 4 | "100%" | "5-star customer satisfaction" |

**Lottie files:** Replace `/lottie/wind.json`, `/lottie/profile.json`, `/lottie/fuel.json`, `/lottie/globe.json` with appropriate animations for: time/calendar, solar panel, people/group, star/rating. Source free animations from Lottiefiles.com. If no assets are ready, remove the Lottie elements entirely — number + label alone looks clean.

**NABCEP badges:** Add the 3 NABCEP badge images below the heading in the left highlight card, above the button.

---

### 5. BrandPromiseSection

**Changes:** Heading, body paragraph, button text + destination. Lottie → Sam's photo.

**Heading:**
Line 1: `"Our "Keep It Simple""` (dark)
Line 2: `"Philosophy"` (muted)

**Body paragraph:**
> "At 4A Solar, we believe that going solar shouldn't be complicated. Sam Syed spent 10 years as a Senior Electrical Engineer at Motorola before becoming one of the country's leading solar educators and installers. That background means every system he designs is based on engineering math — the right size for your actual needs, no pressure, no guesswork."

**Button:** "Learn more about Us" → `/about`

**Right column:** Replace the `<Lottie>` element with a `<Image>` of Sam. Remove the `next/dynamic` Lottie import when this is done. Use the photo from `brand_assets` if available.

**NABCEP badges:** Add the 3 NABCEP badge images below the body paragraph, before the "Learn more about Us" button.

---

### 6. MapSection → "Service Area"

**Changes:** Heading, descriptor text, location stats row, ghost button, map image + hotspot position, filter tabs → city chips.

**Heading:**
Line 1: `"Serving All of"` (dark)
Line 2: `"Illinois"` (muted)

**Descriptor text:** "Based in Morton Grove. Available across Chicagoland and statewide."

**Location stats row** (replace "99 worldwide projects · 3 in Asia · 97 in Europe"):
`"Chicagoland · North Shore · Northwest Suburbs · All of Illinois"`
These are decorative labels — no filter logic needed.

**Filter tabs → city chips** (decorative, no filter behavior):
- "Morton Grove (HQ)"
- "Skokie · Evanston · Niles"
- "Glenview · Park Ridge"
- "Schaumburg & beyond"

**Ghost button:** "Check if we serve your area" → `#contact`

**Map image:** Replace `/images/virya-image-27.jpg` with an Illinois/Chicagoland map image. Reposition the orange radial hotspot to the Chicago metro area (approximately center of the map).

---

### 7. HighlighterServices

**Changes:** Section heading prefix, 4 panels → 3 panels (Homeowners / Businesses / Non-Profits).

**Section heading:** "Solar solutions for " + `[typed word]`

**3 panels:**

**Panel 1 — typed word: "Homeowners"**
Body: "Going solar at home should be straightforward. Sam sizes your system based on your actual utility bills and roof conditions — no oversizing, no pressure, and a full walkthrough of every incentive available to you."
Tags: "Reduce Your Electric Bill", "Illinois Incentives", "Increase Home Value", "Battery Backup"
Image: *[placeholder — existing stock image acceptable until real photography is sourced]*

**Panel 2 — typed word: "Businesses"**
Body: "Commercial solar reduces your operating costs, qualifies for the federal Investment Tax Credit, and signals sustainability to your customers. We handle the entire project from engineering to interconnection."
Tags: "Lower Operating Costs", "Federal Tax Credit", "Scalable Systems", "Energy Independence"
Image: *[placeholder]*

**Panel 3 — typed word: "Non-Profits"**
Body: "Non-profit organizations have unique access to Illinois solar incentives and grant pathways that for-profit entities can't use. We help you structure the project to maximize every available dollar."
Tags: "Mission-Aligned Energy", "Grant Eligible", "Community Impact", "Illinois Shines"
Image: *[placeholder]*

**"Learn more" button:** Wire each panel to its inner page (`/residential`, `/commercial`, `/non-profits` respectively).

---

### 8. ProjectsSlider → TestimonialsSlider

**Changes:** Repurpose entirely from a projects showcase into a testimonials slider. The slider mechanism (CSS transform, chevron nav) stays unchanged — only the data and card structure change.

**Section heading:** "What our " (dark) + "clients say" (muted)

**5 testimonial cards** (use testimonial data from Business Context above, in order 1–5).

Each card shows:
- Quote text
- Client name (bold)
- Client title / description

**Slot count:** 5 testimonials for 6 card slots. With ~3 cards visible at a time, a 5-card slider is a complete set — no dummy content needed for the 6th slot.

---

### 9. LatestNews → Solar Resources

**Changes:** Section heading, 3 article cards (tags, titles, dates, excerpts, links). Button text + destination.

**Section heading:** "Solar " (dark) + "resources" (muted)

**"See all resources" button:** → `/resources`

**Card 1 — How Solar Works:**
- Tags: "Education"
- Title: "How Does Solar Energy Work? A Plain-English Explanation"
- Excerpt: "Solar panels convert sunlight directly into electricity through photovoltaic cells. That electricity flows through an inverter, powers your home, and any surplus gets sent back to the grid — earning you a credit on your ComEd bill through net metering."
- Link: "Read more →" → `/resources/how-solar-works`

**Card 2 — Illinois Solar Incentives:**
- Tags: "Illinois", "Incentives"
- Title: "Illinois Solar Incentives in 2026: SREC, Illinois Shines, and ComEd Rebates"
- Excerpt: "Illinois offers some of the strongest solar incentives in the country. Between the Federal Investment Tax Credit, the Illinois Shines SREC program, and ComEd's net metering policy, most homeowners can offset a significant portion of their system cost."
- Link: "Read more →" → `/resources/illinois-solar-incentives`

**Card 3 — Guide to Going Solar:**
- Tags: "Guide"
- Title: "Your Step-by-Step Guide to Going Solar in Illinois"
- Excerpt: "Going solar in Illinois involves four main steps: a site assessment, system design, permits and interconnection, and installation. We walk every customer through each stage — here's what to expect from your first call to flip-the-switch day."
- Link: "Read more →" → `/resources/guide-to-going-solar`

---

### 10. SiteFooter

**Changes:** Pre-footer CTA text + button, logo, all 3 nav columns, social column, copyright.

**Pre-footer CTA card:**
- Heading: "Start saving with " + "solar energy" (orange) + " today."
- Button: "Get a Free Quote" → `#contact`

**Logo:** Replace with 4A Solar logo (white/inverted version).

**Column 1 — "Our Services" (7 links, expanded from 5):**
Residential Solar → `/residential`
Commercial Solar → `/commercial`
Solar for Non-Profits → `/non-profits`
Battery Storage → `/batteries`
EV Chargers → `/ev-chargers`
Service & Repairs → `/service-repairs`
Solar Incentives → `/solar-incentives`

**Column 2 — "Who We Serve" (5 links):**
Homeowners → `/residential`
Businesses → `/commercial`
Non-Profits → `/non-profits`
Free Quote → `#contact`
Contact Us → `#contact`

**Column 3 — secondary pages (5 links, no column header):**
About Sam → `/about`
Solar Resources → `/resources`
Contact Us → `#contact`
Service Area → `#service-area`
Illinois Solar Incentives → `/solar-incentives`

**Column 4 — "Follow us":**
Add placeholder icons for: LinkedIn, YouTube, Instagram, Yelp. All links `href="#"` until real profile URLs are confirmed.

**Bottom bar:**
- Copyright: "Copyright © 2026 JBW Tech Co"
- Center text: Remove (was "Virya Energy" — redundant with logo)
- Right: "Privacy Policy · Cookie Policy" (unchanged)

**Contact info:** Add phone (773-502-1529), email (contact@4asolar.com), address (5912 Crain St, Morton Grove, Illinois 60053), and hours (Mon–Fri 8am–6pm, Sat 9am–3pm) to the footer. This is a new element — add it above the nav columns or as an additional column.

**NABCEP badges:** Add the 3 NABCEP badge images above the nav columns as a badge row.

---

### 11. ContactSection (New Component)

**Build from scratch.** Place between LatestNews and SiteFooter in `page.tsx`.

**Required elements:**
- `id="contact"` anchor (all CTA buttons across the site link to `#contact`)
- Headline: "Get a Free Quote"
- Phone: `773-502-1529` as a `tel:` link
- Email: `contact@4asolar.com` as a `mailto:` link
- Address: `5912 Crain St, Morton Grove, Illinois 60053` with a Google Maps link
- Hours: Mon–Fri 8am–6pm, Sat 9am–3pm
- Visual style: follow the existing design system — beige background or white, `.virya-btn-primary` for the primary CTA button

---

### Pending Asset Decisions

These items are flagged — do not invent or use placeholder text for them; wait for the real assets or make a decision before implementing:

| Item | Status | Notes |
|---|---|---|
| 4A Solar logo | In `brand_assets` | Copy to `public/images/4asolar-logo.png` before implementing SiteHeader |
| NABCEP badge images | In `brand_assets` | Copy to `public/images/nabcep-*.png` |
| Hero video | In `brand_assets` as `newhero.mp4` | Copy to `public/videos/hero.mp4`, replacing the Virya footage |
| Sam's photo | Needed | For BrandPromiseSection right column |
| Illinois map image | Needed | For MapSection repurpose |
| Service-specific photography | Nice-to-have | ItemsSlider and HighlighterServices; current stock images are acceptable placeholders |
| Stat Lottie files | Decision needed | New Lottie files, static SVGs, or remove animations entirely |
| Social profile URLs | Unconfirmed | LinkedIn, Yelp, YouTube, Instagram — use `#` until confirmed |

---

## Hard Rules

These rules apply to every task in this project, without exception:

1. **Never use lorem ipsum or generic placeholder copy.** Every word must be specific to 4A Solar. Use the business facts in this file.
2. **Never invent certifications, stats, or testimonials** beyond what is listed in the Business Context section above.
3. **Never modify a component's existing styling, spacing, or animation when the task is only to change its content.** If a task says "update the text", change the text only — do not touch padding, font sizes, colors, transitions, or layout.
4. **Always confirm `docs/design-system.md` before making any visual decision.** Do not guess colors or fonts.
5. **The NABCEP badges must remain real image assets, not text-only references.** Never substitute badge images with text like "NABCEP Certified".
6. **Pricing is never displayed.** The site is consultation-only — no cost estimates, no price ranges.
7. **The Virya-derived design palette is permanent.** Do not revert to any prior navy/orange palette. The canonical colors are `#ff5938` (orange), `#eee8e2` (beige), `#1f1e1e` (dark), `#9f908d` (muted), `#185649` / `#0f4338` (greens).
