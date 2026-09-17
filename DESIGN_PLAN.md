# Chikami Portfolio — Design Plan

## 1. Token System

### Color Palette
Refined from the brief based on the reference images showing deep blacks, warm paper tones, and the neon-bright character work:

| Token | Hex | CSS Variable | Role |
|-------|-----|--------------|------|
| **Sumi (墨)** | `#0C0C0D` | `--color-sumi` | Primary background, the ink black that anchors everything |
| **Washi (和紙)** | `#EFE8D8` | `--color-washi` | Body text on dark, paper texture overlay |
| **Shu-iro (朱色)** | `#B23A1E` | `--color-shu` | Traditional-side accent — hanko seal, flash borders, hover states on irezumi work |
| **Ai-iro (藍色)** | `#22395C` | `--color-ai` | Deep indigo — traditional secondary, used in gradients with sumi |
| **Neon signal** | `#00E5C7` | `--color-neon` | Digital-side accent — appears ONLY in character/VTuber contexts, never blended into traditional palette |
| **Kin (金)** | `#B8925A` | `--color-kin` | Dividers, premium detailing, subtle hover states |

**Additional texture tokens:**
- `--texture-paper`: SVG noise pattern at 3% opacity for washi backgrounds
- `--texture-inkbleed`: Feathered radial gradient for section edges
- `--brush-stroke`: Hand-drawn SVG path for dividers (not `<hr>` lines)

### Typography

**Display (headlines, artist name, pull quotes):**
- Latin: **Fraunces** (variable, weight 300–700)
- Japanese: **Shippori Mincho B1** (regular, medium)

**UI/Body (navigation, body text, forms):**
- Latin: **Instrument Sans** (regular 400, medium 500)
- Japanese: **Zen Kaku Gothic New** (regular 400, medium 500)

**Type Scale (1.25 ratio):**
```
--text-xs: 0.64rem    (10.24px)
--text-sm: 0.8rem     (12.8px)
--text-base: 1rem     (16px)
--text-lg: 1.25rem    (20px)
--text-xl: 1.563rem   (25px)
--text-2xl: 1.953rem  (31.25px)
--text-3xl: 2.441rem  (39px)
--text-4xl: 3.052rem  (48.8px)
--text-5xl: 3.815rem  (61px)
```

Body line-height: 1.6 for Latin, 1.8 for Japanese (denser character forms)
Max line length: 65ch

### Spacing Scale (8px base)
```
--space-1: 0.5rem   (8px)
--space-2: 1rem     (16px)
--space-3: 1.5rem   (24px)
--space-4: 2rem     (32px)
--space-6: 3rem     (48px)
--space-8: 4rem     (64px)
--space-12: 6rem    (96px)
--space-16: 8rem    (128px)
```

## 2. Layout Concepts

### Homepage
**One-sentence concept:** Asymmetric editorial layout where Chikami's name and bio occupy the left third while a rotating, full-bleed portrait-orientation artwork fills the right two-thirds, with a hand-drawn brush-stroke scroll cue replacing the generic "scroll down" arrow.

