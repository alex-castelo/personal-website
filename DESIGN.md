---
name: Àlex Castelo — Portfolio
description: Single-page engineering portfolio. Warm paper, near-black ink, Geist throughout. No accent color.
colors:
  warm-ash-cream: "#f3efe6"
  near-black: "#1a1a1a"
  press-gray: "#5a564f"
  caption-gray: "#6f6860"
typography:
  display:
    fontFamily: "Geist, Inter, system-ui, sans-serif"
    fontSize: "132px"
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "-0.045em"
    fontFeature: "'ss01', 'ss02', 'cv11'"
  headline:
    fontFamily: "Geist, Inter, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.012em"
  body:
    fontFamily: "Geist, Inter, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.005em"
  label:
    fontFamily: "Geist, Inter, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.18em"
rounded:
  pill: "999px"
  sm: "4px"
spacing:
  col-pad: "80px"
  section-v: "120px"
  grid-gap: "48px"
  content-max: "1080px"
components:
  button-primary:
    backgroundColor: "{colors.near-black}"
    textColor: "{colors.warm-ash-cream}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "#111110"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.near-black}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
---

# Design System: Àlex Castelo — Portfolio

## 1. Overview

**Creative North Star: "The Printed Letter"**

One surface, sent with intent. This system was designed to be read, not scanned — unhurried, direct, on-weight. The typography does the communicating; the surfaces stay out of the way. Every choice reinforces the same signal: the person who made this is confident enough not to decorate.

The palette is pure: warm paper, near-black ink, and two grades of warm gray for hierarchy. No accent color exists because none was earned. Color's absence becomes character. The layout is structured but not rigid — a two-column editorial grid that allocates space with intent, with numbered section heads as a repeating but deliberate system marker, not a template scaffolding.

This system explicitly rejects the typical developer portfolio playbook (skill bars, project grids, GitHub-flavored cards), the SaaS landing-page aesthetic (gradient accents, feature sections, dark-mode hero), and recruiter-template conventions (icon timelines, color-coded role tags). It also refuses reflex editorial-magazine affectation for its own sake: the typographic restraint here comes from the content, not from a Klim-influenced moodboard.

**Key Characteristics:**
- Monochromatic: warm paper + near-black ink, zero accent color
- Single typeface (Geist) at high weight-and-size contrast; no pairing, no decoration
- Completely flat: no shadows, no cards, no elevation except one backdrop blur on the sticky nav
- Negative tracking throughout; wide tracking reserved for all-caps metadata labels only
- Spacing varies section to section for rhythm; uniform padding everywhere is explicitly avoided
- One animated element: a hardware-stepped blinking caret on the hero name, reduced-motion aware

## 2. Colors: The Ink-on-Paper Palette

A fully monochromatic system. No primary accent exists. Warm Ash Cream and Near-Black are the full palette; two intermediate warm grays handle typographic hierarchy. The warmth (a slight yellow-amber tint, chroma 0.009–0.012 in OKLCH) is what separates this from a cold grayscale system.

### Neutral

- **Warm Ash Cream** (`#f3efe6`, oklch 95.4% 0.012 85): The page surface. Warm, off-white, tilted toward amber. Used as the sole background across the entire page and as the foreground text color on the primary button.

- **Near-Black** (`#1a1a1a`, oklch 13.8% 0.003 85): The ink. Used for all body text, headings, borders on hover, and the primary button background. Very slightly warm rather than a pure neutral.

- **Press Gray** (`#5a564f`, oklch 40.5% 0.009 75): Secondary text. Navigation links at rest, subtitles, the contact values paragraph. Warm medium gray — visually recessive without failing contrast.

- **Caption Gray** (`#6f6860`, oklch 46.2% 0.010 75): Metadata and labels. Section numbers, date ranges, location, availability, footer metadata. At 12px uppercase, passes 4.5:1 contrast against Warm Ash Cream (WCAG AA). This is the contrast floor; nothing lighter may be used for text.

### Derived (opacity-based, not primary tokens)

