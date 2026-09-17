# Project Status — Chikami Portfolio

**Last Updated:** September 17, 2026  
**Current Phase:** Foundation Complete, Ready for Content & Gallery Implementation

---

## 🎯 Overview

Foundation and design system are complete. The homepage structure is built with placeholder content. Next priority is the **Gallery page** (the core product) and integrating real artwork.

---

## ✅ Completed — Phase 0: Foundation

### Design & Planning
- [x] Design plan created and self-critiqued against anti-generic checklist
- [x] Japanese pigment color palette defined with semantic roles
- [x] Typography scale and font pairings selected
- [x] Spacing system (8px base) established
- [x] Animation budget allocated (signature moment + earned interactions)

### Technical Setup
- [x] Next.js 15 project scaffolded
- [x] TypeScript configured
- [x] Tailwind CSS v4 with custom theme
- [x] i18n setup (Japanese/English via next-intl)
- [x] GSAP + Lenis integration
- [x] Middleware for locale routing

### Design System
- [x] `globals.css` with full design system implementation:
  - [x] Color tokens (Sumi, Washi, Shu-iro, Ai-iro, Neon, Kin)
  - [x] Typography scale and defaults
  - [x] Spacing scale
  - [x] Paper texture overlay on body
  - [x] Brush divider utility
  - [x] Ink bleed effect
  - [x] Mode indicators (traditional vs. digital)
  - [x] Button base styles
  - [x] Accessibility (focus-visible, skip-to-content, sr-only)
  - [x] Reduced motion support
  - [x] Custom scrollbar

### Shared Components
- [x] `GSAPProvider` — Plugin registration, custom eases, reduced-motion detection
- [x] `SmoothScroll` — Lenis integration synced with GSAP ScrollTrigger
- [x] `Navigation` — Desktop/mobile nav, language toggle, scroll-aware styling
- [x] `Footer` — Newsletter signup, social links, navigation, copyright
- [x] `HankoMark` — Placeholder SVG (needs replacement with actual design)

### Homepage Components
- [x] `HankoLoadSequence` — Signature intro animation (DrawSVG stroke reveal, stamp bloom, mask wipe)
- [x] `Hero` — Rotating artwork cross-fade, asymmetric text/image layout, scroll cue
- [x] `TwoHandsSection` — Visual split showing traditional/digital duality with parallax
- [x] `SelectedWork` — Masonry preview grid linking to gallery
- [x] `AboutTeaser` — Intro to About page
- [x] `BookingCTA` — Call-to-action with X/Twitter feed placeholder

### Translations
- [x] English messages (`en.json`)
- [x] Japanese messages (`ja.json`)
- [x] All homepage strings internationalized

---

## 🚧 Next Priority — Phase 1: Gallery (Core Product)

The gallery is the reason someone visits. It should be built before anything else from the remaining pages.

### Gallery Page Requirements

- [ ] **Masonry Grid** — True masonry respecting each image's real aspect ratio (most work is portrait-oriented)
- [ ] **Filter Chips** — All / Irezumi & Flash / Character & VTuber / Sketches
  - [ ] **UI Palette Shift** — Filter selection tints page chrome (traditional → shu/ai, digital → neon)
- [ ] **Hover Interaction** — Cursor-follow tilt on images (gsap.quickTo)
- [ ] **Lightbox** — GSAP Flip animation from grid position to fullscreen
  - [ ] Prev/next navigation
  - [ ] Caption with title, category, date
  - [ ] Keyboard navigation (arrow keys, Esc to close)
  - [ ] Close button + click outside to close
- [ ] **Lazy Loading** — Images load as user scrolls
- [ ] **Watermarking** — Web resolution, lightly watermarked (consistent with 無断転載禁止 practice)
- [ ] **Responsive** — Mobile-optimized grid (single column or 2-col)
- [ ] **Alt Text** — Every piece needs authored alt text describing the artwork

### Placeholder Content Replacement

