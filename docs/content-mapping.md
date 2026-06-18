# Content Mapping — Virya → 4A Solar

**Status:** Proposal only. No components have been modified. Awaiting approval before implementation begins.

**Sources used:**
- `docs/content-inventory.md` — current Virya content, every text string and image path
- `docs/4asolar-business-context.md` — all 4A Solar facts, stats, services, testimonials, rules
- `docs/design-system.md` — design system reference (no visual changes proposed here)

---

## How to Read This Document

Each section has:
- **Slot count comparison** — how many items the template holds vs how many 4A Solar has
- **Mapping** — what replaces what, field by field
- **Flags** — mismatches, missing assets, or decisions you need to make

Fit ratings:
- **Natural fit** — structure maps cleanly, no structural changes needed
- **Partial fit** — usable with minor trade-offs; flagged issues are noted
- **Poor fit / Repurpose** — existing structure doesn't suit the content; a repurpose is proposed

---

## 1. SiteHeader

**Fit: Natural**

### Slot count
Current: 8 nav links. 4A Solar inner pages planned: Residential, Commercial, Non-Profits, Batteries, EV Chargers, Service & Repairs, Solar Incentives, About Us = **8 pages exactly**. Perfect slot match.

### Proposed mapping

| Current (Virya) | Proposed (4A Solar) | href |
|---|---|---|
| Logo (`virya-logo.png`) | 4A Solar logo (`4asolar-logo.png` from brand_assets) | `/` |
| "Our expertise" | "Residential" | `/residential` |
| "Your activity" | "Commercial" | `/commercial` |
| "About Us" | "Non-Profits" | `/non-profits` |
| "Resources" | "Batteries" | `/batteries` |
| "News" | "EV Chargers" | `/ev-chargers` |
| "Cooperatives" | "Service & Repairs" | `/service-repairs` |
| "Careers" | "Solar Incentives" | `/solar-incentives` |
| "Projects" | "About Us" | `/about` |
| CTA: "Build with us →" | "Get a Free Quote" | `#contact` (anchor to a contact section, to be added — see Gaps section) |

### Mobile menu
Same 8 links, same CTA. Logo inverted to white via CSS filter — this already works since the logo will be dark on light background.

### Flags
- **Logo asset:** The `4A Solar company logo` file is in `brand_assets`. It needs to be copied into `public/images/` before implementation.
- **CTA destination:** "Get a Free Quote" should scroll to a contact section or form. The current site has no contact section (see Gaps at the end of this document). Confirm the destination before implementing.
- **Phone number option:** Many local solar installer sites put the phone number (`773-502-1529`) directly in the header. The current template has no slot for it. This is a structural addition, not a content swap — flagging for your decision. If you want it, it would require adding a new element to the header layout. I think you should just add a topbar with the 2 CTA buttons get a quote and the phone number. Use `topbar.png` in `brand_assets` as a reference but use the existing colors in `design-system.md`

---

## 2. HeroSection

**Fit: Natural (with one asset flag)**

### Slot count
1 headline, 1 body paragraph (currently empty), 2 CTA buttons.

### Proposed mapping

**H1 headline:**
Current: `"Fit for Purpose\nEnergy"`
Proposed (two-line, matching existing structure):
```
"Keep It Simple."
```
This puts the tagline where the eye lands after reading the larger first line, which mirrors the rhythm of the original.

**Body paragraph** (keep it empty):

**CTA buttons:**

| Current | Proposed | href |
|---|---|---|
| "Build with us →" | "Get a Free Quote" | `#contact` |
| "Discover our work" | "Call Us" | `773-502-1529` |

### Flags
- **Hero video:** The current video at `/videos/hero.mp4` is Virya's footage. 4A Solar needs its own video — aerial drone footage of a residential solar installation, or a wide shot of a completed system on an Illinois home would work. Use the `newhero.mp4` found in `brand_assets`

---

## 3. ItemsSlider

**Fit: Partial — 7 pages vs 6 card slots**

### Slot count
Current template: **6 slide cards**. 4A Solar pages: **7**. One service will not fit unless a card is added.

