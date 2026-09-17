# Documentation Index — Chikami Portfolio

## 📚 Documentation Structure

This project has comprehensive documentation organized by purpose. Start with **QUICKSTART.md** if you want to get running immediately, or **README.md** for the full overview.

---

## 🚀 Getting Started

### [QUICKSTART.md](./QUICKSTART.md)
**5-minute setup guide**
- How to fix the current build issue
- First steps after setup
- Common tasks
- Where to add images

👉 **Start here if you want to run the site now.**

---

### [GETTING_STARTED.md](./GETTING_STARTED.md)
**Comprehensive developer onboarding**
- What you'll see when you run the site
- File structure explained
- Design system quick reference
- How to add pages, translations, images
- Testing checklist
- Troubleshooting common issues

👉 **Read this after you get it running, before making changes.**

---

## 📖 Understanding the Project

### [README.md](./README.md)
**Project overview and structure**
- Design concept and differentiators
- Tech stack justification
- Directory structure
- Current status checklist
- Definition of done
- Content needed before launch

👉 **Your starting point for understanding the project.**

---

### [DESIGN_PLAN.md](./DESIGN_PLAN.md)
**Design rationale and system**
- Complete token system (colors, typography, spacing)
- Layout concepts with wireframes
- 4 design principles specific to this project
- Self-critique against anti-generic checklist
- Validation questions for the artist

👉 **Read this to understand WHY every design decision was made.**

---

## 📊 Progress Tracking

### [PROJECT_STATUS.md](./PROJECT_STATUS.md)
**Detailed progress and next steps**
- What's completed (Phase 0: Foundation)
- What's next (Phase 1: Gallery)
- Requirements for each remaining page
- Placeholder content that needs replacement
- Integration checklist
- Pre-launch audit checklist

👉 **Your roadmap. Check this to see what's done and what's next.**

---

### [BUILD_SUMMARY.md](./BUILD_SUMMARY.md)
**What's been built and current state**
- Everything completed so far
- Current build configuration issue explained
- 3 options to fix it
- File counts and technical decisions
- Key insights from the build
- Success criteria
- Launch checklist

👉 **The comprehensive "what we have" document.**

---

## 📁 File Quick Reference

### Core Application Files

- `app/globals.css` — **Design system** (all tokens, utilities, base styles)
- `app/[locale]/layout.tsx` — Root layout with fonts, providers, nav, footer
- `app/[locale]/page.tsx` — Homepage structure
- `i18n/request.ts` — i18n configuration
- `middleware.ts` — Locale routing
- `next.config.ts` — Next.js configuration

### Shared Components

- `components/shared/GSAPProvider.tsx` — GSAP plugin registration, custom eases
- `components/shared/SmoothScroll.tsx` — Lenis integration
- `components/shared/Navigation.tsx` — Nav with language toggle
- `components/shared/Footer.tsx` — Footer with newsletter, social, nav
- `components/shared/HankoMark.tsx` — Signature seal SVG (NEEDS REPLACEMENT)

### Homepage Components

- `components/home/HankoLoadSequence.tsx` — Signature intro animation
- `components/home/Hero.tsx` — Rotating artwork hero
- `components/home/TwoHandsSection.tsx` — Traditional/digital split
- `components/home/SelectedWork.tsx` — Featured pieces grid
- `components/home/AboutTeaser.tsx` — About page teaser
- `components/home/BookingCTA.tsx` — CTA + X feed

### Translations

- `messages/en.json` — English strings (all homepage)
- `messages/ja.json` — Japanese strings (all homepage)

### Configuration

- `package.json` — Dependencies and scripts
- `tsconfig.json` — TypeScript configuration
- `postcss.config.mjs` — PostCSS configuration (NEEDS FIX)
- `tailwind.config.ts` — Tailwind configuration
- `.eslintrc.json` — ESLint rules

---

## 🎯 Read This If...

### "I just got access to this project"
1. [QUICKSTART.md](./QUICKSTART.md) — Fix build and run it
2. [README.md](./README.md) — Understand what it is
3. [PROJECT_STATUS.md](./PROJECT_STATUS.md) — See what's next

### "I need to understand the design decisions"
1. [DESIGN_PLAN.md](./DESIGN_PLAN.md) — Full design rationale
2. [README.md](./README.md) — Design concept overview

### "I want to add a new page or feature"
1. [GETTING_STARTED.md](./GETTING_STARTED.md) — How-to guide
2. [PROJECT_STATUS.md](./PROJECT_STATUS.md) — Check if it's planned

### "I need to know what's done and what's not"
1. [PROJECT_STATUS.md](./PROJECT_STATUS.md) — Detailed checklist
2. [BUILD_SUMMARY.md](./BUILD_SUMMARY.md) — High-level summary

### "I'm taking over this project"
1. [BUILD_SUMMARY.md](./BUILD_SUMMARY.md) — What you're inheriting
2. [PROJECT_STATUS.md](./PROJECT_STATUS.md) — What needs to be done
3. [QUICKSTART.md](./QUICKSTART.md) — Get it running
4. [DESIGN_PLAN.md](./DESIGN_PLAN.md) — Understand the creative direction

### "I need to present this project"
1. [README.md](./README.md) — Overview and concept
2. [DESIGN_PLAN.md](./DESIGN_PLAN.md) — Design principles
3. [BUILD_SUMMARY.md](./BUILD_SUMMARY.md) — What's been delivered

---

## 💡 Documentation Philosophy

This project has **more documentation than code** because:

1. **The brief rejected generic output once** — These docs prevent it from becoming generic again
2. **Design decisions are cultural and specific** — Japanese pigments, hanko UX, Edo/Reiwa duality
3. **Handoff is inevitable** — Whether to another developer, the artist, or future-you
4. **The why matters as much as the what** — Without rationale, the unique parts get smoothed into generic choices

---

## 📝 Document Maintenance

### When to Update Each Doc

- **QUICKSTART.md** — When setup steps change
- **GETTING_STARTED.md** — When file structure changes or common tasks change
- **README.md** — When project scope or structure changes
- **DESIGN_PLAN.md** — When design system changes (should be rare)
- **PROJECT_STATUS.md** — After completing each phase
- **BUILD_SUMMARY.md** — When major milestones complete

---

## 🔍 Can't Find What You Need?

### Search Across Docs

```powershell
# From project root
Select-String -Path "*.md" -Pattern "your search term"
```

### Common Topics and Where to Find Them

| Topic | Document |
|-------|----------|
| Color palette | DESIGN_PLAN.md, globals.css |
| Typography | DESIGN_PLAN.md, globals.css |
| Animation principles | DESIGN_PLAN.md, BUILD_SUMMARY.md |
| Gallery requirements | PROJECT_STATUS.md |
| Translation system | GETTING_STARTED.md |
| Build issue | QUICKSTART.md, BUILD_SUMMARY.md |
| Tech stack decisions | README.md, BUILD_SUMMARY.md |
| Content needed | PROJECT_STATUS.md, BUILD_SUMMARY.md |
| Success criteria | BUILD_SUMMARY.md |
| File structure | README.md, GETTING_STARTED.md |

---

**Total Documentation: 6 comprehensive files covering every aspect of the project from setup to design rationale to launch checklist.**
