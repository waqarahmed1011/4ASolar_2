# Content Inventory

Audit of every component in `src/components/`. Read-only — no files were modified.

---

## 1. SiteHeader

**File:** `src/components/SiteHeader.tsx`

### Current Content

**Logo:** Image at `/images/virya-logo.png` (100×49px). Alt text: "Virya Energy".

**Desktop navigation — 8 links** (all `href="#"`):
1. "Our expertise"
2. "Your activity"
3. "About Us"
4. "Resources"
5. "News"
6. "Cooperatives"
7. "Careers"
8. "Projects"

**Desktop CTA button:** `<a href="#">Build with us →</a>` — uses `.virya-btn-primary` class.

**Mobile navigation overlay** (appears when hamburger is tapped):
- Logo: same `/images/virya-logo.png` at 80×39px, CSS filter inverted to white.
- Same 8 nav links, rendered as `28px` white text.
- CTA: `<a href="#">Build with us →</a>` — uses `.virya-btn-primary` class.

### Repeating Items
8 nav links rendered from the `NAV_LINKS` array.

### Images
| Path | Size | Usage |
|---|---|---|
| `/images/virya-logo.png` | 100×49 | Desktop header logo |
| `/images/virya-logo.png` | 80×39 | Mobile menu logo (CSS-inverted to white) |

### Buttons and Links
| Label | Element | href / action |
|---|---|---|
| "Our expertise" | `<a>` | `#` (placeholder) |
| "Your activity" | `<a>` | `#` (placeholder) |
| "About Us" | `<a>` | `#` (placeholder) |
| "Resources" | `<a>` | `#` (placeholder) |
| "News" | `<a>` | `#` (placeholder) |
| "Cooperatives" | `<a>` | `#` (placeholder) |
| "Careers" | `<a>` | `#` (placeholder) |
| "Projects" | `<a>` | `#` (placeholder) |
| "Build with us →" (desktop) | `<a>` | `#` (placeholder) |
| Hamburger icon | `<button>` | opens mobile menu |
| Close icon | `<button>` | closes mobile menu |
| "Build with us →" (mobile) | `<a>` | `#` (placeholder) |

---

## 2. HeroSection

**File:** `src/components/HeroSection.tsx`

### Current Content

**H1 heading:** `"Fit for Purpose\nEnergy"` — rendered on two lines.

**Body paragraph:** Empty — the `<p>` tag exists in the markup but contains no text.

**Video:** `/videos/hero.mp4` autoPlayed, muted, looping, with poster image `/images/virya-image-1.jpg`. Has a `bg-black/35` overlay div on top.

**CTA buttons (2):**
1. "Build with us →" — white button (`background: #ffffff, color: #1f1e1e`), `href="#"`.
2. "Discover our work" — outline button (`border: 1.5px solid rgba(254,254,254,0.6)`), `href="#"`.

### Repeating Items
None.

### Images / Media
| Path | Type | Usage |
|---|---|---|
| `/videos/hero.mp4` | Video | Full-bleed background video |
| `/images/virya-image-1.jpg` | Image | Video poster (shown before video loads) |

### Buttons and Links
| Label | Element | href |
|---|---|---|
| "Build with us →" | `<a>` | `#` (placeholder) |
| "Discover our work" | `<a>` | `#` (placeholder) |

---

## 3. ItemsSlider

**File:** `src/components/ItemsSlider.tsx`

### Current Content

**Section heading:** `"Our "` (dark) + `"expertise"` (muted `#9f908d`).

**6 slide cards** (data array `slides`):