4A Solar services in full:
1. Residential 
2. Commercial 
3. Non-Profits
4. Batteries
5. EV Chargers
6. Service & Repairs
7. Solar Incentives 
**Recommendation:** Add a 1 more card to the `slides` array. The slider is driven by a JavaScript array and the carousel logic handles any number of items — there is no hardcoded limit to 6. This is a data change, not a structural one.

### Proposed card mapping (all 7)

| # | Icon file | Image (placeholder) | Title dark part | Title muted part | Title rest | Description |
|---|---|---|---|---|---|---|
| 1 | `/icons/solar.svg` | *[needs real photo]* | "Residential " | "solar" | " design and installation." | "Custom-sized systems for Illinois homeowners. Every design is based on your actual usage and roof conditions — no oversizing, no upselling." |
| 2 | `/icons/solar.svg` | *[needs real photo]* | "Commercial " | "solar" | " for businesses of all sizes." | "We design and install commercial solar systems that reduce operating costs and qualify for federal and state tax incentives." |
| 3 | `/icons/solar.svg` | *[needs real photo]* | "Solar for " | "non-profits" | " — mission-aligned energy." | "Non-profit organizations qualify for special incentive pathways. We help you navigate grant eligibility and maximize savings." |
| 4 | `/icons/solar.svg` | *[needs real photo]* | "Battery " | "storage" | " systems for energy independence." | "Pair your solar system with battery backup to keep the lights on during outages and maximize your self-consumption." |
| 5 | `/icons/solar.svg` | *[needs real photo]* | "EV charger " | "installation" | " for home and business." | "We install Level 2 EV chargers alongside your solar system, letting you charge your vehicle on clean Illinois solar energy." |
| 6 | `/icons/solar.svg` | *[needs real photo]* | "Service and " | "repairs" | " for existing solar systems." | "We diagnose and repair solar systems of any brand. Annual inspections available to keep your system producing at peak output." |
| 7 | `/icons/solar.svg` | *[needs real photo]* | "Solar incentives " | "consulting" | " — Illinois and federal." | "We walk you through the Federal ITC, Illinois Shines SRECs, ComEd rebates, and net metering so you know exactly what you'll save." |

### Flags
- **Section heading:** "Our " + "expertise" → "Our " + "services". The two-tone heading pattern works identically.
- **Icon files:** The current icons are `/icons/wind.svg`, `/icons/solar.svg`, `/icons/hydrogen.svg`, `/icons/monitoring.svg`, `/icons/transition.svg`. For 4A Solar, distinct icons for battery, EV charger, service/repair, and incentives would be appropriate. The simplest path is to source or create 4–5 additional SVG icons matching the existing stroke style (16–28px, `currentColor`, 1.5px stroke). Until then, `/icons/solar.svg` can be used as a fallback across all 8 cards. Flag this as a nice-to-have visual improvement, not a blocker.
- **Photography:** Propose sourcing photos by service type: a house with panels, a commercial roof, a battery wall, an EV charger, etc.
- **Card descriptions above** are draft copy. They are specific to 4A Solar and contain no invented facts, but should be reviewed for tone.

---

## 4. StatisticsSection

**Fit: Partial — 5 stats vs 4 card slots, Lottie icon mismatch**

### Slot count
Current template: **4 stat boxes** (2×2 grid). 4A Solar has **5 key stats**. One stat will not fit.

4A Solar stats:
1. 15+ years of solar experience
2. 100+ solar PV systems installed
3. 200+ solar professionals trained
4. 100% 5-star customer satisfaction record
5. Serving all of Illinois

**Recommendation:** Drop stat 5 ("Serving all of Illinois") from the stat boxes. It is not a number in the same sense as the others — it's a geographic fact better placed in a service area section or footer. The remaining 4 stats are strong numerics that match the `[number] / [label]` format exactly.

### Proposed stat box mapping

