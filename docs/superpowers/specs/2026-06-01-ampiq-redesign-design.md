# AmpIQ Website Redesign — Design Spec

Date: 2026-06-01
Status: Approved (design), pending implementation plan
Source: AmpIQ Website Redesign Brief (sections 1–11)

## Goal

Rebuild ampiq.tech as a production-ready redesign that ships on the first deploy. Priorities in order: drive discovery-call bookings (cal.com/zakwinnick/ampiq), establish AmpIQ as the independent single point of contact, reduce the visitor's fear of an expensive mistake, and educate without jargon.

## Locked decisions

1. **Typography:** Bricolage Grotesque (display), Hanken Grotesk (body), IBM Plex Mono (eyebrows, labels, data, numbers). All Google-Fonts-hosted. Space Grotesk is removed. Avoid Inter, Roboto, Arial, system defaults.
2. **Booking CTA:** cal.com/zakwinnick/ampiq opens in a new tab (`target="_blank" rel="noopener"`). No embedded widget.
3. **Lead capture:** No form. `info@ampiq.tech` mailto is the lower-commitment fallback.
4. **Scope this pass:** All three pages — home, Incentives, Tesla Supercharger for Business.
5. **CSS architecture:** Shared `assets/styles.css` as the single source of truth across all three pages; per-page `<head>` meta inline; shared `assets/main.js` for behavior. (Departs from the prior "inline everything per file" convention, accepted for cross-page consistency.)

## Architecture

Static HTML, no build step, GitHub Pages deploy (push to `main`). Relative asset paths.

Files:
- `index.html` — rebuilt single-scroll home
- `incentives.html` — three-layer-cake incentive explainer
- `tesla-supercharger-for-business.html` — neutral-advisor page (filename targets the search phrase)
- `assets/styles.css` — shared design system
- `assets/main.js` — shared behavior (copyright year, nav scroll state, mobile menu, scroll-reveal, JS-assembled email link)
- `sitemap.xml`, `robots.txt` — new
- `tools.html` and internal tool pages (`calculator.html`, `feeschedule.html`, `one-pager.html`, `proposal-generator.html`, `proposal-template.html`) — add `noindex`, exclude from sitemap, disallow in robots. They stay live, just unlisted.
- `CNAME` — untouched (`ampiq.tech`)

## Visual system — "engineered precision," dark-dominant

The defining shift: current site is light-dominant; redesign is **dark-dominant** on a deep navy base (`#070D1F`) so the gradient reads as a charged accent, not wallpaper. Blueprint / spec-sheet feel: fine hairline rules, subtle background grid with radial mask, faint grain, corner ticks, monospace measurement-style labels (`01 / ORCHESTRATOR`, `FIG. 02`).

- **Colors:** Pink `#ED4E93`, Purple `#A855F7`, Blue `#3B82F6`, Navy `#070D1F`. Gradient `linear-gradient(135deg, #ED4E93, #A855F7, #3B82F6)`.
- **Gradient usage (restrained):** logo lockup, primary CTA button, one charged hero detail, thin section-accent hairlines/numbers only. Never on every heading.
- **Type roles:** Bricolage Grotesque for h1/h2 (tight tracking); Hanken Grotesk for body and sub-headings; IBM Plex Mono for eyebrows, section labels, numeric callouts, data.
- **Motion:** one orchestrated staggered page-load reveal in the hero; subtle IntersectionObserver scroll-reveal (`.reveal` → `.visible`) elsewhere. Fast, purposeful.
- **Depth:** texture and layering (grain, fine grid, layered transparency, considered shadow), refined not busy.
- **Accessibility:** WCAG 2.1 AA. Verified contrast on gradient elements (white text on darker gradient stops, or solid color where needed), keyboard-navigable, alt text, semantic heading order.
- **Responsive:** mobile-first, breakpoints ~1024 / 768 / 480.

## Home page structure (single scroll)

1. **Nav** — gradient logo, anchor links, CTA button; transparent over hero, glassmorphic dark glass on scroll; mobile fullscreen menu with hamburger→X.
2. **Hero** — pain-and-outcome headline leading with the owner's situation (not a clever line); subhead names AmpIQ as the single independent partner who handles the whole project; primary CTA "Schedule a discovery call," secondary CTA "See how it works"; one charged gradient detail; mono eyebrow.
3. **Orchestrator centerpiece** (new) — producer metaphor: AmpIQ assembles the pieces (design, hardware, incentives, contractors, software, permitting) and runs point as the one accountable contact who stays through installation and optional ongoing management. Plain-language explanation of the juggling AmpIQ removes.
4. **What we handle** — the six service areas reframed as "complexity we carry," outcome-led headers. Keep the six-step process content (discovery, site assessment, system design, incentive capture, procurement and installation, handoff or ongoing management).
5. **The questions you're really asking** (new) — four fear→service Q&A blocks from brief §4b, used as written, plus closing line: "You should not have to guess your way through a six-figure decision. We give you the answers first."
6. **How incentives actually work** — three-layer-cake teaser, qualitative and caveated, links to `incentives.html`.
7. **Tesla Supercharger for Business** — teaser using the §4d angle, links to the Tesla page.
8. **Why AmpIQ** — independence, single point of contact, ownership-first, operational point of view. Hardware-agnostic / "right fit," never "unbiased or unaffiliated."
9. **Property types** — multifamily/HOA, hospitality, commercial real estate/retail/office/mixed-use, fleet, municipalities/public agencies, healthcare, education. Lightly refreshed.
10. **About** — "Founded by Zak Winnick, CEO of Rangeway, America's first hospitality-driven premium EV charging network." Brief, no elaboration on Rangeway.
11. **Final CTA** — single clear booking action.
12. **Footer** — Cloudflare-safe `info@ampiq.tech`, nav links, dynamic copyright year. No phone number anywhere.

