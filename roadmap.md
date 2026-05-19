# ian.kluhsman.com — Roadmap

A simple promotional site for independent technical services. Conservative scope on purpose: the goal is "a page I can put on a business card," not a sales funnel.

---

## 0.1 — Initial Build (in progress)

- [x] Init Nuxt 4 + Nuxt UI v4 + Tailwind v4
- [x] Pinia + VueUse + GSAP installed and wired
- [x] App shell: `SiteHeader` (logo, nav, color mode, GitHub) + `SiteFooter` (socials)
- [x] Subtle techy textured background (dot mesh + grid) layered for light/dark
- [x] `--accent-color` CSS variable, animated on route change via Pinia store + GSAP
- [x] Tech palette (sky · cyan · teal · emerald · indigo · violet), light + dark pairs
- [x] IK monogram logo SVG with GSAP stroke-draw + pulsing circuit node
- [x] Favicon (SVG)
- [x] Landing page: hero · services · portfolio · process · contact CTA
- [x] About page: hero · skills · experience timeline · selected projects · education · interests · references-on-request
- [x] SEO meta + JSON-LD Person schema, Denver-area copy throughout
- [x] OG image (PNG 1200×630) generated from logo
- [x] `.vscode/launch.json` + `settings.json` for Chrome debugger workflow
- [x] `netlify.toml` with `dist/` publish + cache headers
- [x] Typecheck passes
- [ ] Manual visual QA in browser (light + dark + each route)
- [ ] First commit + push

## 0.2 — Deploy

- [ ] Create Netlify site, point at GitHub repo
- [ ] Configure DNS at Cloudflare: `ian.kluhsman.com` → Netlify
- [ ] Verify HTTPS, OG image preview (debugger.facebook.com / cards-dev.twitter.com)
- [ ] Verify Lighthouse score (target ≥ 95 on Performance, A11y, Best Practices, SEO)

## 0.3 — SEO Optimization Pass

A focused pass after first deploy. Goal: when someone searches "Ian Kluhsman Denver developer" or similar, the right page surfaces.

- [ ] Submit sitemap to Google Search Console + Bing Webmaster Tools
- [ ] Verify domain ownership in GSC
- [ ] `robots.txt` (allow all, sitemap pointer)
- [ ] `sitemap.xml` (Nuxt SEO module or hand-rolled — two routes only)
- [ ] Confirm Denver / Aurora / Colorado keywords appear in: title, h1, first paragraph, JSON-LD address, meta description, og:description
- [ ] Replace SVG OG image with a properly designed PNG (currently rasterized from SVG — fine but could be sharper). Render at 2x density, embed Inter/Outfit fonts as outlined paths.
- [ ] Add `<meta name="geo.region" content="US-CO">` and `<meta name="geo.placename" content="Aurora, Colorado">`
- [ ] Add `LocalBusiness` JSON-LD schema (alongside Person) with service area
- [ ] Add canonical tags per route (already wired via `useHead`)
- [ ] Verify all images have alt text
- [ ] Run `pnpm dlx @lhci/cli@latest autorun` for baseline Lighthouse + a11y audit
- [ ] Open Graph + Twitter card validation across major platforms

## 0.4 — Polish

- [ ] GSAP scroll-triggered fade-in for sections (free ScrollTrigger plugin)
- [ ] Subtle parallax on the logo glow during hero scroll
- [ ] Logo morph: cycle the central circuit node between dot / plus / diamond on a slow loop (requires same-point-count paths; GSAP MorphSVGPlugin is premium, so implement with attr-tween on hand-matched paths)
- [ ] Print stylesheet for `/about` (so the page reads cleanly when printed for an interview)
- [ ] Add a tiny "now" line in the footer ("currently shipping h2oflows v0.3.x")
- [ ] Consider adding a `/contact` page with a real form (Netlify Forms) if the mailto link proves friction

## 0.5 — Optional later

- [ ] Add a `/projects` page with deeper case studies for fsbackup and h2oflows (only if traffic justifies it)
- [ ] Resume PDF download link
- [ ] Astrophotography micro-gallery section on About (re-using imgix domain from ian.tech)
- [ ] Migrate ian.tech archived blog posts here, or set up a separate `notes.ian.kluhsman.com` subdomain. Defer — this site stays promo-only by design.

## Out of scope (intentionally)

- Blog. Use a separate property if needed.
- Pricing pages. Mental-space billing handled by conversation, not a SKU table.
- Lead capture forms / newsletter signups.
- Aggressive analytics. Maybe a single privacy-respecting counter (Plausible) at 0.4.

---

## Notes

- **Color cycle pattern** intentionally mirrors ian.tech: `--accent-color` CSS variable tweened via GSAP on `router.afterEach`. Only headings and select UI consume the variable; body text, backgrounds, and Nuxt UI internals stay stable.
- **Logo "draw"** uses stroke-dashoffset (free) rather than GSAP DrawSVG (premium). Same visual effect.
- **Path morph** for the future logo state cycle will use GSAP's `attr` tween on hand-matched 4-point paths, not MorphSVG (premium).