| # | Icon | Image | Title (dark part) | Title (muted part) | Title (rest) | Description |
|---|---|---|---|---|---|---|
| 1 | `/icons/wind.svg` | `/images/expertise-wind.jpg` | "Community-centered " | "wind" | " energy development." | "We finance, develop and operate onshore wind energy projects, centred around community interests and environmental stewardship." |
| 2 | `/icons/solar.svg` | `/images/expertise-wind-2.jpg` | "Large and medium scale " | "solar" | " and agrovoltaic solutions." | "Our industrial-scale solar projects and innovative agrovoltaic solutions are seamlessly integrated with local grid systems." |
| 3 | `/icons/hydrogen.svg` | `/images/expertise-hydrogen.jpg` | "Pioneering of renewable " | "hydrogen" | " production." | "We lead in RFNBO hydrogen development, adding an essential component to the zero-emission energy landscape." |
| 4 | `/icons/solar.svg` | `/images/virya-image-6.jpg` | "Enabling the transition " | "for everyone" | "." | "Through our DATS 24 brand, we provide a network of fueling stations, green energy contracts for homes and EV charging parks." |
| 5 | `/icons/monitoring.svg` | `/images/virya-image-8.jpg` | "Comprehensive energy infrastructure " | "monitoring" | "." | "Our infrastructure monitoring services ensure optimal performance of energy installations on land and offshore." |
| 6 | `/icons/transition.svg` | `/images/virya-image-27.jpg` | "Tailor made, " | "fit for purpose" | " B2B sustainable energy solutions." | "We guide our B2B clients in their energy transition, with customized solutions that meet their specific energy needs." |

### Repeating Items
6 slides. The slider shows ~3 at a time (card width 416px + 24px gap). Navigation arrows advance/retreat one card at a time.

### Images
| Path | Usage |
|---|---|
| `/images/expertise-wind.jpg` | Slide 1 card image |
| `/images/expertise-wind-2.jpg` | Slide 2 card image |
| `/images/expertise-hydrogen.jpg` | Slide 3 card image |
| `/images/virya-image-6.jpg` | Slide 4 card image |
| `/images/virya-image-8.jpg` | Slide 5 card image |
| `/images/virya-image-27.jpg` | Slide 6 card image |
| `/icons/wind.svg` | Icon badge on slide 1 card |
| `/icons/solar.svg` | Icon badge on slides 2 and 4 |
| `/icons/hydrogen.svg` | Icon badge on slide 3 |
| `/icons/monitoring.svg` | Icon badge on slide 5 |
| `/icons/transition.svg` | Icon badge on slide 6 |

### Buttons and Links
| Label | Element | href / action |
|---|---|---|
| ← (prev arrow) | `<button>` | Decrements slider offset by one card |
| → (next arrow) | `<button>` | Increments slider offset by one card |

No outbound links. No "learn more" on individual cards.

---

## 4. StatisticsSection

**File:** `src/components/StatisticsSection.tsx`

### Current Content

