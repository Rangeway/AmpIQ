# AmpIQ Home Page — Imagery and Copy Refresh

Date: 2026-06-02
Status: Approved (design), photos pending approval

## Problem

`index.html` reads as a single long scroll of type-on-navy. Every section sits in
the same visual register (text plus abstract CSS geometry), and several sections
carry dense paragraphs. The page feels like a wall of text.

## Goal

Break up the page with restrained photography and tighter copy, without diluting
the "engineered precision" design system. Depth still comes from precision and
layering, not decoration.

## Decisions

- **Treatment:** Mixed. Full-color photography where a real photo illustrates
  something; treated/duotone imagery (brand gradient over navy, via CSS) for
  atmospheric breaks. No founder photo.
- **Copy:** Tighten the densest paragraphs. Same meaning, fewer words. Brand
  voice unchanged (no em dashes, Oxford comma, "we" framing, hardware-agnostic,
  no pricing, incentive/Tesla claims stay qualitative and caveated).
- **Sourcing:** Photos from Unsplash, downloaded, resized per slot, compressed to
  WebP, committed to `assets/`. No CDN dependency, no build step.
- **Photo selection:** Proposed to the owner with direct links and rationale;
  approved (or swapped) before anything is committed.

## Image placement (6 photos)

Full-color (4) — a real photo earns its place:

1. **Property types** — photo header on each of the 3 cards (residential/
   hospitality, commercial, public/fleet), above the existing label/heading/copy.
2. **Tesla teaser** — one Supercharger-row photo as the right column; the
   "What Tesla leaves to you" checklist sits in a glass panel beneath it.

Treated/duotone (2) — atmospheric, to break text:

3. **Hero** — second column: duotone image (charging hardware or EV-at-dusk
   architecture), corner-tick and mono caption. Hero goes one-column → two-column
   on desktop, stacks on mobile.
4. **"The questions you're really asking"** — subtle full-bleed duotone background
   behind the Q&A so it reads as its own chapter.

Deliberately left image-free: orchestrator (assembly grid), what-we-handle
(cards), incentives (layer stack), why-AmpIQ (cards), about, final CTA.

## Treatment implementation

New reusable classes in `assets/styles.css`: `.media`, `.media-frame`,
`.media-duotone`. Duotone = desaturated image + brand gradient via blend mode +
navy tint for legibility. Full-color frames reuse the hairline border and
gradient corner-tick already in the system. Respect `prefers-reduced-motion`.

## Copy tightening scope

Hero lead, both orchestrator paragraphs, incentives teaser, Tesla teaser, and the
four Q&A answers.

## Technical notes

- `alt` text on every image; `loading="lazy"` on below-the-fold images.
- Hero second column must not break the pure-CSS `.load` stagger or no-JS layout.
- Verify responsive behavior at the 980px and 620px breakpoints.
- Verify the live email link still assembles after deploy (per CLAUDE.md).

## Implementation checklist

1. Approve specific Unsplash photos (owner gate).
2. Download, resize, compress to WebP, commit to `assets/`.
3. Add `.media*` classes to `assets/styles.css`.
4. Restructure hero to two columns; add duotone image.
5. Add duotone background to the questions section.
6. Add photo headers to the three property-type cards.
7. Add Supercharger photo + glass checklist panel to the Tesla teaser.
8. Tighten the copy in scope.
9. Verify responsive + no-JS + reduced-motion locally before committing.
