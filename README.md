# Northern Generator website preview

A static-export Next.js redesign for Northern Generator with all referenced site assets served locally and deployed through GitHub Pages.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

## Notes

- `npm run start` serves the static `out/` export locally on port 3000 after a build.
- `next.config.ts` only applies the `/Northern-Generator` base path during GitHub Actions builds so local development stays simple.
- The contact form uses a mailto handoff so the preview remains fully static.
