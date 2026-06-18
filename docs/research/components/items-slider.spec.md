# Items Slider (Expertise) Specification

## Overview
- **Target file:** `src/components/ItemsSlider.tsx`
- **Interaction model:** horizontal swiper/slider (implement with simple CSS scroll-snap or manual prev/next)
- **Background:** `#EEE8E2` (beige)

## Visual Description
Section with beige background. Heading "Our expertise" (dark "Our", muted "expertise") centered at top.
Below: horizontal row of cards, each a tall rounded card with icon at top, photo filling most of the card, title + description at bottom.
Active card is fully visible; others are partially visible on sides.
Navigation arrows on left/right.

## DOM Structure
```
<section class="items-slider"> (bg: #EEE8E2, padding: 80px 0)
  <div class="wrapper">
    <h2 class="section-heading">
      <span class="dark">Our </span><span class="muted">expertise</span>
    </h2>
    <div class="slider-container"> (overflow: hidden, position: relative)
      <div class="slides-track"> (display: flex, gap: 24px)
        <div class="slide"> × 6
      </div>
      <button class="nav-prev">←</button>
      <button class="nav-next">→</button>
    </div>
  </div>
</section>
```

## Computed Styles — Section
```
background-color: #eee8e2
padding: 80px 0
```

## Computed Styles — Section Heading
```
font-size: 48px
font-weight: 400
letter-spacing: -0.02em
text-align: center
margin-bottom: 48px
color: #1f1e1e (dark part) / #9f908d (muted part)
```

## Computed Styles — Slide Card
```
flex-shrink: 0
width: 416px
height: 560px (approx)
border-radius: 20px
overflow: hidden
background: #ffffff
position: relative
cursor: pointer
```

## Computed Styles — Card Image
```
width: 100%
height: 70%
object-fit: cover
```

## Computed Styles — Card Content (bottom)
```
padding: 24px
```

## Computed Styles — Card Title
```
font-size: 20px
font-weight: 400
color: #1f1e1e
```
Dark word plain, key word(s) in muted `#9f908d` color.

## Computed Styles — Card Description
```
font-size: 15px
color: #9f908d
line-height: 1.5
margin-top: 8px
```

## Slide Content (all 6)

### Slide 1 — Wind
- Icon: `/public/icons/wind.svg` (salmon/orange tint)
- Image: `/public/images/expertise-wind.jpg`
- Title: "Community-centered **wind** energy development."
  - "Community-centered" dark, "wind" muted/orange, "energy development." dark
- Description: "We finance, develop and operate onshore wind energy projects, centred around community interests and environmental stewardship."
- Link: `https://virya-energy.com/en/our-expertise/wind-energy/`

### Slide 2 — Solar
- Icon: `/public/icons/solar.svg`
- Image: `/public/images/expertise-wind-2.jpg` (use as fallback)
- Title: "Large and medium scale **solar** and agrovoltaic solutions."
- Description: "Our industrial-scale solar projects and innovative agrovoltaic solutions are seamlessly integrated with local grid systems."
- Link: `https://virya-energy.com/en/our-expertise/solar-energy/`

### Slide 3 — Hydrogen
- Icon: `/public/icons/hydrogen.svg`
- Image: `/public/images/expertise-hydrogen.jpg`
- Title: "Pioneering of renewable **hydrogen** production."
- Description: "We lead in RFNBO hydrogen development, adding an essential component to the zero-emission energy landscape."
- Link: `https://virya-energy.com/en/our-expertise/hydrogen-development/`

### Slide 4 — Energy Supply
- Icon: energy supply icon (reuse solar)
- Image: `/public/images/expertise-energy.jpg`
- Title: "Enabling the transition **for everyone**."
- Description: "Through our DATS 24 brand, we provide a network of fueling stations, green energy contracts for homes and EV charging parks ensuring clean energy access."
- Link: `https://virya-energy.com/en/our-expertise/energy-supply/`

### Slide 5 — Monitoring
- Icon: `/public/icons/monitoring.svg`
- Image: `/public/images/virya-image-6.jpg` (fallback)
- Title: "Comprehensive energy infrastructure **monitoring**."
- Description: "Our infrastructure monitoring services ensure optimal performance of energy installations on land and offshore."
- Link: `https://virya-energy.com/en/our-expertise/monitoring/`

### Slide 6 — Transition
- Icon: `/public/icons/transition.svg`
- Image: `/public/images/virya-image-8.jpg` (fallback)
- Title: "Tailor made, **fit for purpose** B2B sustainable energy solutions."
- Description: "We guide our B2B clients in their energy transition, with customized solutions that meet their specific energy needs."
- Link: `https://virya-energy.com/en/our-expertise/transition/`

## States & Behaviors
- Active/visible slide: full opacity, slightly larger
- Inactive slides: partially visible on the sides (overflow: hidden with some peek)
- Click prev/next arrows to advance
- Implementation: simple JS state with `currentIndex`, translate the track

## Responsive Behavior
- **Desktop (1440px):** ~3 cards visible, card width 416px
- **Tablet (768px):** ~2 cards visible, card width ~320px
- **Mobile (390px):** 1 card visible, full width

## Implementation Notes
- No Swiper.js needed — implement with useState + CSS transform
- Use `"use client"` directive
- Cards are clickable links
- Icon SVGs: use `<Image>` from next/image
