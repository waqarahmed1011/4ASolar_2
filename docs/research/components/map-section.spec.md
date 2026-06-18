# Map / Worldwide Impact Section Specification

## Overview
- **Target file:** `src/components/MapSection.tsx`
- **Background:** `#EEE8E2` (beige)
- **Interaction model:** click-driven filter tabs (All/Hydrogen/Solar/Wind)

## Visual Description
Beige section. Left column: heading "Worldwide impact", subtext, "Discover all our projects" button.
Right column: dot-matrix world map (SVG/canvas), with orange/red clusters over Europe and Asia.
Below the map: 4 filter tab buttons (All active in orange, others outlined).
Counter text: "3 projects in Asia +", "97 projects in Europe +"

## DOM Structure
```
<section class="map"> (bg: #EEE8E2, padding: 80px 0)
  <div class="wrapper">
    <div class="inner"> (2 columns: ~35% left, ~65% right, gap: 40px, align-items: center)
      <div class="left">
        <h2>
          <span class="dark">Worldwide</span><br>
          <span class="muted">impact</span>
        </h2>
        <p class="subtitle">"Present across <strong>3 continents</strong>, in <strong>15+ countries</strong>"</p>
        <a class="btn-ghost">"Discover all our projects"</a>
      </div>
      <div class="right"> (position: relative)
        <div class="map-container"> (the dotted world map)
          <img or SVG world map with dots>
          <div class="project-markers"> (orange clusters)
        </div>
        <div class="filter-tabs"> (below map)
          <button class="tab active">All</button>
          <button class="tab">⬤ Hydrogen</button>
          <button class="tab">⬤ Solar</button>
          <button class="tab">≋ Wind</button>
        </div>
        <div class="counters">
          <span>99 worldwide projects</span>
          <span>3 projects in Asia +</span>
          <span>97 projects in Europe +</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Computed Styles — Section
```
background-color: #eee8e2
padding: 80px 0
```

## Computed Styles — h2
```
font-size: clamp(40px, 3.84vw, 55px)
font-weight: 400
letter-spacing: -0.02em
line-height: 1.1
```
- "Worldwide" → `#1f1e1e`
- "impact" → `#9f908d`

## Computed Styles — Subtitle paragraph
```
font-size: 22px
font-weight: 400
color: #1f1e1e
margin: 16px 0 32px
```
With key numbers highlighted (bold or same weight).

## Computed Styles — Filter Tabs Container
```
display: flex
gap: 8px
margin-top: 24px
flex-wrap: wrap
```

## Computed Styles — Filter Tab (inactive)
```
background: transparent
border: 1.5px solid rgba(31,30,30,0.2)
border-radius: 999px
padding: 10px 20px
font-size: 14px
color: #1f1e1e
display: inline-flex
align-items: center
gap: 6px
cursor: pointer
```

## Computed Styles — Filter Tab (active / "All")
```
background: #FF5938
border: 1.5px solid #FF5938
color: #ffffff
```

## World Map
The map is a dot-matrix representation of the world with:
- Background dots: white/light grey small circles
- Active regions (Europe, Asia): orange/salmon colored dot clusters
- Implement using: a static SVG dot-map image, or a simplified version

**Simplified implementation:** Use an `<img>` tag with a world map SVG showing dot pattern. 
Since the original uses a custom dot-matrix SVG map, create a simple approximation using CSS background or a world map image.
Use `public/images/virya-image-27.jpg` as fallback if SVG not available.

## Project Counters (verbatim text)
- "99 worldwide projects"
- "3 projects in Asia +"
- "97 projects in Europe +"

## Filter Tab Labels (verbatim)
- "All" (active by default, orange)
- "⬤ Hydrogen" (with small grey circle icon)
- "⬤ Solar" (with small grey circle icon)
- "≋ Wind" (with wind/turbine icon)

## States & Behaviors
- **Active tab click:** tab background → orange, text → white
- **Inactive tab:** transparent, dark text, outline border
- **State management:** `useState` with active filter
- The actual map filtering is visual-only for the clone (dots don't change)

## Text Content (verbatim)
- h2: "Worldwide\nimpact"
- Subtitle: "Present across 3 continents, in 15+ countries"
- Button: "Discover all our projects"
- Counter: "99 worldwide projects", "3 projects in Asia +", "97 projects in Europe +"

## Responsive Behavior
- **Desktop (1440px):** 2-column (text left, map right)
- **Tablet (768px):** Stack (map below text)
- **Mobile (390px):** Single column

## Implementation Notes
- Use `"use client"` for tab interaction
- The dot world map: use a simple world map SVG from a public source, styled with orange dots over Europe/Asia
- Alternatively: display a styled background div with `virya-image-27.jpg` as the map placeholder