| Box | Current number | Current label | Proposed number | Proposed label | Lottie |
|---|---|---|---|---|---|
| 1 | "625 MW" | "Installed production capacity" | "15+" | "Years of solar experience" | *[needs new icon]* |
| 2 | "700+" | "Employees over multiple markets" | "100+" | "Solar PV systems installed" | *[needs new icon]* |
| 3 | "6" | "Hydrogen service stations" | "200+" | "Solar professionals trained" | *[needs new icon]* |
| 4 | "15+" | "Countries with a Virya presence" | "100%" | "5-star customer satisfaction" | *[needs new icon]* |

### Proposed left highlight card

| Field | Current | Proposed |
|---|---|---|
| Heading | `"Virya"` (orange) + `" Energy\nin a few\nnumbers"` (white) | `"4A Solar"` (orange) + `"\nby the\nnumbers"` (white) |
| Button | "Learn more" → nowhere | "About Sam" → `/about` |

### Flags
- **Lottie animation files:** `/lottie/wind.json`, `/lottie/profile.json`, `/lottie/fuel.json`, `/lottie/globe.json` are Virya-specific. None map to 4A Solar's stats (years/systems/trainees/satisfaction). Options:
  1. **Replace with new Lottie files** — source free animations for: a calendar/time icon, a solar panel, a person/group, and a star/rating. Lottiefiles.com has free assets.
  2. **Replace with static SVG icons** — simpler, no async fetch required. Would need a small refactor of the `StatBox` component's icon rendering.
  3. **Remove animations entirely** — render the number and label only, which still looks clean.
  This is a decision for you — option 3 is zero-effort, option 1 is the richest experience.
- **Decorative orange stripe** on the left card is purely visual and requires no content change.

---

## 5. BrandPromiseSection

**Fit: Natural (Lottie illustration flag)**

The two-column layout (text + animation) maps directly to 4A Solar's "Keep It Simple" philosophy and Sam's engineering-first approach. This is the most natural structural fit on the page.

### Proposed mapping

**Heading (two lines):**
Line 1: `"Our "Keep It Simple""` (dark)
Line 2: `"Philosophy"` (muted)

**Body paragraph:**
> "At 4A Solar, we believe that going solar shouldn't be complicated. Sam Syed spent 10 years as a Senior Electrical Engineer at Motorola before becoming one of the country's leading solar educators and installers. That background means every system he designs is based on engineering math — the right size for your actual needs, no pressure, no guesswork."

**Button:**
"Learn more about Us" → `/about`

