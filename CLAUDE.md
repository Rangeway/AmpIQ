# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AmpIQ (ampiq.tech) is the marketing website for an independent, hardware-agnostic EV charging consulting firm. AmpIQ positions itself as the orchestrator who plans, coordinates, and oversees a property owner's charging project from first question to live chargers. No build tools, no frameworks, no dependencies — static HTML, one shared stylesheet, one shared script.

## Development

```bash
npx serve .
# or
python3 -m http.server 8000
```

No build step. No `npm install`. Just serve the directory and open in a browser.

## Deployment

GitHub Pages, push to `main`. Custom domain mapped via `CNAME` file (`ampiq.tech`). Do not modify or delete the CNAME file. The `ampiq.net → ampiq.tech` redirect is DNS/registrar/Cloudflare config, not a repo file.

## Architecture

Three public pages share one design system via external CSS and JS (the single source of truth — do not re-inline per page):

- `index.html` — single-scroll home: hero, orchestrator centerpiece, what-we-handle services, "the questions you're really asking", incentives teaser, Tesla teaser, why AmpIQ, property types, about, final CTA, footer.
- `incentives.html` — the three-layer-cake incentive explainer (federal, state, utility).
- `tesla-supercharger-for-business.html` — neutral-advisor page, SEO-targeted at "Tesla Supercharger for Business".
- `assets/styles.css` — the entire design system.
- `assets/main.js` — copyright year, nav glass-on-scroll, mobile fullscreen menu, scroll-reveal, and JS-assembled email link.
- `sitemap.xml` / `robots.txt` — three public pages listed; internal tool pages disallowed.
- Internal tools (`tools.html`, `calculator.html`, `feeschedule.html`, `one-pager.html`, `proposal-generator.html`, `proposal-template.html`) are self-contained, `noindex`, and excluded from the sitemap. They are NOT part of the public site and do not use the shared design system.

## Design System ("engineered precision")

Dark-dominant, blueprint/spec-sheet aesthetic. Depth comes from precision and layering, not decoration.

- **Colors**: Pink `#ED4E93`, Purple `#A855F7`, Blue `#3B82F6`, base Navy `#070D1F`. Tokens in `:root` (`--pink`, `--purple`, `--blue`, `--navy`, surfaces, lines, ink).
- **Gradient**: `linear-gradient(135deg, var(--pink), var(--purple), var(--blue))` as a RESTRAINED signature accent only — logo, primary CTA, one hero phrase, layer numbers, and card corner ticks. Never spread across every heading.
- **Typography**: Bricolage Grotesque (display, `--font-display`), Hanken Grotesk (body, `--font-body`), IBM Plex Mono (`--font-mono`) for eyebrows, measurement-style labels, and numeric callouts. All via Google Fonts. Do NOT reintroduce Space Grotesk, Montserrat, Outfit, Inter, or Roboto.
- **Background**: fixed fine grid with radial mask + faint SVG grain, plus per-section `.glow` color washes.
- **Responsive**: breakpoints at 980px and 620px.

## Key Patterns

- The `.label` mono device (`01 / SECTION NAME`) anchors each section.
- Cards (`.card`) get a gradient corner-tick on hover; hairline `1px` rules separate sections (`.section + .section`).
- Nav: white text, transparent over hero, glassmorphic dark glass when scrolled (`.nav.scrolled`).
- Mobile: fullscreen `.mobile-menu` overlay with hamburger→X.
- Scroll reveal: `.reveal` → `.visible`, driven by a position-based scroll check in `main.js` (NOT IntersectionObserver — that skipped sections on fast scroll and anchor jumps). No-JS users see everything (`.js .reveal` only hides when JS is present).
- Hero page-load stagger is pure CSS (`.load > *`), so it works without JS.
- All CTAs link to `https://cal.com/zakwinnick/ampiq` in a new tab.
- **Email**: rendered via `data-user`/`data-domain` attributes assembled in `main.js`, so no literal address sits in the served HTML. This deliberately dodges Cloudflare Email Address Obfuscation rewriting it to "[email protected]". Verify the live email link after any deploy.

## Brand Voice (enforced in all copy)

No em dashes. Oxford comma always. Complete sentences, plain language. "We" framing without implying staff size. Hardware-agnostic / "right fit" — never claim "unbiased" or "unaffiliated". No pricing, markup, or margin numbers. Incentive and Tesla-program claims stay qualitative and caveated ("based on current program availability"), and the federal incentive layer is time-sensitive (verify against current sources before launch). Rangeway appears only as the founder credential. No ChargePoint recommendation or disparagement. Phone number is never public; public email is info@ampiq.tech.

## Assets

- `assets/ampiq-logo.png` — full wordmark (nav, footer)
- `assets/ampiq-icon.png` — icon/mark only (favicon, OG image, about section)

## Spec

Redesign design spec lives at `docs/superpowers/specs/2026-06-01-ampiq-redesign-design.md`.
