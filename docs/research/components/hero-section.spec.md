# Hero Section Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** hero at scroll position 0, desktop 1440px
- **Interaction model:** Static (simplified — original has GSAP scroll animation, clone uses static hero)

## Visual Description
Full-viewport-height section with a video/image background showing wind turbines. 
Centered white text: large h1, paragraph, two CTA buttons.
Dark overlay over the video.

## DOM Structure
```
<section class="hero"> (position: relative, min-height: 100vh, display: grid, place-items: center)
  <video> (absolute, inset-0, object-fit: cover, muted, autoPlay, loop, playsInline)
  <div class="overlay"> (absolute, inset-0, background: rgba(0,0,0,0.35))
  <div class="content"> (relative, z-index: 1, text-align: center, padding: 0 80px)
    <h1> (white, 120px, weight 400)
      "Fit for Purpose"
      <br/>
      "Energy"
    </h1>
    <p> (white, 18px, max-width: 600px, margin: 24px auto)
    <div class="buttons"> (flex, gap: 16px, justify-center, margin-top: 32px)
      <a class="btn-primary">Build with us →</a>
      <a class="btn-outline">Discover our work</a>
    </div>
  </div>
</section>
```

## Computed Styles — Section Container
```
position: relative
min-height: 100vh (or height: 100dvh)
display: grid
place-items: center
overflow: hidden
background: #1a1a1a (fallback)
```

## Computed Styles — h1
```
font-size: clamp(60px, 8.33vw, 120px)  
font-weight: 400
line-height: 1.0
letter-spacing: -0.02em
color: #fefefe
text-align: center
margin: 0 auto
max-width: 900px
```

## Computed Styles — Paragraph
```
font-size: 18px
color: rgba(254, 254, 254, 0.85)
line-height: 1.6
max-width: 560px
margin: 24px auto 0
text-align: center
```

## Computed Styles — Button Row
```
display: flex
flex-wrap: wrap
gap: 16px
justify-content: center
margin-top: 32px
```

## CTA Buttons

### "Build with us →" (Primary)
```
background: #ffffff (white on dark hero)
color: #1f1e1e
border-radius: 999px
padding: 16px 32px
font-size: 16px
font-weight: 400
border: none
display: inline-flex
align-items: center
gap: 8px
```

### "Discover our work" (Outline)
```
background: transparent
color: #fefefe
border: 1.5px solid rgba(254,254,254,0.6)
border-radius: 999px
padding: 16px 32px
font-size: 16px
font-weight: 400
display: inline-flex
align-items: center
gap: 8px
hover: border-color: rgba(254,254,254,0.9), bg: rgba(255,255,255,0.08)
```

## Text Content (verbatim)
- h1: "Fit for Purpose\nEnergy"
- Subtext: "Virya Energy develops, finances, constructs, and operates sustainable energy assets. We accelerate the energy transition by scaling new technologies across the sustainable energy ecosystem. By delivering "fit for purpose energy," we ensure our renewable solutions match each client's specific needs, scale, and operational rhythms. We provide renewable energy in the right form, exactly when needed."
- Button 1: "Build with us →"
- Button 2: "Discover our work"

## Assets
- Video: `public/videos/hero.mp4` (autoplay, loop, muted, playsInline)
- Fallback image: `public/images/virya-image-1.jpg`

## Responsive Behavior
- **Desktop (1440px):** h1 at 120px, subtext at 18px, side-by-side buttons
- **Tablet (768px):** h1 at ~72px, buttons still side-by-side
- **Mobile (390px):** h1 at 52px, buttons stack vertically, padding 24px

## Implementation Notes
- Use `<video>` tag with autoPlay muted loop playsInline
- Add a dark overlay div (rgba 0,0,0,0.35) above the video
- Use `next/image` for static fallback if needed
- The `"use client"` directive is NOT needed for this component unless adding interactivity
