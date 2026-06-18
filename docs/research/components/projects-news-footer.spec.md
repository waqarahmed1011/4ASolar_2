# Projects Slider + Latest News + Footer Specifications

---

## Projects Slider

### Overview
- **Target file:** `src/components/ProjectsSlider.tsx`
- **Background:** `#EEE8E2` (beige)
- **Interaction model:** horizontal swiper (prev/next arrows)

### Visual Description
Beige section. Header row: "Our projects" heading (dark "Our", muted "projects") on left + "Discover our projects" button on right.
Below: horizontal row of tall rounded photo cards. Each card: full-bleed photo, category badge + project name at bottom.

### Computed Styles — Section
```
background-color: #eee8e2
padding: 80px 0
```

### Computed Styles — Card
```
flex-shrink: 0
width: 380px
height: 520px
border-radius: 20px
overflow: hidden
position: relative
cursor: pointer
```

### Computed Styles — Card Image
```
width: 100%
height: 100%
object-fit: cover
```

### Computed Styles — Card Overlay (bottom gradient)
```
position: absolute
bottom: 0; left: 0; right: 0
height: 50%
background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)
```

### Computed Styles — Card Category Label
```
position: absolute
bottom: 56px; left: 24px
display: flex
align-items: center
gap: 6px
font-size: 14px
color: rgba(255,255,255,0.85)
```

### Computed Styles — Card Project Name
```
position: absolute
bottom: 24px; left: 24px
font-size: 22px
font-weight: 400
color: #ffffff
```

### Projects Data (6 projects)
1. **Category:** Wind | **Name:** "Ollignies North" | **Image:** `/public/images/expertise-wind-2.jpg`
2. **Category:** Solar | **Name:** "Groupe Bonnin" | **Image:** `/public/images/expertise-wind.jpg`
3. **Category:** Solar | **Name:** "HQ DRSD Malakoff" | **Image:** `/public/images/virya-image-6.jpg`
4. **Category:** Solar | **Name:** "Fresenius Kabi" | **Image:** `/public/images/virya-image-8.jpg`
5. **Category:** Solar | **Name:** "Agence Léon Grosse Aix-les Bains" | **Image:** `/public/images/virya-image-27.jpg`
6. **Category:** Wind | **Name:** "Parc de Lislet 2" | **Image:** `/public/images/virya-image-31.jpg`

Category icons: Wind = `<WindIcon>`, Solar = `<SolarCircleIcon>` (from icons.tsx)

### Header Row
```
display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px
Heading: "Our <muted>projects</muted>" (font-size: 48px)
Button: "Discover our projects" — ghost dark style
```

---

## Latest News Section

### Overview
- **Target file:** `src/components/LatestNews.tsx`
- **Background:** `#FFFFFF` (white)
- **Interaction model:** static

### Visual Description
White section. Heading "Latest news" centered. 3 article cards in a row (or 2+1 layout).
Each card: category badge, date, title, excerpt, "See more" link.
"See all news" button centered below.

### Section Heading
- "Latest " dark + "news" muted
- font-size: 48px, centered

### Card Structure
```
<article>
  <div class="card-image"> (if article has image — some may not)
  <div class="card-body"> (padding: 24px)
    <div class="tags"> (category badges: "Solar", "General news")
    <h3 class="title"> (font-size: 20px, weight 400, color #1f1e1e)
    <time> (font-size: 13px, color #9f908d)
    <p class="excerpt"> (font-size: 15px, color #9f908d, line-height 1.5)
    <a class="read-more">"See more"</a>
</article>
```

### Card Computed Styles
```
background: #ffffff
border: 1px solid rgba(0,0,0,0.08)
border-radius: 16px
overflow: hidden
```