The rule system derives from Near-Black at opacity:
- **Rule** (`rgba(26,26,26, 0.10)`): Standard horizontal dividers between major sections.
- **Rule Soft** (`rgba(26,26,26, 0.06)`): Experience row separators; almost invisible, used for internal sub-rhythm.
- **Rule Strong** (`rgba(26,26,26, 0.18)`): Ghost button border at rest; contact link underlines.

The nav elevated background is `rgba(243,239,230, 0.78)` — Warm Ash Cream at 78% opacity, paired with backdrop blur.

**The No Accent Rule.** No accent color exists. This is not an omission; it is the voice. If a new component requires emphasis, reach for weight, size, or whitespace — not color. Adding any non-neutral hue, however subtle, breaks the system.

## 3. Typography

**Display/Body/Label Font:** Geist (with Inter, system-ui as fallbacks)

**Character:** A single, committed sans-serif family deployed across the full hierarchy through scale and tracking contrast alone. The display type at 132px and −0.045em tracking sits in a completely different register from the 12px +0.18em all-caps labels, yet they share the same family. No decorative pairing. The system proves it doesn't need one.

Geist's OpenType features are always on: `'ss01', 'ss02', 'cv11'` via `font-feature-settings`. `-webkit-font-smoothing: antialiased` throughout.

### Hierarchy

- **Display** (weight 500, 132px → 58px responsive, line-height 0.92, tracking −0.045em): Hero name only. Extreme size, tight tracking, medium weight. Line height below 1.0 optically collapses the name into a monolithic block. Never used for section titles.

- **Headline** (weight 400, 22px, line-height 1.5, tracking −0.012em): Long-form prose (About paragraphs, Contact intro). The primary reading register. Max line length 640px (~65ch).

- **Title** (weight 500, 18px, line-height 1.4, tracking −0.01em): Company names, role headers; introduces content that follows it.

- **Body** (weight 400, 17px, line-height 1.6, tracking −0.005em): Experience narratives, supporting prose. Max line length 580px (~60ch).

- **Label** (weight 400, 12px, line-height 1, tracking +0.18em, all-caps, `font-variant-numeric: tabular-nums`): Section numbers, date ranges, location, availability, footer metadata. The only place tracking goes positive. Wide tracking + uppercase = metadata register.

### Named Rules

**The One Family Rule.** Geist is the only typeface. Pairing is prohibited. All hierarchy comes from scale, weight, and tracking contrast within the family.

**The Tracking Inversion Rule.** Body and heading text tracks tighter than the optical default (−0.005em to −0.045em). Labels track wide (+0.18em, uppercase). Tight = voice; wide = metadata. Never swap these.

## 4. Elevation

This system is flat. No `box-shadow` declarations exist in the codebase. Depth is not conveyed through elevation. Surfaces are not layered spatially.

The single exception is the navigation bar: `backdrop-filter: blur(14px) saturate(140%)` combined with a semi-transparent background and a near-invisible 1px border-bottom. This is tonal elevation through material opacity — the nav reads as floating over the page as frosted glass over print, not as a card above a surface. It is structural, not decorative.

**The No-Shadow Rule.** No new component may use `box-shadow` for decorative or structural elevation. If a component needs to read as distinct from the background, use a 1px full border, a background tint, or whitespace.

**The Blur Exception.** Backdrop blur is reserved for the sticky navigation only. It must never appear on cards, modals, tooltips, drawers, or any other component.

## 5. Components

Components in this system are terse and confident. No rounding except pill buttons. No background fills on content surfaces. No shadows.

### Buttons

Two variants, fully exhaustive. Both use pill shape as the only rounded form in the system.

