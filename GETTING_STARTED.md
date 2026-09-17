# Getting Started — Chikami Portfolio Development

## Quick Start

```powershell
# Install dependencies (if not already installed)
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The app will automatically route to your browser's language (Japanese or English). You can toggle languages using the button in the navigation.

---

## What You'll See

### Homepage Structure

1. **Hanko Load Sequence** — A signature intro animation that runs once per session. The hanko seal draws itself stroke-by-stroke, stamps down, then wipes to reveal the page. (Click "Skip" to bypass)

2. **Hero Section** — Asymmetric layout with Chikami's name and bio on the left, rotating artwork on the right. Cross-fades between traditional irezumi and digital character work every 4 seconds.

3. **Two Hands Section** — Visual split-screen showing the duality:
   - Left: Traditional irezumi (sumi/shu/ai palette)
   - Right: Digital character design (neon accents)
   - Center: Hand-drawn brush-stroke divider

4. **Selected Work** — Preview grid of 5 featured pieces linking to the gallery

5. **About Teaser** — Short intro with link to full About page

6. **Booking CTA** — Call-to-action with placeholder for X/Twitter feed

### Current Placeholders

- **Images:** All artwork is currently placeholder content with emoji icons
- **Hanko Mark:** Simplified SVG seal (needs replacement with actual design)
- **X/Twitter Feed:** Placeholder div (needs widget embed)

---

## File Structure Quick Reference

### Where to Find Things

**Pages:**
- Homepage: `app/[locale]/page.tsx`
- Gallery: `app/[locale]/gallery/` (TODO)
- About: `app/[locale]/about/` (TODO)
- Other pages: Similar structure

**Components:**
- Shared (nav, footer, etc.): `components/shared/`
- Homepage sections: `components/home/`
- Page-specific: `components/[page-name]/`

**Styles:**
- Design system: `app/globals.css`
- Tailwind config: Embedded in `globals.css` via `@theme`

**Translations:**
- English: `messages/en.json`
- Japanese: `messages/ja.json`

**Images:**
- Hero artwork: `public/images/hero/`
- Gallery: `public/images/gallery/`
- Textures: `public/textures/`

---

## Design System Quick Reference

### Colors

```css
--color-sumi: #0C0C0D        /* Ink black background */
--color-washi: #EFE8D8       /* Paper cream text */
--color-shu: #B23A1E         /* Traditional red accent */
--color-ai: #22395C          /* Traditional indigo */
--color-neon: #00E5C7        /* Digital accent (character work only) */
--color-kin: #B8925A         /* Gold dividers/hover */
```

### Typography

```css
--font-display: Fraunces / Shippori Mincho B1
--font-body: Instrument Sans / Zen Kaku Gothic New
```

Use `font-display` for headlines, `font-body` for UI and text.

### Spacing

```css
--space-1: 8px
--space-2: 16px
--space-3: 24px
--space-4: 32px
--space-6: 48px
--space-8: 64px
--space-12: 96px
--space-16: 128px
```

### Utility Classes

```css
.container           /* Max-width container with padding */
.section-padding     /* Vertical section spacing */
.brush-divider       /* Hand-drawn divider line */
.ink-bleed          /* Ink bleed effect for section transitions */
.btn                /* Button base styles */
.btn-primary        /* Red primary button */
.btn-secondary      /* Gold outlined button */
```

---

## Animation System

### GSAP Plugins Available

All GSAP plugins are registered in `GSAPProvider.tsx`:
- ScrollTrigger
- Flip
- DrawSVGPlugin
- CustomEase

### Custom Eases

```javascript
CustomEase.create('ink-flow', '0.23, 1, 0.32, 1');
CustomEase.create('brush-snap', '0.68, -0.55, 0.265, 1.55');
```

### Reduced Motion

The `GSAPProvider` automatically detects `prefers-reduced-motion` and speeds up the global timeline to near-instant. Always test animations with reduced motion enabled in browser dev tools.

---

## Adding New Pages

### 1. Create the page file

```typescript
// app/[locale]/your-page/page.tsx
export default function YourPage() {
  return (
    <div>Your content here</div>
  );
}
```

### 2. Add translations

```json
// messages/en.json
{
  "yourPage": {
    "title": "Your Page Title",
    "description": "..."
  }
}

// messages/ja.json
{
  "yourPage": {
    "title": "ページタイトル",
    "description": "..."
  }
}
```

### 3. Use translations

```typescript
import { useTranslations } from 'next-intl';

