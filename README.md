# Chikami Portfolio — Tattoo Artist & Illustrator

A flagship portfolio website for Chikami, a Japanese tattoo artist and illustrator with nearly three decades of experience. The site bridges traditional Japanese irezumi and vibrant digital character design — **Edo meets Reiwa**.

## 🎨 Design Concept

**Central Idea:** The collision of Edo-period ink tradition and Reiwa-era digital culture is not a stylistic garnish but the site's core creative concept.

### Key Differentiators

1. **Japanese Pigment Palette** — Sumi (墨), Washi (和紙), Shu-iro (朱色), Ai-iro (藍色), with Neon reserved exclusively for digital-side contexts
2. **Asymmetric Editorial Layouts** — Not uniform cards; real aspect ratios and compositional weight
3. **Precision Animation Budget** — Signature hanko seal load sequence, then restrained interactions (no generic fade-up-on-scroll)
4. **UI Palette Shifts** — Gallery filter chips don't just filter content, they tint the interface itself to reinforce traditional vs. digital modes

## 🏗️ Tech Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first `@theme` config) + hand-written CSS for textures
- **Animation:** GSAP (free as of 2025) + Lenis smooth scroll
- **i18n:** next-intl (Japanese/English)
- **Interaction Primitives:** Radix UI (unstyled, fully restyled)
- **Images:** next/image, AVIF/WebP, blur placeholders
- **Deployment:** Vercel

## 📂 Project Structure

```
Chikami/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Locale-specific layout with fonts
│   │   ├── page.tsx             # Homepage
│   │   ├── gallery/             # Portfolio/gallery page
│   │   ├── about/               # Her story + timeline
│   │   ├── commissions/         # Booking flow
│   │   ├── blog/                # Journal (CMS-driven)
│   │   └── contact/             # Contact form
│   ├── globals.css              # Design system + Tailwind config
│   └── layout.tsx               # Root layout
│
├── components/
│   ├── shared/
│   │   ├── Navigation.tsx       # Nav with language toggle
│   │   ├── Footer.tsx           # Footer with newsletter
│   │   ├── HankoMark.tsx        # Signature seal SVG
│   │   ├── GSAPProvider.tsx     # GSAP plugin registration
│   │   └── SmoothScroll.tsx     # Lenis integration
│   │
│   ├── home/
│   │   ├── HankoLoadSequence.tsx   # Signature intro animation
│   │   ├── Hero.tsx                 # Rotating artwork hero
│   │   ├── TwoHandsSection.tsx      # Tradition/digital split
│   │   ├── SelectedWork.tsx         # Featured pieces
│   │   ├── AboutTeaser.tsx          # Intro to About page
│   │   └── BookingCTA.tsx           # Call-to-action + X feed
│   │
│   ├── gallery/                 # Gallery components (TODO)
│   ├── about/                   # About components (TODO)
│   ├── commissions/             # Commissions components (TODO)
│   ├── blog/                    # Blog components (TODO)
│   └── contact/                 # Contact components (TODO)
│
├── messages/
│   ├── en.json                  # English translations
│   └── ja.json                  # Japanese translations
│
├── lib/                         # Utilities, types, CMS client
├── public/
│   ├── images/                  # Artwork images
│   └── textures/                # SVG textures, brushes
│
├── i18n.ts                      # i18n configuration
├── middleware.ts                # Locale routing
├── next.config.ts               # Next.js configuration
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Installation

```powershell
# Install dependencies (run from project root)
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Current Status

### ✅ Completed

- [x] Design plan with self-critique against anti-generic checklist
- [x] Design system (color palette, typography, spacing)
- [x] i18n setup (Japanese/English)
- [x] Core layout (Navigation, Footer)
- [x] GSAP + Lenis integration
- [x] Homepage structure:
  - [x] Hanko load sequence (signature moment)
  - [x] Hero with rotating artwork
  - [x] Two Hands section (traditional/digital split)
  - [x] Selected work preview
  - [x] About teaser
  - [x] Booking CTA

### 🚧 In Progress / TODO

#### Phase 1: Core Pages