#### Hero Rotating Artwork (4 images needed)
- [ ] `public/images/hero/dragon-irezumi.jpg` — Traditional dragon piece
- [ ] `public/images/hero/character-vtuber.jpg` — Bright VTuber character
- [ ] `public/images/hero/phoenix-flash.jpg` — Phoenix flash design
- [ ] `public/images/hero/character-design.jpg` — Anime character sheet

#### Selected Work Grid (5 images minimum)
- [ ] Traditional pieces (2-3 images)
- [ ] Digital character work (2-3 images)

#### Hanko Mark Replacement
- [ ] `components/shared/HankoMark.tsx` — Replace placeholder SVG with actual signature seal design
  - Must work for DrawSVG animation (stroke-based paths)
  - Should be recognizable at small sizes (40x40px in nav)
  - Will be the mask for the load sequence wipe

---

## 📋 Phase 2: Remaining Core Pages

### About Page
- [ ] Hero with portrait image
- [ ] Timeline component with ScrollTrigger-driven brush-stroke path
  - [ ] Milestone content (career highlights from age 4 to present)
- [ ] Mediums section (digital, pencil, tattoo technique)
- [ ] Philosophy section ("Where tradition meets the present")
- [ ] Process image gallery (sketch-to-final progression)

### Commissions Page
- [ ] Process flow (Inquiry → Consultation → Design → Session)
- [ ] Pricing block (CMS-editable, starts at ¥5,000)
- [ ] Current promotions (CMS-editable)
- [ ] FAQ accordion
  - [ ] Content needed: aftercare, deposits, cancellation policy, session length, etc.
- [ ] Booking form
  - [ ] Fields: name, email, LINE ID (optional), placement, size, budget, message, reference upload
  - [ ] React Hook Form + Zod validation
  - [ ] Resend/SendGrid delivery

### Blog/Journal Page
- [ ] Post grid/list
- [ ] Category filter (Process, Flash Drops, Travel, Announcements)
- [ ] Individual post template
  - [ ] Cover image
  - [ ] Tags
  - [ ] Share buttons
  - [ ] Related posts
- [ ] CMS integration (Sanity or Contentful)

### Contact Page
- [ ] Contact info display
  - [ ] Email
  - [ ] X/Twitter link
  - [ ] Instagram link (if applicable)
  - [ ] LINE Official Account button/QR
  - [ ] Location (city/region only, not exact address)
- [ ] Simple contact form (separate from booking)
- [ ] Embedded map or regional indicator (optional)

---

## 🔌 Phase 3: Integrations

### CMS (Sanity or Contentful)
- [ ] Set up Sanity project
- [ ] Define schemas:
  - [ ] Artwork (title, category, image, alt text, date, featured boolean)
  - [ ] Blog post (title, slug, cover image, body, category, published date, author)
  - [ ] Promotion (message, start date, end date, active boolean)
  - [ ] Pricing tier (name, starting price, description)
- [ ] Studio setup
- [ ] Webhook for build trigger on content publish

### Forms & Email
- [ ] Set up Resend or SendGrid account
- [ ] Configure email templates
  - [ ] Booking inquiry notification (to Chikami)
  - [ ] Booking confirmation (to client)
  - [ ] General contact inquiry
  - [ ] Newsletter confirmation
- [ ] Spam protection (honeypot or hCaptcha)

### Newsletter
- [ ] Choose service (ConvertKit, Mailchimp, or Resend Broadcasts)
- [ ] API integration
- [ ] Double opt-in flow
- [ ] Welcome email template

### Social Embeds
- [ ] X/Twitter widget implementation
- [ ] Instagram oEmbed (if used)
- [ ] LINE Official Account button/QR generation

### Analytics & Marketing
- [ ] Google Analytics 4 setup
- [ ] Meta Pixel installation
- [ ] Google Ads conversion tracking
- [ ] Cookie consent banner (GDPR/APPI compliant)

---

## 🎨 Phase 4: Animation Polish

- [ ] **Gallery hover** — Cursor-follow tilt (gsap.quickTo)
- [ ] **Lightbox transitions** — GSAP Flip from grid to fullscreen
- [ ] **Route transitions** — Ink-wash wipe with irregular edge (consistent across all pages)
- [ ] **About timeline** — Brush-stroke path DrawSVG on scroll
- [ ] **Custom cursor** — Dot with trailing ring, brush-tip glyph over interactive art
  - [ ] Skip on touch devices