export default function YourPage() {
  const t = useTranslations('yourPage');
  
  return (
    <h1>{t('title')}</h1>
  );
}
```

### 4. Add navigation link

Update `components/shared/Navigation.tsx` to include the new page.

---

## Adding Artwork Images

### Image Specifications

- **Format:** AVIF or WebP (next/image will auto-convert)
- **Resolution:** Web-optimized (max 2000px longest edge)
- **Naming:** Descriptive, lowercase, hyphenated (e.g., `dragon-back-piece.jpg`)

### Where to Place

- Hero artwork: `public/images/hero/`
- Gallery pieces: `public/images/gallery/`
- About page: `public/images/about/`

### Using in Components

```typescript
import Image from 'next/image';

<Image
  src="/images/gallery/your-artwork.jpg"
  alt="Descriptive alt text here"
  width={800}
  height={1200}
  className="..."
  priority={false} // Set true for above-fold images
/>
```

### Alt Text Guidelines

Every artwork needs descriptive alt text. Good example:

```
"Traditional Japanese dragon irezumi tattoo design with scales and clouds, dense black linework"
```

Not just: "Dragon tattoo" or "Artwork 1"

---

## Working with Translations

### Current Locales

- `en` — English
- `ja` — Japanese

Default locale is Japanese (matching Chikami's market).

### Language Toggle

Users can toggle language via the button in the navigation. The current locale is stored in the URL path: `/en/about` vs `/ja/about`.

### Adding New Strings

1. Add to both `messages/en.json` and `messages/ja.json`
2. Use consistent key structure:

```json
{
  "section": {
    "subsection": {
      "key": "value"
    }
  }
}
```

3. Access in components:

```typescript
const t = useTranslations('section.subsection');
const text = t('key');
```

---

## Common Tasks

### Updating Navigation Links

Edit `components/shared/Navigation.tsx`:

```typescript
const navLinks = [
  { href: `/${locale}/gallery`, label: t('work') },
  { href: `/${locale}/about`, label: t('about') },
  // Add new links here
];
```

### Updating Footer Content

Edit `components/shared/Footer.tsx`

### Changing Colors

Edit `app/globals.css` in the `@theme` block:

```css
@theme {
  --color-sumi: #0C0C0D;  /* Change values here */
  /* ... */
}
```

### Adjusting Animation Timing

Edit `components/shared/GSAPProvider.tsx` to change global defaults:

```typescript
gsap.defaults({
  ease: 'power2.out',
  duration: 0.6,  // Change timing here
});
```

---

## Testing Checklist

### Before Committing

- [ ] Test in Japanese and English
- [ ] Test on mobile viewport (375px)
- [ ] Test with `prefers-reduced-motion` enabled
- [ ] Check browser console for errors
- [ ] Verify images load correctly
- [ ] Test keyboard navigation (Tab, Enter, Esc)

### Browser Dev Tools Shortcuts

**Toggle reduced motion:**
1. Open DevTools (F12)
2. Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows)
3. Type "Show Rendering"
4. Check "Emulate CSS prefers-reduced-motion"

**Responsive testing:**
1. Open DevTools (F12)
2. Click device toggle icon (Cmd+Shift+M / Ctrl+Shift+M)
3. Select preset or enter custom dimensions

---

## Troubleshooting

### Development server won't start

```powershell
# Clear node_modules and reinstall
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Images not loading

- Check file path is correct (`/images/...` not `images/...`)
- Verify file exists in `public/` directory
- Check file extension matches (case-sensitive on some systems)

### Translations not working

- Verify key exists in both `en.json` and `ja.json`
- Check key path matches in `useTranslations('key.path')`
- Restart dev server after adding new translation keys

### GSAP animations not working

- Check if `GSAPProvider` wraps the component tree
- Verify plugin is registered in `GSAPProvider.tsx`
- Check browser console for GSAP errors
- Ensure refs are attached before animations run

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [GSAP Documentation](https://gsap.com/docs/v3/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Radix UI Documentation](https://www.radix-ui.com/)

---

## Getting Help

### Check these first:
1. `README.md` — Project overview and structure
2. `DESIGN_PLAN.md` — Design rationale and token reference
3. `PROJECT_STATUS.md` — What's done and what's next

### Common questions:

**Q: Where do I add new artwork?**  
A: Place images in `public/images/gallery/` and they'll be accessible at `/images/gallery/your-file.jpg`

**Q: How do I change the color scheme?**  
A: Edit the CSS variables in `app/globals.css` under the `@theme` block

**Q: Can I add a new language?**  
A: Yes — add the locale to `i18n.ts`, create `messages/[locale].json`, and update middleware

**Q: Why are some animations instant?**  
A: You might have reduced motion enabled in your browser settings (this is correct behavior!)

**Q: How do I replace the hanko placeholder?**  
A: Edit `components/shared/HankoMark.tsx` with the actual SVG paths from the real design

---

**Ready to build.** Start with the Gallery page — it's the core product and the most important page after the homepage.