**Wireframe:**
```
┌─────────────────────────────────────────────────────────────┐
│  [signature mark]          Work  About  Book  Commission  EN │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  CHIKAMI                      ┌───────────────────────────┐  │
│                               │                           │  │
│  Drawing since four,          │  Rotating artwork         │  │
│  tattooing since sixteen.     │  (portrait orientation,   │  │
│  Nearly three decades         │  cross-fades between      │  │
│  in the craft.                │  traditional irezumi      │  │
│                               │  and character work       │  │
│  Working from Japan.          │  every 4 seconds)         │  │
│                               │                           │  │
│  [See the work →]             │                           │  │
│      ╲                        └───────────────────────────┘  │
│       ╲ brush-stroke                                          │
│        scroll cue                                             │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  [Section: Two hands, one line]                              │
│  Visual split-screen showing the duality:                    │
│  Left half: sumi + shu + ai palette, dragon detail           │
│  Right half: neon + bright saturation, character closeup     │
│  With a center vertical divider that's a drawn brush line    │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  [Selected work strip: 5-6 pieces, masonry, links to gallery]│
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  [About teaser + latest X embed + booking CTA]               │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Key detail:** The homepage hero should *show* the duality immediately — not through a filter toggle, but through the cross-fade rotation and the two-hands section. A visitor should understand the range within 3 seconds.

### Gallery
**One-sentence concept:** True masonry grid (not forced squares) respecting each piece's actual aspect ratio, with filter chips that trigger a color-palette shift in the UI itself — selecting "Irezumi & Flash" tints the page chrome toward shu/ai, selecting "Character & VTuber" shifts it toward neon.

**Wireframe:**
```
┌─────────────────────────────────────────────────────────────┐
│  Portfolio                                                    │
│                                                               │
│  [All] [Irezumi & Flash] [Character & VTuber] [Sketches]    │
│   ^current filter tints the background and filter pill colors^│
│                                                               │
│  ┌────┐  ┌──────┐  ┌────┐                                   │
│  │    │  │      │  │    │  ┌──────┐  ┌────┐                │
│  │ 1  │  │  2   │  │ 3  │  │      │  │    │                │
│  │    │  │      │  │    │  │  4   │  │ 5  │                │
│  └────┘  │      │  └────┘  │      │  └────┘                │
│          └──────┘           │      │                         │
│                             └──────┘                         │
│  (continues, lazy-loaded)                                     │
│                                                               │
│  Each piece: natural aspect ratio, cursor-follow tilt on     │
│  hover, click triggers GSAP Flip → fullscreen lightbox       │
└─────────────────────────────────────────────────────────────┘
```

**Key detail:** The filter isn't just a data operation — it's a *visual* one. The page itself shifts palette to reinforce which mode you're viewing.

## 3. Design Principles Specific to This Brief

### Principle 1: **Edo meets Reiwa, not "dark creative portfolio"**
Every major UI element should read as either traditional (sumi/shu/ai palette, brush strokes, paper texture) or digital (neon accents, clean sans-serif, sharp edges). The moments where they meet — the gallery filter, the two-hands section, the nav language toggle — are deliberate collisions, not blended gradients. This is contrast as concept, not decoration.

**Test:** If you can swap the palette to generic dark-mode grays without changing the layout or texture, the principle isn't implemented.

### Principle 2: **Asymmetry earns attention; cards lose it**
No uniform rounded cards with the same drop-shadow. Instead: asymmetric text lockups, off-center artwork, a masonry grid that shows the real aspect ratios. The traditional side of her work has visual weight (dense black ink); the character side has color temperature (bright, saturated). Layout should amplify those differences, not flatten them into a grid of same-size boxes.

**Test:** Take a screenshot, desaturate it, and blur it. You should still see distinct compositional weight in different areas — not a uniform field of cards.

### Principle 3: **Animation is a signature moment, not a sprinkle**
The hanko-seal load sequence is the one place to be showy — it runs once, it's skippable, it's cultural shorthand for her practice. Everything else (hover tilts, Flip transitions, the About timeline) answers a user action and stays restrained. No fade-up-on-scroll applied to every section. No staggered card reveals. Motion is a precision tool here, not a texture.

**Test:** Count the scroll-triggered animations. If it's more than two (the timeline draw and maybe one parallax accent), you've over-spent the budget.

### Principle 4: **The work is the product; the site is the frame**
The gallery is the reason someone visits. It should load fast, look incredible, and let you move between pieces without friction. Lightbox transitions via Flip so clicking a thumbnail feels like reaching for it. Real masonry so portrait-oriented tattoo shots and character sheets don't get cropped into squares. Watermarked at web resolution (consistent with her 無断転載禁止 practice) but still high enough quality to read linework density.

**Test:** Time how long it takes to open the gallery, filter to "Irezumi & Flash," click a piece, view it fullscreen, advance to the next piece, and close the lightbox. Should feel under 3 seconds per action, no jank.

## 4. Self-Critique Against Anti-Generic Checklist

### What would make this generic?
- Warm cream background (#EFE5D6-ish) + high-contrast serif + terracotta accent → **Avoided.** We're using true paper cream (washi) *as texture on dark*, not as the primary background. Primary is sumi black.
- Near-black with one flat accent → **Avoided.** We have six named colors doing distinct jobs, plus texture tokens.
- Identical rounded cards for all content → **Avoided.** Masonry grid with natural aspect ratios, asymmetric homepage hero.
- ALL-CAPS eyebrow labels, "·" joined meta, automatic "→" on links → **Avoided.** Reserve "→" only for the primary CTA; no auto-tracked caps labels.
- Numbered 01/02/03 on non-sequential content → **Avoided.** Numbers appear only on the About timeline, where they're earned.
- Uniform fade-up-on-scroll → **Avoided.** Motion budget is the hanko load, hover interactions, Flip transitions, and the About timeline only.
- One-word coloring/italicizing in headlines → **Avoided.** If we need emphasis, use weight or a drawn underline, not color-swapping a single word.

### What changed after initial drafting?
**Color refinement:** The original brief specified `#00E5C7` for neon, which from the reference images feels right — her character work has that bright cyan-teal-green digital feel. I'm keeping it strict: neon never appears in traditional-side UI.

**Type pairing:** Initially considered Noto Serif JP for the Japanese display, but Shippori Mincho reads more traditionally aligned with irezumi culture (it's based on early 20th-century Japanese book typography). Noto is excellent but too neutral for the "Edo meets Reiwa" tension.

**Gallery interaction:** Added the "filter chips tint the UI itself" idea after reviewing the reference images. Her traditional work and her character work feel like different artists; the UI should acknowledge that shift when you filter, not just hide/show different thumbnails.

## 5. Next Steps: Validation Before Code

**Questions to resolve before implementation:**
1. Confirm Chikami's preferred public name spelling (kanji vs. romaji vs. mononym).
2. Confirm tattoo technique: machine, tebori, or both? (Not visible from illustration-only references.)
3. Confirm current commission starting price (brief cites ¥5,000+ from a promo post — verify it's still accurate).
4. Confirm LINE Official Account for Japan-based contact (or if she prefers email/Instagram DMs).
5. Watermark convention: does she have a specific format/placement, or should we implement a corner signature at ~40% opacity?

**Sign-off gate:** Once this plan is reviewed and approved, proceed to:
1. Scaffold the Next.js project with Tailwind v4 + GSAP + Lenis + Sanity
2. Implement the design system (CSS variables, font loading, texture SVGs)
3. Build shared components (nav, footer, language toggle)
4. Homepage (including the hanko load sequence)
5. Gallery + lightbox (the core product)
6. About, Commissions, Blog, Contact, integrations, SEO, a11y audit

---

**This plan is specific to Chikami's practice.** The color names are real Japanese pigments. The layout asymmetry mirrors the duality in her work. The animation restraint is cultural (traditional Japanese aesthetics value ma — negative space and restraint). The filter-palette-shift idea is a functional expression of the "two bodies of work" concept, not a generic dark-mode portfolio with a toggle.

If any of the above could apply to another dark creative portfolio, it's not differentiated enough and needs revision.
