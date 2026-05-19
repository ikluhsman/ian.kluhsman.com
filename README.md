# ian.kluhsman.com

Personal promotional site for Ian Kluhsman — independent technical services (web, mobile, IT consulting), Denver area.

Stack: **Nuxt 4** · **Nuxt UI v4** · **Tailwind v4** · **Pinia** · **GSAP**. Deployed statically to **Netlify**.

See [`roadmap.md`](./roadmap.md) for milestones and the SEO/polish backlog.

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm typecheck
pnpm generate     # static build → dist/
pnpm preview
```

## Architecture notes

- `app/pages/index.vue` — landing (hero, services, portfolio, process, contact CTA)
- `app/pages/about.vue` — resume/about
- `app/components/IKLogo.vue` — IK monogram, GSAP stroke-draw + pulse
- `app/stores/accent.ts` + `app/composables/useAccent.ts` + `app/plugins/route-accent.client.ts` — palette cycling on route change via `--accent-color` CSS variable, GSAP-tweened. Only headings + select UI consume the variable; Nuxt UI internals stay stable.
- `app/assets/css/main.css` — subtle dot+grid techy background, accent utility classes, page transitions.

## Deploy

Netlify auto-builds from main. See [`netlify.toml`](./netlify.toml) and [`roadmap.md`](./roadmap.md#02--deploy).