### News Data (3 articles)
1. **Tags:** Solar, General news | **Title:** "Virya Energy and EBRD Partner to Accelerate Renewable Energy Expansion in Poland" | **Date:** "Braine L'Alleud, 26/02/2026" | **Excerpt:** "Virya Energy NV is pleased to announce the acceleration of its renewable energy expansion in Poland, through a strategic partnership with the European Bank for Reconstruction and Development (EBRD)…"
2. **Tags:** General news, Solar | **Title:** "Virya Energy Expands into Japan's Renewable Market through Integration of BayWa r.e.'s Japan Solar Platform" | **Date:** "Tokyo, Japan, 12/12/2025"
3. **Tags:** General news | **Title:** (third recent article)

### "See all news" Button
- Centered below cards
- Ghost dark style: border `rgba(31,30,30,0.25)`, radius 999px, padding `14px 32px`

---

## Pre-footer CTA

### Overview
- **Target file:** `src/components/PreFooterCTA.tsx`
- **Background:** `#185649` (medium green)

### Visual Description
Dark green rounded card spanning most of the page width. Large white text "Start your energy transition today." with "energy transition" in orange. Orange CTA button. Decorative Virya logo mark on the right (large, semi-transparent).

### Computed Styles
```
background: #185649
border-radius: 24px
padding: 60px 80px
margin: 60px auto
max-width: calc(1440px - 160px)
position: relative
overflow: hidden
min-height: 250px
display: flex
flex-direction: column
justify-content: center
```

### Heading
```
font-size: clamp(32px, 3.5vw, 52px)
font-weight: 400
color: #ffffff
line-height: 1.1
max-width: 700px
```
- "Start your " white
- "energy transition" — color: `#FF5938`
- " today." white

### CTA Button
```
background: #FF5938
color: #ffffff
border-radius: 999px
padding: 16px 32px
font-size: 16px
margin-top: 32px
```
Text: "Get started →"

### Decorative Element
- Large virya "V" logo shape, absolutely positioned right side
- Color: rgba(255,255,255,0.05) or similar very faint

---

## Footer

### Overview
- **Target file:** `src/components/SiteFooter.tsx`
- **Background:** `#0F4338` (dark green)

### Visual Description
Dark green footer. Top: Virya logo (white). Below: 4-column navigation.
Bottom bar: "Copyright © 2026", "Virya Energy", "Privacy Policy", "Cookie Policy".

### Logo
```
<Image src="/images/virya-logo.png" (but need white version)
```
Note: The footer uses a WHITE version of the Virya logo. The downloaded logo is dark/colored.
Implementation: add CSS `filter: brightness(0) invert(1)` to make it white, OR use `filter: brightness(10)`.

### Navigation Columns
```
Column 1: "Our expertise"
  - Wind Energy
  - Solar Energy
  - Hydrogen development
  - Energy supply
  - Service companies

Column 2: "Your Activity"
  - Local Communities
  - Logistics Service Providers
  - Manufacturing operations
  - Retail Businesses
  - Solutions for landowners

Column 3: (no header, just links)
  - About Us
  - Resources
  - News
  - Cooperatives
  - Careers

Column 4: "Follow us"
  - LinkedIn icon (from icons.tsx)
```

### Footer Typography
```
Column headers: font-size: 14px, color: rgba(255,255,255,0.5), text-transform: uppercase, letter-spacing: 0.05em, margin-bottom: 16px
Links: font-size: 15px, color: rgba(255,255,255,0.75), hover: color: #ffffff
Footer bottom text: font-size: 13px, color: rgba(255,255,255,0.4)
```

### Footer Layout
```
padding: 60px 80px 40px
display: grid
grid-template-columns: repeat(4, 1fr) (at desktop, or logo + 3 cols)
gap: 40px
```
Logo spans full width above, then 4 columns.

### Bottom Bar
```
display: flex
justify-content: space-between (or space around)
align-items: center
margin-top: 40px
padding-top: 24px
border-top: 1px solid rgba(255,255,255,0.1)
font-size: 13px
color: rgba(255,255,255,0.4)
```
