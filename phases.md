# Project Phases

Every phase states a **deliverable** and a **verify** step. Do not start the next phase until the current verify passes.

Reference: https://airbnb-clone-umber-two.vercel.app — bot-protected, so all "compare to reference" checks run through Playwright or supplied screenshots, never `curl`/`fetch`.

---

## Phase 0 — Scaffold & agent config

**Deliverable**
- Single Next.js app at the repo root (TS strict, App Router).
- ESLint installed; Playwright installed for local visual verification.
- `.claude/agents/{pixel-auditor,a11y-motion-reviewer,token-guard}.md` committed.
- `src/app/api/listings/[id]/route.ts` serves a stub `GET /api/listings/:id`.

**Verify**
```bash
npm run dev                                  # app boots, no errors
curl -s localhost:3000/api/listings/1 | jq   # returns JSON
npm run typecheck && npm run lint            # clean
```

---

## Phase 1 — Tokens & data contract

**Blocked on:** user-supplied listing data + photos.

**Deliverable**
- `src/styles/tokens.css` — `@theme` block mirroring `DESIGN.md` colors, typography, `rounded`, `spacing`.
- `src/lib/types.ts` — `Listing`, `Photo`, `Review`, `Amenity`, `Host`.
- `src/data/listing.json` — real listing content conforming to `Listing`, read by the Route Handler.
- Photos in `public/photos/`, or `next.config` remote-pattern allowlist if hotlinked.
- Airbnb Cereal VF (or documented substitute per `DESIGN.md` §Font Substitutes) loaded in `layout.tsx`.

**Verify**
- Every `DESIGN.md` color/spacing/radius token resolves as a Tailwind utility on a scratch page.
- API response typechecks against `Listing` with no `any` and no optional-field escape hatches.
- Fonts render at the specified weights — check `display-lg` is 500, not a faux-bold fallback.

---

## Phase 2 — Static listing page shell

**Deliverable** — every section from `PRD.md` §3.1 in order, correct layout and spacing, real content, no interactivity yet: nav, hero grid, title row, summary, host row, rating card, highlights, description, amenities, calendar, reviews, map, host card, things-to-know, reservation card, footer.

**Verify**
- Playwright screenshot at 1440px next to the reference: section order and block positions match.
- Container width, gutters, and section rhythm match `DESIGN.md` §Layout.
- Page renders with JS disabled (it is all RSC at this point).

---

## Phase 3 — Typography & detail pass

**Deliverable** — exact font sizes, weights, letter-spacing, line-heights, hairline borders and dividers, icon glyphs, badges, the `rating-display-card` laurel SVGs, star and rating dots, shadow tier on `guest-favorite-badge`.

**Verify**
- Section-by-section screenshot diff against the reference at 1440px within agreed pixel tolerance.
- `token-guard` sub-agent reports zero raw hex/px literals outside `tokens.css`.
- Values in `DESIGN.md` §Known Gaps were **measured** from the reference, not guessed — each one gets a source comment.

---

## Phase 4 — Photo Tour + Lightbox

**Deliverable**
- URL-driven overlays: `?photos=1` opens Photo Tour, `?photos=1&i=N` opens Lightbox.
- Photo Tour: opens from "Show all photos" and every hero tile; grouped scroll layout; click opens Lightbox at that index.
- Lightbox: prev/next arrows, ←/→ keys, counter, dark scrim, ESC back to Photo Tour.
- Focus trap in both; focus restored to the invoking element on close; `role="dialog"` + `aria-modal`; background inert.
- Description / amenities / reviews "Show all" modals use the same modal primitive.

**Verify**
```bash
npx playwright test e2e/overlays.spec.ts
```
Keyboard-only script: Tab to "Show all photos" → Enter → Tab to a photo → Enter → `→` `→` `←` → ESC → ESC. Asserts focus lands back on "Show all photos" and the listing scroll position is unchanged. Browser Back closes exactly one layer.

---

## Phase 5 — Motion

**Deliverable** — hover transitions (cards, buttons, controls), overlay enter/exit, Lightbox photo transitions, sticky nav condense and sticky reservation rail on scroll. Durations and easing matched to the reference, not approximated.

**Verify**
- Side-by-side recordings of each interaction against the reference.
- With `prefers-reduced-motion: reduce` emulated, a Playwright snapshot shows no transform or opacity animation on any of the above.

---

## Phase 6 — Responsive + a11y hardening

**Deliverable** — the four breakpoints in `DESIGN.md` §Responsive Behavior: mobile (<744), tablet (744–1128), desktop (1128–1440), wide (>1440). Reservation card becomes a sticky bottom bar on mobile; nav collapses to hamburger; hero grid restacks.

**Verify**
- Screenshot diff at 375 / 744 / 1128 / 1440 against the reference.
- `axe` reports zero violations on all three views.
- Lighthouse accessibility ≥ 95 on all three views.
- `a11y-motion-reviewer` sub-agent review returns no high-severity findings.

---

## Phase 7 — Architecture diagram & submission

**Deliverable**
- Excalidraw export of `Architecture.md` §5 at `docs/architecture.excalidraw.png` (+ the `.excalidraw` source).
- `README.md`: what was built, run instructions, tech decisions, known deviations from the reference.
- Sub-agent and skill configs committed and referenced in the README.

**Verify**
- Fresh clone → `npm install` → `npm run dev` → all three views work, following only the README.
- `git status` clean; no `node_modules`, no `.env`, no scratch files committed.