- **Shape:** `border-radius: 999px`. Pill buttons only; all other surfaces are either sharp-cornered or use `border-radius: 4px` for focus rings only.
- **Primary:** Near-Black background (`#1a1a1a`), Warm Ash Cream text, `padding: 12px 20px`, `font-size: 15px`, `letter-spacing: -0.005em`. Appears once in the hero.
- **Primary Hover:** Imperceptible darkening (`oklch(12% 0.007 85)`) and 1px upward lift (`translateY(-1px)`, 160ms ease). Subtle; not theatrical.
- **Ghost:** Transparent background, Rule Strong border (`rgba(26,26,26,0.18)`), Near-Black text, same padding and size.
- **Ghost Hover:** Border shifts to Near-Black (`#1a1a1a`); background adds a 4% ink wash (`rgba(26,26,26,0.04)`).
- **Focus (both):** `outline: 2px solid var(--ink)`, `outline-offset: 4px`. WCAG AA keyboard navigation.

### Navigation

Sticky top bar at `z-index: 50`. Baseline-aligned: name and links sit on the same typographic baseline, not vertically centered. Name left (weight 500, Near-Black), links right (weight 400, Press Gray at rest, Near-Black on hover). `padding: 18px 80px`. The backdrop blur is the nav's defining characteristic; it appears nowhere else.

### Section Heads

The portfolio's signature structural component. A two-column grid: 120px left column carries the section number as a Label-style all-caps tag (Caption Gray); the right column carries the section title at the same Label size but Near-Black and weight 500. Both columns top-align at a 6px offset so they read as a matching pair despite different colors. The pattern repeats across every major section (01, 02, 03) as a deliberate named system. `padding-top: 120px`, `padding-bottom: 56px`.

### Experience Rows

Full-width rows at `padding: 44px 0`, separated by Rule Soft borders at the top of each row (first row: no border). Two columns: 240px left for metadata (date range in Label style, company name in Title style, role in 14px Press Gray); 580px-max-width right for narrative prose in Body style.

### Caret (Motion Signature)

A blinking text cursor inline after the hero name. Dimensions: `0.42em × 0.78em`, Near-Black fill. Animation: `steps(1, end)` at 1.12s — no easing curve, hardware-synchronized binary blink. The only animated element on the page. `prefers-reduced-motion`: animation is removed, caret stays visible and static at full opacity.

## 6. Do's and Don'ts

### Do:

- **Do** use Geist exclusively. One family, all hierarchy through scale, weight, and tracking contrast.
- **Do** keep letter-spacing negative on all display and body text (minimum −0.005em). Positive tracking is reserved for all-caps labels at 12px only.
- **Do** enforce WCAG AA contrast at every size. Caption Gray (`#6f6860`) is the absolute floor; nothing lighter on Warm Ash Cream.
- **Do** use full borders (1px) or background tints when a component needs visual distinction. Never `border-left` as a stripe.
- **Do** vary vertical spacing section to section. Hero breathes at 120px/140px; section heads use 120px top / 56px bottom; experience rows use 44px. Same padding everywhere is monotony.
- **Do** respect `prefers-reduced-motion`. The caret is the sole animated element; it must freeze when motion is reduced.
- **Do** align on the baseline. Navigation name and links are `align-items: baseline`, not center. Section number and title align by top offset.

### Don't:

- **Don't** introduce an accent color. The system is monochromatic by intent, not omission. If a new component asks for color, the answer is weight, size, or spacing.
- **Don't** add `box-shadow` to any component. Shadows are architecturally prohibited.
- **Don't** use `backdrop-filter` outside the navigation bar.
- **Don't** introduce a second typeface. No display serif, no monospace for "technical signal," no script.
- **Don't** ship a project grid: no icon + heading + text cards, no same-sized Bento grids, no thumbnail galleries.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on any component.
- **Don't** use gradient text (`background-clip: text` + gradient). Prohibited.
- **Don't** use glassmorphism decoratively. The nav blur is structural; blur + semi-transparent fill on content components is prohibited.
- **Don't** ship recruiter-template patterns: skill bars, progress indicators, color-coded role tags, icon timelines, GitHub stats widgets.
- **Don't** ship SaaS landing-page patterns: gradient accents, feature-section icon grids, CTA animations, dark-mode hero sections.
- **Don't** add a hero image, avatar, or headshot. This is a text-first surface; imagery is not part of the brief and would dilute the typographic voice.