## Supporting pages

**incentives.html** — full three-layer explainer. Concept: most owners see one rebate, but incentives stack in three layers (federal, state, utility), and capturing all three is the difference between a project that barely pencils out and one that largely pays for itself; AmpIQ assembles the full stack. Stacked visual of the three layers, how AmpIQ assembles them, CTA. Strictly qualitative — no dollar figures or percentages anywhere. Every claim caveated "based on current program availability." Indexed for SEO.

**tesla-supercharger-for-business.html** — neutral-advisor page optimized for the search phrase "Tesla Supercharger for Business." `<title>`, meta description, H1, and OG all target the phrase. Content: what Tesla's program is (owner buys and owns Superchargers, keeps charging revenue, Tesla handles the network), what Tesla leaves on the owner's plate (installation, permitting, utility work, incentive capture, optimistic ROI assumptions), AmpIQ's honest second opinion (is the site a fit, numbers without a sales agenda, coordinate what Tesla leaves if it is a fit, hardware-agnostic alternatives if it is not), CTA. Program terms kept qualitative and caveated; no specific figures or per-kWh fees.

## Voice and copy rules (enforced on every page)

- No em dashes anywhere. Oxford comma always. Complete sentences. Plain language over jargon.
- "We" framing; never imply team size or large staff.
- No markup percentages, margin figures, fee schedule numbers, or pricing on the public site.
- Incentive and Tesla-program claims stay qualitative and caveated; verified against current sources before launch.
- Rangeway appears only as the founder credential; never cross-reference Rangeway brand, strategy, or internal detail.
- No ChargePoint recommendation and no disparagement of ChargePoint.
- Never claim pure neutrality. Hardware-agnostic and "we recommend the right fit," yes. "Unbiased and unaffiliated," no.
- Embrace: "your charging infrastructure," "right-sized," "hardware-agnostic," "end-to-end," "we handle the complexity," "revenue-generating amenity," "single point of contact."
- Avoid: "one-size-fits-all," "cheap"/"budget" (use "cost-effective"/"right-sized"), vendor buzzwords, unsubstantiated superlatives.

## Technical requirements ("works first go")

- **Email:** assemble `mailto:info@ampiq.tech` in JS from parts so no literal email string sits in the served HTML, to dodge Cloudflare Email Address Obfuscation rewriting it to "[email protected]." Visible link text also assembled in JS. Provide a `<noscript>` fallback that still reaches the address without exposing a plain literal where practical.
- **Post-deploy verification (manual, by user):** click the live email link on each page and confirm it is not rewritten to "[email protected]."
- **Fonts:** `preconnect` to fonts.googleapis.com and fonts.gstatic.com; single Google Fonts request covering all three families; `display=swap`.
- **Logo/icon:** `assets/ampiq-logo.png` (wordmark) in nav and footer; `assets/ampiq-icon.png` as favicon and OG image. Verify loading on all three pages. Logo must read on the dark base.
- **SEO:** per-page `<title>`, meta description, Open Graph tags (title, description, type, url, image); semantic heading structure; `sitemap.xml` listing the three public pages; `robots.txt` allowing the site and disallowing the internal tool pages.
- **noindex tools:** add `<meta name="robots" content="noindex">` to `tools.html` and the internal tool pages.
- **Analytics:** keep the existing tinylytics embed (`https://tinylytics.app/embed/AM-qzx8NUo6Ey3s-_Zhz.js`) on all three pages.
- **Performance:** minimal blocking scripts, `defer` on JS, compressed assets, font `display=swap`.

## Out of repo (flagged, not silently skipped)

- **`ampiq.net → ampiq.tech` redirect** is DNS/registrar/Cloudflare configuration, not a repo file. User must set it.
- **Live incentive and Tesla program accuracy:** brief requires a current-sources check before launch. Mitigation: all copy stays qualitative and caveated so nothing is factually wrong regardless of program status. During the build, run a quick web check to confirm the three-layer (federal/state/utility) framing and the Tesla "owner buys and keeps revenue" framing are still broadly accurate as of today before committing copy. No specific figures on the site.

## Success criteria

- Three pages render correctly on first deploy, desktop and mobile.
- All CTAs reach cal.com/zakwinnick/ampiq in a new tab.
- Email link works and is not obfuscated to "[email protected]."
- Logo and icon load on every page.
- No em dashes, Oxford comma throughout, no neutrality overclaim, no pricing/margin numbers, no phone number, incentive claims caveated.
- Tesla page is structured to rank for "Tesla Supercharger for Business."
- Lighthouse-reasonable performance and AA contrast on gradient elements.