- [ ] **Gallery Page** — True masonry grid, filter chips that tint UI, GSAP Flip lightbox transitions
- [ ] **About Page** — Timeline with ScrollTrigger-driven brush-stroke path, mediums, philosophy
- [ ] **Commissions Page** — Process flow, pricing (CMS-editable), FAQ accordion, booking form
- [ ] **Blog/Journal** — CMS integration (Sanity or Contentful), post templates, categories
- [ ] **Contact Page** — Form with React Hook Form + Zod, social links, LINE button for Japan market

#### Phase 2: Integrations & CMS

- [ ] Set up Sanity (or Contentful) for:
  - [ ] Gallery metadata & images
  - [ ] Blog posts
  - [ ] Pricing/promotions block
- [ ] Form handling (Resend or SendGrid)
- [ ] Newsletter integration (ConvertKit/Mailchimp)
- [ ] Social embeds (X/Twitter widget, Instagram oEmbed)

#### Phase 3: Polish & Launch

- [ ] Replace placeholder images with real artwork
- [ ] Replace placeholder Hanko mark with actual signature design
- [ ] Animation polish:
  - [ ] Gallery hover cursor-follow tilt (gsap.quickTo)
  - [ ] Ink-wash route transitions
  - [ ] About timeline DrawSVG
  - [ ] Custom cursor (dot + brush-tip)
- [ ] SEO meta tags, Open Graph images, JSON-LD
- [ ] Analytics (GA4, Meta Pixel, Google Ads conversion tag)
- [ ] Cookie consent banner
- [ ] Accessibility audit:
  - [ ] Authored alt text on all artwork
  - [ ] Keyboard navigation test
  - [ ] `prefers-reduced-motion` fallback verification
- [ ] Performance audit:
  - [ ] Core Web Vitals green despite animation budget
  - [ ] Lazy-load and code-split aggressively
- [ ] Privacy policy & terms (real legal template, not improvised)
- [ ] Deploy to Vercel

## 🎨 Design Tokens Reference

### Colors

| Token | Hex | Role |
|-------|-----|------|
| **Sumi (墨)** | `#0C0C0D` | Primary background, ink black |
| **Washi (和紙)** | `#EFE8D8` | Body text on dark, paper texture |
| **Shu-iro (朱色)** | `#B23A1E` | Traditional accent (hanko seal red) |
| **Ai-iro (藍色)** | `#22395C` | Traditional secondary (indigo dye) |
| **Neon** | `#00E5C7` | Digital accent (character work only) |
| **Kin (金)** | `#B8925A` | Dividers, hover, premium detail |

### Typography

- **Display:** Fraunces (Latin) / Shippori Mincho B1 (Japanese)
- **Body:** Instrument Sans (Latin) / Zen Kaku Gothic New (Japanese)
- **Scale:** 1.25 ratio (base 16px)

### Spacing

8px base unit: `--space-1` (8px) through `--space-16` (128px)

## 📋 Definition of Done Checklist

- [ ] Design plan reviewed against anti-generic checklist before implementation
- [ ] Site looks intentional at 375px wide, not just desktop
- [ ] `prefers-reduced-motion` has real, tested fallback
- [ ] Every artwork has authored alt text
- [ ] Core Web Vitals green
- [ ] Gallery, booking content, and blog editable without redeploy
- [ ] Tradition/digital duality visible in 3+ distinct places

## 📝 Notes for Deployment

### Environment Variables (add to Vercel)

```
# CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_TOKEN=

# Email
RESEND_API_KEY=

# Analytics
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

### Content to Gather Before Launch

1. Chikami's preferred name spelling (kanji vs. romaji)
2. Tattoo technique confirmation (machine, tebori, or both)
3. Current commission starting price
4. LINE Official Account QR/link
5. Actual signature hanko mark design
6. High-quality artwork images (portrait-oriented, web resolution)
7. About page timeline milestones (career highlights)
8. FAQ content for commissions page
9. Privacy policy text (from legal template service)

## 🔗 Useful Links

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [GSAP Documentation](https://gsap.com/docs/v3/)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Radix UI](https://www.radix-ui.com/)
- [Sanity CMS](https://www.sanity.io/)

## 📄 License

© 2026 Chikami. All artwork 無断転載禁止 (reproduction prohibited).

---

**Built with precision, not templates.** Every design decision answers the brief: Edo meets Reiwa, tradition collides with digital, 30 years of craft deserves a flagship presentation.
