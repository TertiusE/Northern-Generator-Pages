# Northern Generator redesign report

## Summary
- Rebuilt the site as a static-export Next.js app for GitHub Pages.
- Kept assets local: no remote fonts, no third-party imagery, no external UI libraries.
- Refined the redesign after review to keep visible copy constrained to original-site wording and remove redesign/meta language from the user-facing pages.
- Shifted the palette lighter to use more white with logo-led blue and orange accents.
- Added dedicated pages for services, rentals, about, FAQ redirect, and contact.
- Added sitemap, robots, and JSON-LD metadata.

## Local assets used
- `public/images/logo.png`
- `public/images/team.jpg`
- `public/images/generator-service.png`
- `public/images/hero-generator.png` (downloaded during research; not used in the current homepage hero)

## Key design changes
- Stronger hero with a lighter, white-led information layout.
- Floating `Contact 24 HR` control inspired by BOA’s compact interaction style.
- Clear service hierarchy with individual service detail pages.
- Mobile menu and mobile-first CTA treatment.
- Static GitHub Pages-safe contact form using a `mailto:` draft handoff.
- Removed visible redesign commentary and reduced non-original support labels from the UI.

## QA completed
- `npm run lint` ✅
- `npm run typecheck` ✅
- `npm run build` ✅
- HTTP checks previously passed for:
  - `/`
  - `/services/`
  - `/contact/`
  - `/robots.txt`
  - `/sitemap.xml`
- Browser console check on homepage: no JS errors.
- Visual QA screenshots saved:
  - `artifacts/screenshots/2026-06-19-northern-generator-redesign/home-desktop.png`
  - `artifacts/screenshots/2026-06-19-northern-generator-redesign/home-mobile.png`
  - `artifacts/screenshots/2026-06-19-northern-generator-redesign/contact-mobile.png`
  - `artifacts/screenshots/2026-06-19-northern-generator-redesign/home-desktop-v2.png`
  - `artifacts/screenshots/2026-06-19-northern-generator-redesign/home-mobile-v2.png`
  - `artifacts/screenshots/2026-06-19-northern-generator-redesign/contact-mobile-v2.png`
- Fixed QA issues found during review:
  - mobile floating contact control hides on the contact page
  - visible non-original label `Our offering` removed in favor of `See below for our offering`
  - removed visible `Support` tag from the floating contact control
  - removed `Contact Info`, `Address`, and `Hours` labels from the contact page

## Deployment setup
- GitHub Actions workflow: `.github/workflows/pages.yml`
- Static export config in `next.config.ts`
- Local preview command after build: `npm run start`
- Preview deployment target: `https://tertiuse.github.io/Northern-Generator-Pages/`

## Note on review model
- I ran independent fresh-context review passes to validate code and visible content.
- I could not explicitly pin those review passes to `gpt-5.5` from the tools exposed in this chat session, so the validation here is grounded in build output, source inspection, and isolated review passes rather than a guaranteed `gpt-5.5` model selection.

## Artifact paths
- Project root: `/home/tertiuserskine/github/Northern-Generator`
- QA screenshots: `/home/tertiuserskine/github/Northern-Generator/artifacts/screenshots/2026-06-19-northern-generator-redesign`
- This report: `/home/tertiuserskine/github/Northern-Generator/artifacts/reports/2026-06-19-redesign-report.md`