- [ ] **Reduced motion testing** — Verify all animations have proper fallbacks

---

## ✅ Phase 5: Pre-Launch

### Content Gathering
- [ ] Chikami's preferred name spelling confirmation
- [ ] Tattoo technique (machine/tebori/both)
- [ ] Current commission starting price verification
- [ ] LINE Official Account link/QR
- [ ] High-quality artwork images (20-30 pieces minimum)
- [ ] About page timeline content
- [ ] Commissions FAQ answers
- [ ] Privacy policy text (from legal template)

### SEO
- [ ] Per-page meta tags
- [ ] Open Graph images (1200x630px) for all major pages
- [ ] JSON-LD structured data
  - [ ] Person schema
  - [ ] LocalBusiness schema
- [ ] Sitemap generation
- [ ] robots.txt
- [ ] hreflang tags for JP/EN versions

### Accessibility Audit
- [ ] All images have authored alt text
- [ ] Keyboard navigation works on all interactive elements
- [ ] Focus-visible styles are clear
- [ ] Color contrast meets WCAG AA (verify even in dark palette)
- [ ] Screen reader testing
- [ ] `prefers-reduced-motion` tested in browser

### Performance Audit
- [ ] Core Web Vitals green:
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1
- [ ] Images optimized (AVIF/WebP, appropriate sizes)
- [ ] Code splitting verified
- [ ] Lazy loading working correctly
- [ ] Bundle size analysis (ensure GSAP isn't bloating unnecessarily)

### Browser & Device Testing
- [ ] Chrome (Windows, Mac, Android)
- [ ] Safari (Mac, iOS)
- [ ] Firefox (Windows, Mac)
- [ ] Edge (Windows)
- [ ] Mobile viewports (375px, 390px, 414px)
- [ ] Tablet viewports (768px, 1024px)

### Security & Legal
- [ ] Environment variables secured
- [ ] API keys not exposed in client
- [ ] Form inputs sanitized
- [ ] Rate limiting on contact/booking forms
- [ ] Privacy policy live
- [ ] Terms of service live
- [ ] Cookie consent working

---

## 🚀 Phase 6: Deployment

### Vercel Setup
- [ ] Connect GitHub repo
- [ ] Configure environment variables
- [ ] Set up production domain
- [ ] Configure custom domain (if applicable)
- [ ] Enable analytics
- [ ] Set up preview deployments

### Post-Launch
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor Core Web Vitals via Vercel Analytics
- [ ] Test all forms in production
- [ ] Verify CMS publish → build trigger works
- [ ] Set up uptime monitoring
- [ ] Create backup strategy for content

---

## 📝 Notes & Decisions Needed

### Questions for Chikami (before final content load):
1. Preferred public name spelling (kanji/romaji/mononym)
2. Tattoo technique confirmation
3. Current commission pricing (verify ¥5,000+ starting point)
4. LINE Official Account details
5. Watermark format/placement preference for web images
6. Any content she does NOT want included (e.g., early work, specific subjects)

### Technical Decisions:
- **CMS Choice:** Lean toward Sanity for better image handling and Japanese content support
- **Email Service:** Resend recommended (simpler API, good DX)
- **Newsletter:** Start with Resend Broadcasts (one less service), migrate to ConvertKit if list grows
- **Hosting:** Vercel (obvious choice for Next.js)

---

## 🎯 Immediate Next Steps (Priority Order)

1. **Replace placeholder Hanko mark** with actual signature design
2. **Build Gallery page** with masonry + filter + lightbox (core product)
3. **Add 4 hero images** to make homepage feel real
4. **Add 5-10 gallery pieces** to populate Selected Work
5. **Set up Sanity CMS** and connect to Gallery
6. Build About page with timeline
7. Build Commissions page with booking form
8. Integrate analytics & forms
9. Final polish & launch

---

**Current State:** Foundation is solid. Ready to move fast on Gallery and content integration. No blockers.
