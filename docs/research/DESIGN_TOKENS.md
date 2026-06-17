# Design Tokens — virya-energy.com/en/

## Colors (from getComputedStyle)

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Orange accent | `#FF5938` | rgb(255, 89, 56) | CTAs, highlights, active states |
| Near-white | `#FEFEFE` | rgb(254, 254, 254) | Light backgrounds, hero text |
| Near-black | `#1F1E1E` | rgb(31, 30, 30) | Primary text, headings |
| Muted brown | `#9F908D` | rgb(159, 144, 141) | Muted text, "italic" words in headings |
| Beige bg | `#EEE8E2` | rgb(238, 232, 226) | Section backgrounds (items-slider, map, projects) |
| Dark green | `#0F4338` | rgb(15, 67, 56) | Footer background |
| Medium green | `#185649` | rgb(24, 86, 73) | Pre-footer CTA background |
| Pure white | `#FFFFFF` | rgb(255, 255, 255) | Cards, buttons |
| Sage/teal | `#8FA89E` | ~rgb(143, 168, 158) | Statistics left card background |

## Typography

### Font Family
- Primary: `source-sans-pro, Helvetica, Arial, sans-serif`
- Clone equivalent: `Source Sans 3` (Google Fonts)
- No monospace font used

### Font Sizes (computed at 1440px)
| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| h1 (hero) | 120px | 400 | 120px (1.0) | -2.4px |
| h2 | 55.25px | 400 | 60.78px (1.1) | -1.1px |
| h3 | ~32px | 400 | 1.2 | ~-0.5px |
| Body | 16px | 400 | 24px (1.5) | normal |
| Small | 14px | 400 | 20px | normal |
| Button | 16px | 400 | normal | normal |
| Stat number | ~56px | 400 | 1.0 | ~-1px |

### Heading Color Pattern
Many headings use a "split color" pattern:
- First word(s): `#1F1E1E` (dark)
- Last word(s): `#9F908D` (muted/grey)

Examples:
- "Our **expertise**" — "Our" dark, "expertise" muted
- "Worldwide **impact**" — "Worldwide" dark, "impact" muted
- "Our **projects**" — "Our" dark, "projects" muted
- "Latest **news**" — "Latest" dark, "news" muted
- "**Fit for Purpose** Energy" — reversed: "Fit for Purpose" light, "Energy" light (both white on hero)

## Spacing System

The site uses a consistent spacing scale (estimated from visual inspection):
- xs: 8px
- sm: 16px
- md: 24px
- lg: 32px
- xl: 48px
- 2xl: 64px
- 3xl: 80px
- 4xl: 120px

## Border Radius

| Element | Radius |
|---------|--------|
| Buttons (pill) | 999px |
| Cards (expertise, project) | 16px–24px |
| Tag pills | 999px |
| Stat boxes | 16px |
| Statistics left card | 20px |
| Pre-footer CTA card | 24px |

## Shadows

- Cards: very subtle, ~`0 2px 20px rgba(0,0,0,0.06)`
- Header scrolled: subtle shadow

## Icons

- Wind icon (custom SVG, salmon/orange color)
- Solar circle dot (small filled circle, orange)
- Wind/turbine icon (Swiper navigation areas)
- LinkedIn SVG (footer)
- Arrow right `→` (buttons)
- Lottie animations (statistics + brand promise)

## Buttons

### Primary (orange pill)
```css
background: #FF5938;
color: #ffffff;
border-radius: 999px;
padding: 14px 28px;
font-size: 16px;
font-weight: 400;
display: inline-flex; align-items: center; gap: 8px;
```

### Outline light (hero)
```css
background: transparent;
color: #fefefe;
border: 1.5px solid rgba(254,254,254,0.6);
border-radius: 999px;
padding: 14px 28px;
```

### Ghost dark (on beige/white bg)
```css
background: transparent;
color: #1f1e1e;
border: 1.5px solid rgba(31,30,30,0.25);
border-radius: 999px;
padding: 12px 24px;
font-size: 15px;
```

## Background Colors by Section

| Section | Background |
|---------|-----------|
| Header | Transparent (scrolled: white) |
| Hero | Video/image overlay (dark) |
| Items Slider | `#EEE8E2` (beige) |
| Statistics | `#FFFFFF` (white) |
| Brand Promise | `#FFFFFF` (white) |
| Map | `#EEE8E2` (beige) |
| Highlighter Services | `#FFFFFF` (white) |
| Projects Slider | `#EEE8E2` (beige) |
| Latest News | `#FFFFFF` (white) |
| Pre-footer CTA | `#185649` (medium green) |
| Footer | `#0F4338` (dark green) |