### Flags
- **Lottie illustration:** `/lottie/ses-illu-en.json` is a Virya-branded animated diagram. 4A Solar has no equivalent Lottie file. Options:
  1. **Use a static photo** of Sam (or a team photo) in the right column — this would be a more compelling choice for a personal service brand anyway. Would require changing the `<Lottie>` element to a `<img>` or Next.js `<Image>`, and the `dynamic()` import can be removed. A headshot or working-photo of Sam would humanize the section significantly.
  2. **Use a generic solar Lottie** from a free library — maintains the animation but loses the personal feel.
  3. **Leave as visual placeholder** until a photo is provided.
  For a local service business built on personal trust, option 1 (Sam's photo) is strongly recommended. This is your call.

---

## Testimonials slider mapping (this needs to be added)

**Section heading:** "What our " (dark) + "clients say" (muted)

6 card slots, 5 testimonials available. **One slot will be empty** unless the 5th testimonial fills the gap naturally in the slider (the slider shows ~3 at a time, so 5 items is a full set with the last row slightly short).

Cards would show:
1. Quote (excerpt), Client name, Client description, Star rating (optional)
2. (etc. for each of the 5 testimonials)

Full testimonial content from `4asolar-business-context.md`:

| # | Name | Title | Quote (full) |
|---|---|---|---|
| 1 | Henry Chang | Homeowner | "From the survey and planning to the finished product, Sam executed the entire installation with thorough professionalism. He had excellent knowledge of the system and provided multiple alternatives that would work well with our house. Finished exactly on time, no surprises whatsoever. I would recommend anyone interested in solar to hire Sam." |
| 2 | Victoria Srour | Homeowner | "Sam installed a complicated off-grid solar system for our two new homes. Because of his analysis and understanding of our needs, we are now enjoying free electricity. His hard work and creativity were unlike anything we had seen. An awesome experience we will never forget." |
| 3 | Jim Knoke | Senior Engineer | "Sam managed the installation of a solar system for my home. He got it done quickly and cleanly. There were no problems with the installation or the system. Sam was easy to talk to and incredibly responsive to every question I asked. First-class service from start to finish." |
| 4 | Cindy Forcier | Product Manager | "We purchased a solar system from Sam and could not be happier. He was very knowledgeable and helped us understand every step of the process. He stayed in contact after installation to make sure everything ran perfectly. His engineering background made all the difference." |
| 5 | Mike Neville | Solar Industry Professional | "Sam has installed over 100 solar systems since 2011. His company received five-star reviews from every customer on Yelp. Everyone who works with him remarks on how knowledgeable he is and how his team always goes above and beyond to make sure every customer is completely satisfied, through the installation and long after." |

Slot count: 5 testimonials for 6 card slots. The 6th slot is unfilled. At ~3 cards visible at a time, a 5-card slider works perfectly — you scroll once to see the second "page" of 2 remaining cards. No dummy content is needed.

---

## 6. MapSection

**Fit: Poor fit — repurpose proposed**

### Why it doesn't fit
The current section is structured around:
- Multi-country global presence ("3 continents, 15+ countries, 99 worldwide projects")
- An energy-type filter (All / Hydrogen / Solar / Wind) that filters a map

4A Solar serves **Illinois only**. It has no multi-energy-type project map. The filter tabs (Hydrogen, Solar, Wind) have no equivalent.

### Proposed repurpose: "Service Area" section

The section can be repurposed as a **service area and availability** section without changing its visual structure at all. The filter tabs are the hardest thing to remap — see flag below.

| Field | Current | Proposed |
|---|---|---|
| Heading line 1 | "Worldwide" (dark) | "Serving All of" (dark) |
| Heading line 2 | "impact" (muted) | "Illinois" (muted) |
| Descriptor text | "Present across 3 continents, in 15+ countries" | "Based in Morton Grove. Available across Chicagoland and statewide." |
| Inline stats row | "99 worldwide projects · 3 projects in Asia + · 97 projects in Europe +" | "Chicagoland · North Shore · Northwest Suburbs · All of Illinois" (decorative location labels, no filter logic needed) |
| Ghost button | "Discover all our projects" | "Check if we serve your area" → `#contact` |
| Map image | `/images/virya-image-27.jpg` at 30% opacity | *[needs Illinois/Chicagoland map image — see flag]* |
| Map hotspot | Orange radial glow at `top:25%, left:48%` | Reposition to center of Illinois / Chicago metro area |

**Filter tabs — decision required:**

The tabs currently show: All / Hydrogen / Solar / Wind. Two options:

**Option B — Repurpose as city chips.** Replace tabs with non-filtering location chips:
- "Morton Grove (HQ)"
- "Skokie · Evanston · Niles"
- "Glenview · Park Ridge"
- "Schaumburg & beyond"

These would be decorative (no filter behavior) but give local SEO value and communicate coverage without needing a real filterable map. The visual style (pill buttons) would remain unchanged.

**Recommendation:** Option B, because it uses the existing UI, communicates service area breadth, and provides useful local specificity, and it is better for SEO to have as many suburbs mentioned as possible.


---

## 7. HighlighterServices

**Fit: Partial — 3 customer types vs 4 panel slots**

### Slot count
Current template: **4 panels** (cycles Landowners → Manufacturing → Logistics → Retail).
4A Solar's natural customer segments: **3** (Homeowners, Businesses, Non-Profits).

**Decision required:** The typewriter cycles through N panels indefinitely. Running it with 3 panels works — the cycle is simply shorter. However, 4A Solar does have a 4th logical segment worth considering:

**Option A — Use 3 panels.** Accept the shorter cycle. The typewriter will cycle Homeowners → Businesses → Non-Profits → repeat. No structural change needed; just reduce the `panels` array to 3.

**Recommendation:** Option A (3 panels). Don't use the other options

### Proposed 3-panel mapping

**Section heading prefix:** "Discover our " + `[typed word]` + "\nsolutions"
Proposed: "Solar solutions for " + `[typed word]`

| Panel | Typed word | Body text | Image | Tags |
|---|---|---|---|---|
| 1 | "Homeowners" | "Going solar at home should be straightforward. Sam sizes your system based on your actual utility bills and roof conditions — no oversizing, no pressure, and a full walkthrough of every incentive available to you." | *[needs photo: home with solar panels]* | "Reduce Your Electric Bill", "Illinois Incentives", "Increase Home Value", "Battery Backup" |
| 2 | "Businesses" | "Commercial solar reduces your operating costs, qualifies for the federal Investment Tax Credit, and signals sustainability to your customers. We handle the entire project from engineering to interconnection." | *[needs photo: commercial roof installation]* | "Lower Operating Costs", "Federal Tax Credit", "Scalable Systems", "Energy Independence" |
| 3 | "Non-Profits" | "Non-profit organizations have unique access to Illinois solar incentives and grant pathways that for-profit entities can't use. We help you structure the project to maximize every available dollar." | *[needs photo: non-profit or community building]* | "Mission-Aligned Energy", "Grant Eligible", "Community Impact", "Illinois Shines" |

**"Learn more" button text:** Stays as "Learn more" (currently unwired — destination would be the relevant service inner page for the active panel, e.g., `/residential`, `/commercial`, `/non-profits`).

### Flags
- **Descriptions above** are draft copy specific to 4A Solar with no invented facts. Review for tone and accuracy.
- **Images:** All current images are copyright free stock so there is no problem in keeping them.

---

## 8. ProjectsSlider

**Fit: Poor fit — no project data available**

### Why it doesn't fit
The current section shows 6 named projects (Ollignies North, Groupe Bonnin, etc.) with individual project photos. The `projects` array contains specific project names, categories, and images.

4A Solar has installed 100+ systems but **the business context provides no specific project names, locations, or photos**. The hard rule states: "Never use lorem ipsum or generic placeholder copy. Instead for now just make up relevant project data and then the client will provide actual project details later.

## 9. LatestNews

**Fit: Natural**

The 3-card grid structure maps directly to the educational content topics provided in the business context. No structural changes needed.

### Proposed card mapping

**Section heading:** "Latest " (dark) + "news" (muted) → **"Solar " (dark) + "resources" (muted)** (or keep "Latest news" if a blog strategy is planned — your call)

**"See all news" button:** → "See all resources" (or "All Articles") → `/resources`

**3 article cards:**

**Card 1 — How Solar Works:**
- Tags: "Education"
- Title: "How Does Solar Energy Work? A Plain-English Explanation"
- Date: *[to be set at publish time]*
- Excerpt: "Solar panels convert sunlight directly into electricity through photovoltaic cells. That electricity flows through an inverter, powers your home, and any surplus gets sent back to the grid — earning you a credit on your ComEd bill through net metering."
- Link: "Read more →" → `/resources/how-solar-works`

**Card 2 — Illinois Solar Incentives:**
- Tags: "Illinois", "Incentives"
- Title: "Illinois Solar Incentives in 2026: SREC, Illinois Shines, and ComEd Rebates"
- Date: *[to be set at publish time]*
- Excerpt: "Illinois offers some of the strongest solar incentives in the country. Between the Federal Investment Tax Credit, the Illinois Shines SREC program, and ComEd's net metering policy, most homeowners can offset a significant portion of their system cost."
- Link: "Read more →" → `/resources/illinois-solar-incentives`

**Card 3 — Guide to Going Solar:**
- Tags: "Guide"
- Title: "Your Step-by-Step Guide to Going Solar in Illinois"
- Date: *[to be set at publish time]*
- Excerpt: "Going solar in Illinois involves four main steps: a site assessment, system design, permits and interconnection, and installation. We walk every customer through each stage — here's what to expect from your first call to flip-the-switch day."
- Link: "Read more →" → `/resources/guide-to-going-solar`

### Flags
- The 4 remaining educational topics (Net Metering, Federal ITC, Illinois Shines specifically, Guide to Going Solar) are available for future cards once `/resources` pages are built.
- Generate the content for these pages when the time comes to create these pages.
- No images in news cards — this is an existing template limitation, not a 4A Solar gap.

---

## 10. SiteFooter

**Fit: Partial — slot count mismatches in nav columns, missing contact info**

### Pre-footer CTA card

| Field | Current | Proposed |
|---|---|---|
| Heading | "Start your " + "energy transition" (orange) + " today." | "Start saving with " + "solar energy" (orange) + " today." |
| CTA button | "Get started →" → `#` | "Get a Free Quote" → `#contact` |

### Logo
Replace `/images/virya-logo.png` with 4A Solar logo (white version or CSS-inverted, same as current technique).

### Navigation columns

**Current structure:** 3 content columns (5 links each) + 1 social column.
**4A Solar content available:** 7 services, 3–5 secondary pages, social presence unconfirmed.

**Column 1 — header: "Our Services" (was "Our expertise"):**
7 services available, 5 link slots. **2 services will not fit.**

| Current link | Proposed link | href |
|---|---|---|
| "Wind Energy" | "Residential Solar" | `/residential` |
| "Solar Energy" | "Commercial Solar" | `/commercial` |
| "Hydrogen development" | "Solar for Non-Profits" | `/non-profits` |
| "Energy supply" | "Battery Storage" | `/batteries` |
| "Service companies" | "EV Chargers" | `/ev-chargers` |
| *(no slot)* | "Service & Repairs" | `/service-repairs` |
| *(no slot)* | "Solar Incentives" | `/solar-incentives` |

**Decision required:** Either expand column 1 to 7 links (requires no visual change, just adding 2 more `<a>` tags to the data array), or combine two services into one link (e.g., "Batteries & EV Chargers"). **Recommendation: expand to 7 links.** The column is driven by an array; adding 2 items is trivial and keeps all services discoverable.

**Column 2 — header: "Who We Serve" (was "Your Activity"):**
3 natural customer segments for 5 link slots. **2 slots will be empty.**

| Current link | Proposed link | href |
|---|---|---|
| "Local Communities" | "Homeowners" | `/residential` |
| "Logistics Service Providers" | "Businesses" | `/commercial` |
| "Manufacturing operations" | "Non-Profits" | `/non-profits` |
| "Retail Businesses" | *(empty)* | — |
| "Solutions for landowners" | *(empty)* | — |

Options for the 2 empty slots:
- Leave them empty (footer columns don't require equal link counts)
- Add "Illinois Solar Incentives" and "How Solar Works" as resource links
- Add "Free Quote" and "Contact Us" as conversion links

**Recommendation:** Use "Free Quote" and "Contact Us" in the 2 empty slots. For a local service business these are useful footer actions.

**Column 3 — no header (secondary pages):**
5 links. 4A Solar has a natural fit here:

| Current link | Proposed link | href |
|---|---|---|
| "About Us" | "About Sam" | `/about` |
| "Resources" | "Solar Resources" | `/resources` |
| "News" | "Contact Us" | `#contact` |
| "Cooperatives" | "Service Area" | `#service-area` (links to MapSection) |
| "Careers" | "Illinois Solar Incentives" | `/solar-incentives` |

**Column 4 — "Follow us":**
Currently: LinkedIn icon only.
4A Solar: LinkedIn is unconfirmed in the business context. The Yelp reviews are referenced in testimonial 5 ("five-star reviews from every customer on Yelp"), suggesting a Yelp presence exists. Add the rest of the common smb social media links like youtube/instagram, etc as placeholders

### Bottom bar
| Field | Current | Proposed |
|---|---|---|
| Copyright | "Copyright © 2026" | "Copyright © 2026 JBW Tech Co" |
| Center | "Virya Energy" | *(remove — redundant with logo above)* |
| Right | "Privacy Policy · Cookie Policy" | "Privacy Policy · Cookie Policy" (unchanged) |

### Flags
- **Contact information is entirely absent from the footer.** Phone (`773-502-1529`), email (`contact@4asolar.com`), address (`5912 Crain St, Morton Grove, Illinois 60053`), do not appear anywhere in the Virya template. For a local service business, footer contact details are expected. This requires adding a new element to the footer layout — it's not a pure content swap. See Gaps section.

---

## Gaps — 4A Solar Content With No Current Home

These items exist in the business context but have no matching slot in any Virya component. They require either a new section or placement within an existing section's empty space.

### Gap 1: NABCEP Certification Badges
**What:** Three NABCEP badge image files (Installation Professional, Systems Inspector, Certified Energy Practitioners logo). Described in the business context as "4A Solar's primary trust signal" that "should appear somewhere prominent, ideally in more than one place."
**Current home:** None.
**Options:**
1. **Add to top left hero section** — on the left of hamburger menu.
2. **Add to StatisticsSection left card** — below the heading, above the button. Badges sit naturally alongside stats as proof elements.
3. **Add to BrandPromiseSection** — below the body text, before the "Learn more" button. Pairs the philosophy copy with the credentials that back it up.
4. **Add to SiteFooter** — a row of 3 badge images above the nav columns. Common placement for local service businesses.
5. **All four** — the business context explicitly says "more than one place." A small badge row in the BrandPromise section AND the footer is a reasonable approach.
**Do all 4**

### Gap 2: Contact Information
**What:** Phone, email, address, hours.
**Current home:** None. The entire Virya template is a marketing/portfolio site with no contact section.
**Recommendation:** Add a new `ContactSection` component to `page.tsx`, placed between LatestNews and SiteFooter. This is a new component, not a repurpose. It should contain:
- A headline: "Get a Free Quote"
- Sam's phone number (773-502-1529) as a `tel:` link
- Email (`contact@4asolar.com`) as a `mailto:` link
- Address with a Google Maps link
- Business hours
- An `id="contact"` anchor so all the CTA buttons linking to `#contact` resolve correctly.
This section needs to be built from scratch. Its visual style should follow the design system (beige background or white, virya-btn-primary for the CTA).

### Gap 3: Personal Bio / Team Section
**What:** Sam's background (Motorola engineer, NABCEP instructor, 200+ professionals trained, San Diego installations, nonprofit volunteer work) is rich and compelling. It currently has a partial home in BrandPromiseSection but that section only has space for a short body paragraph.
**Current home:** Partial — BrandPromiseSection body text.
**Recommendation:** The About Us inner page (`/about`) is planned and will be the primary home for the full bio. On the homepage, the BrandPromiseSection body paragraph carries the summary. No additional homepage section is needed for this, but flag it so the `/about` page is prioritized in the build sequence.

---

## Summary Table

| Component | Fit | Slot delta | Key decision needed |
|---|---|---|---|
| SiteHeader | Natural | Even (8 = 8) | CTA destination; logo asset ready |
| HeroSection | Natural | N/A | Hero video/image asset needed |
| ItemsSlider | Partial | +1 (7 services vs 6 slots) | Add 7th card; new icons; new photos |
| StatisticsSection | Partial | −1 (5 stats vs 4 slots); Lottie mismatch | Which stat to drop; Lottie replacement approach |
| BrandPromiseSection | Natural | N/A | Replace Lottie with Sam's photo (recommended) |
| MapSection | Poor → Repurpose | N/A | Filter tabs: remove or repurpose as city chips |
| HighlighterServices | Partial | −1 (3 panels vs 4 slots) | Add 4th panel or accept 3 |
| ProjectsSlider | Poor → Repurpose | N/A | Testimonials slider (recommended) or remove |
| LatestNews | Natural | Even (3 cards = 3 available topics) | Confirm "news" vs "resources" heading |
| SiteFooter | Partial | Column mismatches | Contact info placement; social profiles |
| **GAPS** | — | — | |
| Testimonials | No home | — | Resolved by ProjectsSlider repurpose |
| NABCEP badges | No home | — | Choose placement(s) |
| Contact section | No home | — | New component needed |
| Sam's full bio | No home | — | About page (inner pages build phase) |