**Left highlight card:**
- Heading: `"Virya"` (in `#FF5938`) + `" Energy\nin a few\nnumbers"` (in white)
- Button: "Learn more" — outline style, `href` attribute not present (it's a `<button>`, not `<a>`)

**4 stat boxes** (data array `stats`):

| # | Lottie File | Number | Label |
|---|---|---|---|
| 1 | `/lottie/wind.json` | "625 MW" | "Installed production capacity" |
| 2 | `/lottie/profile.json` | "700+" | "Employees over multiple markets" |
| 3 | `/lottie/fuel.json` | "6" | "Hydrogen service stations" |
| 4 | `/lottie/globe.json` | "15+" | "Countries with a Virya presence" |

### Repeating Items
4 stat boxes in a 2×2 grid.

### Images / Media
| Path | Type | Usage |
|---|---|---|
| `/lottie/wind.json` | Lottie | Stat 1 animation icon (60×60) |
| `/lottie/profile.json` | Lottie | Stat 2 animation icon (60×60) |
| `/lottie/fuel.json` | Lottie | Stat 3 animation icon (60×60) |
| `/lottie/globe.json` | Lottie | Stat 4 animation icon (60×60) |

### Buttons and Links
| Label | Element | href / action |
|---|---|---|
| "Learn more" | `<button>` | No href; no onClick handler wired |

---

## 5. BrandPromiseSection

**File:** `src/components/BrandPromiseSection.tsx`

### Current Content

**Heading (two lines):**
- Line 1: `"Our Fit For Purpose"` (dark `#1f1e1e`)
- Line 2: `"Brand Promise"` (muted `#9f908d`)

**Body paragraph:**
> "For Virya Energy, the energy transition must be adapted to each reality. Our "fit for purpose" approach reflects our commitment to developing customized solutions that exactly meet everyone's needs. By simplifying access to renewable energy, we are building a path towards a sustainable future."

**Button:** "Learn more" — ghost style (dark outline on white). It is a `<button>`, not an anchor; no `href`.

**Right panel:** Lottie animation from `/lottie/ses-illu-en.json`, rendered at `maxWidth: 380px`, looping.

### Repeating Items
None.

### Images / Media
| Path | Type | Usage |
|---|---|---|
| `/lottie/ses-illu-en.json` | Lottie | Illustrative animation, right column |

### Buttons and Links
| Label | Element | href / action |
|---|---|---|
| "Learn more" | `<button>` | No href; no onClick handler wired |

---

## 6. MapSection

**File:** `src/components/MapSection.tsx`

### Current Content

**Heading (two lines):**
- Line 1: `"Worldwide"` (dark)
- Line 2: `"impact"` (muted)

**Descriptor text:** `"Present across 3 continents, in 15+ countries"`

**Statistics row (3 inline spans):**
- `"99 worldwide projects"`
- `"3 projects in Asia +"`
- `"97 projects in Europe +"`

**Button:** "Discover all our projects" — ghost style. It is a `<button>`, no `href`.

**Filter tabs — 4 items** (array `tabs`):
- "All" (default active)
- "Hydrogen"
- "Solar"
- "Wind"

Clicking a tab sets `activeTab` state — but no content filtering logic is wired to the tab state yet. The map image is static regardless of selection.

**Map area:** `<img src="/images/virya-image-27.jpg">` at 30% opacity with a decorative `radial-gradient` hotspot overlaid (orange glow positioned at `top: 25%, left: 48%`).

### Repeating Items
4 filter tab buttons.

### Images
| Path | Usage |
|---|---|
| `/images/virya-image-27.jpg` | Map placeholder image (opacity 0.3), with orange radial glow overlay |

### Buttons and Links
| Label | Element | href / action |
|---|---|---|
| "Discover all our projects" | `<button>` | No href; no onClick handler |
| "All" | `<button>` | Sets `activeTab` to "All" |
| "Hydrogen" | `<button>` | Sets `activeTab` to "Hydrogen" |
| "Solar" | `<button>` | Sets `activeTab` to "Solar" |
| "Wind" | `<button>` | Sets `activeTab` to "Wind" |

---

## 7. HighlighterServices

**File:** `src/components/HighlighterServices.tsx`

### Current Content

**Heading (dynamic):** `"Discover our "` + `[typed word]` (in orange, animated) + `"\nsolutions"`

The typed word cycles through 4 industry names driven by the typewriter effect.

**4 panels** (data array `panels`):

| # | Word (typed) | Description | Image | Tags |
|---|---|---|---|---|
| 1 | "Landowners" | "For Virya Energy, the energy transition must be adapted to each reality. Our "fit for purpose" approach reflects our commitment to developing customized solutions that exactly meet everyone's needs." | `/images/highlighter-landowners.jpg` | "Space Monetization", "Predictable Income", "Carbon Footprint Reduction", "Energy Independence" |
| 2 | "Manufacturing" | "By simplifying access to renewable energy, we are building a path towards a sustainable future for manufacturing businesses." | `/images/virya-image-8.jpg` | "Energy Cost Reduction", "Regulatory Compliance", "Energy Resilience", "Energy Independence" |
| 3 | "Logistics" | "We provide tailor-made energy solutions for logistics and transport companies, helping them reduce emissions and energy costs." | `/images/virya-image-27.jpg` | "Fleet Electrification", "Clean Transport", "Carbon Reduction", "Cost Savings" |
| 4 | "Retail" | "Our retail energy solutions help businesses achieve sustainability goals while reducing operational costs through renewable energy." | `/images/virya-image-31.jpg` | "Green Energy", "Cost Reduction", "ESG Compliance", "Sustainability" |

Each panel displays: heading (with the typed word), body text, ghost "Learn more" button, and a right-side photo with 4 floating pill tags.

Tags are overlaid on the image at fixed absolute positions:
- `top: 24, left: -20` → tag[0]
- `top: 24, right: -20` → tag[1]
- `bottom: 80, left: -20` → tag[2]
- `bottom: 24, right: -20` → tag[3]

### Repeating Items
4 panels cycling via typewriter. Each panel shows simultaneously: 1 heading, 1 body, 1 button, 1 image, 4 floating tag pills.

### Images
| Path | Panel | Usage |
|---|---|---|
| `/images/highlighter-landowners.jpg` | Landowners | Right-column photo (360×460px) |
| `/images/virya-image-8.jpg` | Manufacturing | Right-column photo |
| `/images/virya-image-27.jpg` | Logistics | Right-column photo |
| `/images/virya-image-31.jpg` | Retail | Right-column photo |

### Buttons and Links
| Label | Element | href / action |
|---|---|---|
| "Learn more" | `<button>` | No href; no onClick handler wired |

---

## 8. ProjectsSlider

**File:** `src/components/ProjectsSlider.tsx`

### Current Content

**Section heading:** `"Our "` (dark) + `"projects"` (muted)

**Section-level button:** "Discover our projects" — ghost outline, no `href` (it's a `<button>`).

**6 project cards** (data array `projects`):

| # | Category | Name | Image |
|---|---|---|---|
| 1 | Wind | "Ollignies North" | `/images/expertise-wind.jpg` |
| 2 | Solar | "Groupe Bonnin" | `/images/expertise-wind-2.jpg` |
| 3 | Solar | "HQ DRSD Malakoff" | `/images/virya-image-6.jpg` |
| 4 | Solar | "Fresenius Kabi" | `/images/virya-image-8.jpg` |
| 5 | Solar | "Agence Léon Grosse Aix-les Bains" | `/images/virya-image-27.jpg` |
| 6 | Wind | "Parc de Lislet 2" | `/images/virya-image-31.jpg` |

Each card shows: full-bleed photo, gradient overlay, category icon (`WindIcon` or `SolarCircleIcon`) + category label, project name. Cards are `380×520px` fixed.

### Repeating Items
6 project cards. Slider shows ~3 at a time (380px card + 24px gap). Arrows advance/retreat one card at a time.

### Images
| Path | Usage |
|---|---|
| `/images/expertise-wind.jpg` | Project 1 (Ollignies North) |
| `/images/expertise-wind-2.jpg` | Project 2 (Groupe Bonnin) |
| `/images/virya-image-6.jpg` | Project 3 (HQ DRSD Malakoff) |
| `/images/virya-image-8.jpg` | Project 4 (Fresenius Kabi) |
| `/images/virya-image-27.jpg` | Project 5 (Agence Léon Grosse) |
| `/images/virya-image-31.jpg` | Project 6 (Parc de Lislet 2) |

### Buttons and Links
| Label | Element | href / action |
|---|---|---|
| "Discover our projects" | `<button>` | No href; no onClick handler wired |
| ← (prev arrow) | `<button>` | Decrements slider offset by one card |
| → (next arrow) | `<button>` | Increments slider offset by one card |

No per-card links. Individual cards are `cursor: pointer` but have no click handler.

---

## 9. LatestNews

**File:** `src/components/LatestNews.tsx`

### Current Content

**Section heading:** `"Latest "` (dark) + `"news"` (muted)

**3 article cards** (data array `articles`):

**Card 1:**
- Tags: "Solar", "General news"
- Title: "Virya Energy and EBRD Partner to Accelerate Renewable Energy Expansion in Poland"
- Date: "Braine L'Alleud, 26/02/2026"
- Excerpt: "Virya Energy NV is pleased to announce the acceleration of its renewable energy expansion in Poland, through a strategic partnership with the European Bank for Reconstruction and Development (EBRD)."
- Link: "See more →" — `href="#"`

**Card 2:**
- Tags: "General news", "Solar"
- Title: "Virya Energy Expands into Japan's Renewable Market through Integration of BayWa r.e.'s Japan Solar Platform"
- Date: "Tokyo, Japan, 12/12/2025"
- Excerpt: "Virya Energy, a pioneer in renewable energy development, announces its expansion into Japan through the strategic integration of BayWa r.e.'s Japan Solar Platform."
- Link: "See more →" — `href="#"`

**Card 3:**
- Tags: "General news"
- Title: "Demonstration of hydrogen in heavy-duty transport at Spa-Francorchamps"
- Date: "Braine L'Alleud, 2025"
- Excerpt: "At the iconic Spa-Francorchamps circuit, Belgium signalled its ambition to lead Europe's hydrogen transport revolution."
- Link: "See more →" — `href="#"`

**Section-level button:** "See all news" — ghost outline, `<button>`, no `href`, no onClick handler.

### Repeating Items
3 article cards in a 3-column grid.

### Images
None. No images in any news card.

### Buttons and Links
| Label | Element | href / action |
|---|---|---|
| "See more →" (card 1) | `<a>` | `#` (placeholder) |
| "See more →" (card 2) | `<a>` | `#` (placeholder) |
| "See more →" (card 3) | `<a>` | `#` (placeholder) |
| "See all news" | `<button>` | No href; no onClick handler |

---

## 10. SiteFooter

**File:** `src/components/SiteFooter.tsx`

### Current Content

**Pre-footer CTA card:**
- Heading: `"Start your "` + `"energy transition"` (in `#FF5938`) + `" today."`
- Button: "Get started →" — filled orange `<a href="#">`.

**Footer logo:** `/images/virya-logo.png` (100×49px), CSS filter inverted to white.

**Navigation columns — 3 columns + 1 social column:**

**Column 1 — header: "Our expertise":**
1. "Wind Energy" → `href="#"`
2. "Solar Energy" → `href="#"`
3. "Hydrogen development" → `href="#"`
4. "Energy supply" → `href="#"`
5. "Service companies" → `href="#"`

**Column 2 — header: "Your Activity":**
1. "Local Communities" → `href="#"`
2. "Logistics Service Providers" → `href="#"`
3. "Manufacturing operations" → `href="#"`
4. "Retail Businesses" → `href="#"`
5. "Solutions for landowners" → `href="#"`

**Column 3 — no header:**
1. "About Us" → `href="#"`
2. "Resources" → `href="#"`
3. "News" → `href="#"`
4. "Cooperatives" → `href="#"`
5. "Careers" → `href="#"`

**Column 4 — header: "Follow us":**
- LinkedIn icon (`LinkedInIcon`, 24×24) → `href="#"`

**Bottom bar:**
- `"Copyright © 2026"`
- `"Virya Energy"`
- `"Privacy Policy · Cookie Policy"` (rendered as plain text, not a link)

### Repeating Items
15 footer nav links across 3 columns (5 per column).

### Images
| Path | Size | Usage |
|---|---|---|
| `/images/virya-logo.png` | 100×49 | Footer logo (CSS-inverted to white) |

### Buttons and Links
| Label | Element | href |
|---|---|---|
| "Get started →" | `<a>` | `#` (placeholder) |
| "Wind Energy" | `<a>` | `#` (placeholder) |
| "Solar Energy" | `<a>` | `#` (placeholder) |
| "Hydrogen development" | `<a>` | `#` (placeholder) |
| "Energy supply" | `<a>` | `#` (placeholder) |
| "Service companies" | `<a>` | `#` (placeholder) |
| "Local Communities" | `<a>` | `#` (placeholder) |
| "Logistics Service Providers" | `<a>` | `#` (placeholder) |
| "Manufacturing operations" | `<a>` | `#` (placeholder) |
| "Retail Businesses" | `<a>` | `#` (placeholder) |
| "Solutions for landowners" | `<a>` | `#` (placeholder) |
| "About Us" | `<a>` | `#` (placeholder) |
| "Resources" | `<a>` | `#` (placeholder) |
| "News" | `<a>` | `#` (placeholder) |
| "Cooperatives" | `<a>` | `#` (placeholder) |
| "Careers" | `<a>` | `#` (placeholder) |
| LinkedIn icon | `<a>` | `#` (placeholder) |

---

## 11. icons.tsx

**File:** `src/components/icons.tsx`

### Current Content

A set of inline SVG React components. No rendered content, no text, no images, no links. Exports only:

| Export | Default Size | Description |
|---|---|---|
| `ArrowRightIcon` | 16×16 | Right-pointing arrow (stroke) |
| `WindIcon` | 20×20 | Stylized wind turbine blades (stroke) |
| `SolarCircleIcon` | 12×12 | Filled circle |
| `HydrogenIcon` | 20×20 | Atom with orbit rings (stroke + dashed) |
| `LinkedInIcon` | 24×24 | LinkedIn wordmark (fill) |
| `MenuIcon` | 24×24 | Three horizontal lines (stroke) |
| `CloseIcon` | 24×24 | × mark (stroke) |
| `ChevronDownIcon` | 16×16 | Downward chevron (stroke) |
| `ChevronLeftIcon` | 20×20 | Left chevron (stroke) |
| `ChevronRightIcon` | 20×20 | Right chevron (stroke) |
| `VirywLogoIcon` | 100×49 | Orange V-mark + "virya energy" SVG text wordmark |

All stroke icons use `strokeWidth: 1.5`, `strokeLinecap: round`. All icons use `currentColor`.

### Images, Buttons, Links
None.

---

## 12. ui/button.tsx

**File:** `src/components/ui/button.tsx`

### Current Content

A shadcn/base-ui compound component. No text content, no images, no links, no data. Exports `Button` (component) and `buttonVariants` (cva configuration). Not directly used in any current page section.

### Images, Buttons, Links
None (it *is* the button primitive; it contains no instances).

---

## Summary Table

| Component | Repeating Items | Images Used | Buttons/Links | Placeholder `href="#"` count |
|---|---|---|---|---|
| SiteHeader | 8 nav links | 1 (logo ×2 instances) | 12 | 10 `<a href="#">` |
| HeroSection | — | 1 image (poster), 1 video | 2 | 2 |
| ItemsSlider | 6 slides | 6 card images + 5 SVG icons | 2 (slider arrows) | 0 |
| StatisticsSection | 4 stat boxes | 4 Lottie files | 1 | 0 |
| BrandPromiseSection | — | 1 Lottie file | 1 | 0 |
| MapSection | 4 filter tabs | 1 image | 5 | 0 |
| HighlighterServices | 4 typewriter panels | 4 panel images | 1 | 0 |
| ProjectsSlider | 6 project cards | 6 card images | 3 (1 CTA + 2 arrows) | 0 |
| LatestNews | 3 news cards | 0 | 4 | 3 |
| SiteFooter | 15 nav links | 1 (logo) | 17 | 17 |
| icons.tsx | — | 0 | 0 | 0 |
| ui/button.tsx | — | 0 | 0 | 0 |

**Total `href="#"` placeholders across site:** 32
**Total images/media referenced:** 14 distinct `/images/` files + 5 `/icons/` SVGs + 5 `/lottie/` JSON files + 1 `/videos/` file
