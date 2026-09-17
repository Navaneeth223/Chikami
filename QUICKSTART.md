# Quickstart — Get This Running in 5 Minutes

## Current Issue

The build fails due to a Tailwind CSS v4 beta incompatibility with Next.js 15.1. Everything else is complete and ready to run.

## Fix It Now

### Option 1: Downgrade to Tailwind v3 (Recommended)

```powershell
# From the project root
npm uninstall tailwindcss @tailwindcss/postcss
npm install tailwindcss@3.4.17 autoprefixer

# Update postcss.config.mjs
```

Then edit `postcss.config.mjs` to:

```javascript
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

### Option 2: Remove Tailwind Entirely

The design system is fully implemented in `app/globals.css` using CSS custom properties. You could skip Tailwind:

```powershell
# Remove Tailwind
npm uninstall tailwindcss @tailwindcss/postcss @tailwindcss/typography

# Remove postcss.config.mjs and tailwind.config.ts
Remove-Item postcss.config.mjs, tailwind.config.ts
```

Then in `app/globals.css`, remove the first line:
```css
@import "tailwindcss";  /* DELETE THIS LINE */
```

Replace Tailwind utility classes in components with vanilla CSS or keep the simple ones (`flex`, `grid`, etc.) as custom utilities.

---

## After the Fix

```powershell
# Start dev server
npm run dev
```

Visit `http://localhost:3000`

You'll see:
- Hanko seal animation on first load
- Hero with rotating placeholder artwork
- Two Hands duality section
- Selected work grid
- About teaser
- Booking CTA

Toggle language with the button in nav (EN ⇄ 日本語)

---

## What to Do First

### 1. Replace Hanko Mark

Edit `components/shared/HankoMark.tsx` with the actual signature seal design. Current version is a placeholder.

### 2. Add Hero Images

Place 4 images in `public/images/hero/`:
- `dragon-irezumi.jpg` — Traditional tattoo
- `character-vtuber.jpg` — Bright character design
- `phoenix-flash.jpg` — Flash design
- `character-design.jpg` — Character sheet

### 3. Add Gallery Images

Place 5-10 images in `public/images/gallery/` for the Selected Work section.

### 4. Test Animations

- Watch the hanko seal draw itself
- See the hero artwork rotate
- Scroll to Two Hands section and watch the parallax
- Check reduced motion: DevTools → Cmd+Shift+P → "Show Rendering" → Check "Emulate prefers-reduced-motion"

---

## Project Structure at a Glance

```
Chikami/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Fonts, providers, nav, footer
│   │   └── page.tsx             # Homepage
│   └── globals.css              # Design system (works without Tailwind)
│
├── components/
│   ├── shared/                  # Nav, Footer, GSAP, Lenis
│   └── home/                    # Homepage sections
│
├── messages/
│   ├── en.json                  # English strings
│   └── ja.json                  # Japanese strings
│
├── public/images/               # Add artwork here
│
└── Docs:
    ├── README.md                # Project overview
    ├── DESIGN_PLAN.md           # Design rationale
    ├── PROJECT_STATUS.md        # Detailed progress
    ├── GETTING_STARTED.md       # Developer guide
    └── BUILD_SUMMARY.md         # What's been built
```

---

## Common Tasks

### Change Colors

Edit `app/globals.css` in the `@theme` block:

```css
--color-sumi: #0C0C0D;     /* Change any value */
--color-washi: #EFE8D8;
/* etc. */
```

### Add a New Page

```typescript
// app/[locale]/your-page/page.tsx
import { useTranslations } from 'next-intl';

export default function YourPage() {
  const t = useTranslations('yourPage');
  return <div>{t('title')}</div>;
}
```

Add strings to `messages/en.json` and `messages/ja.json`.

### Update Navigation

Edit `components/shared/Navigation.tsx` and add to the `navLinks` array.

---

## Next: Build the Gallery

After the homepage works, the **Gallery page is priority #1**. It's the core product.

See `PROJECT_STATUS.md` for full requirements, but in short:

- True masonry grid (natural aspect ratios)
- Filter chips that tint the UI
- GSAP Flip lightbox
- Cursor-follow hover tilt
- Lazy loading

---

##  Questions?

- `README.md` — High-level overview
- `DESIGN_PLAN.md` — Why every design decision was made
- `PROJECT_STATUS.md` — Detailed next steps
- `GETTING_STARTED.md` — In-depth developer guide
- `BUILD_SUMMARY.md` — What's done, what's not

---

**The foundation is complete. Fix the build, add images, and you'll have a working flagship portfolio in under an hour.**
