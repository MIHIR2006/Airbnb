# PRD — Airbnb Listing Page Clone

## 1. Goal

Reproduce the reference listing page **exactly** — visually and behaviorally.

**Reference (single source of truth):** https://airbnb-clone-umber-two.vercel.app

Three views ship:

| View | Entry point | What it is |
|---|---|---|
| **Listing Page** | `/` | Full property page |
| **Photo Tour** | "Show all photos" button, or any hero image | Full-screen photo gallery |
| **Lightbox** | Any photo inside Photo Tour | Single-photo viewer, prev/next + ←/→ keys |

Success is *parity*, not interpretation. Where the reference and this document disagree, the reference wins.

---

## 2. Target users

**Primary — the evaluator.** Scores visual fidelity, behavioral parity (animation, transition, accessibility), production architecture thinking, and modern AI workflow usage (agents, sub-agents, skills, prompts). Optimizes for a clean complete implementation over an over-engineered incomplete one.

**Secondary — a guest browsing a listing.** Skims photos, checks rating and amenities, reads reviews, picks dates, reserves. Never blocked by keyboard-only navigation or a screen reader.

---

## 3. Scope

### 3.1 Listing Page

Top to bottom:

- **Top nav** — Airbnb logo (Rausch `#ff385c`), three product tabs (Homes / Experiences / Services) with hand-illustrated glyphs and NEW badges, pill search bar (`rounded.full`) with the 48×48 Rausch search orb, host/globe/profile menu on the right.
- **Hero photo grid** — 1 large photo left + 4 tiles right (2×2), rounded outer corners only, `Show all photos` secondary button bottom-right. Every tile opens Photo Tour.
- **Title row** — listing title in `display-lg` (22px / 500 / -0.44px), share + save actions right-aligned.
- **Property summary** — property type, location, guests / bedrooms / beds / baths line.
- **Host row** — avatar, "Hosted by X", Superhost badge, host tenure.
- **`rating-display-card`** — 64px/700 rating flanked by laurel SVGs, "Guest favorite" tagline, stat columns.
- **Highlights** — icon + label + supporting line rows.
- **Description** — truncated body copy with **Show more** opening a modal.
- **Amenities** — `amenity-row` list (icon + label, 12px row padding, hairline top/bottom), **Show all N amenities** opening a modal.
- **Calendar** — 2-month date picker, 40×40 circular day cells, ink fill on selection, `surface-soft` lozenge across the range.
- **Reviews** — rating summary, category bars, 2-column `reviews-card` grid with **Show more** per excerpt, **Show all N reviews** modal.
- **Map** — location section with map surface and area description.
- **Host card** — `host-card` with response-rate stats and **Contact host**.
- **Things to know** — 3 columns (House rules / Safety & property / Cancellation policy).
- **Reservation card** — sticky right rail; nightly price, date range, guest stepper, full-width **Reserve** CTA, fee breakdown.
- **Footer** — `footer-light` 3 link columns + `legal-band` (copyright, language, currency, social icons).

### 3.2 Photo Tour

- Full-screen overlay over the listing page. Opens from **Show all photos** or any hero tile.
- Header: back/close control, share, save. Scroll-based photo layout grouped by room/section.
- Clicking any photo opens the Lightbox at that index.
- ESC closes and returns to the listing page at the prior scroll position.

### 3.3 Lightbox

- Single photo centered on a dark scrim, prev/next arrow controls, photo counter (`n / total`).
- Keyboard: **←** previous, **→** next, **ESC** close (back to Photo Tour, not to the listing).
- Arrows disabled/hidden appropriately at the first and last photo — match the reference exactly.

---

## 4. Behavioral parity

- **Hover** — card lifts, button fills, control opacity shifts. Match duration and easing, not just the end state.
- **Scroll** — top nav condense behavior, sticky reservation rail, section anchor bar.
- **Overlay motion** — Photo Tour and Lightbox enter/exit transitions match the reference's direction, duration, and easing.
- **Overlay state lives in the URL** (`?photos=1&i=3`) so deep links and browser Back behave correctly.
- **`prefers-reduced-motion: reduce`** — all non-essential transform/opacity animation drops to instant.

---

## 5. Accessibility

- Focus **trapped** inside Photo Tour and Lightbox while open; **restored** to the invoking element on close.
- ESC closes the topmost overlay only.
- Every interactive element reachable and operable by keyboard; visible focus ring on all of them.
- Semantic landmarks (`header` / `main` / `footer` / `nav`), one `h1`, correct heading order.
- Real `alt` text on every photo; Lightbox announces the photo index via a live region.
- Modals use `role="dialog"` + `aria-modal="true"` + labelled title; background content inert.
- Touch targets per `DESIGN.md`: primary CTAs ≥ 48×48, day cells 40×40.

---

## 6. Non-goals

No auth. No real booking or payments. No search results page, map interactivity beyond the reference, host dashboard, messaging, i18n/currency switching, or live Airbnb API. One listing only.

---

## 7. Acceptance criteria

1. All three views render and are fully operable **keyboard-only**.
2. Side-by-side comparison against the reference at **1440 / 1128 / 744 / 375px** shows no visible layout, spacing, type, or color difference.
3. Every color, size, radius, and spacing value traces to a token in `DESIGN.md` — **no raw hex or px literals in components**.
4. Overlay open/close/navigate motion matches the reference's duration and easing.
5. `prefers-reduced-motion` honored across every animation.
6. axe reports zero violations; Lighthouse accessibility ≥ 95 on all three views.
7. Listing data served over HTTP by a real Node.js server endpoint (a Next.js Route Handler) — not imported as a static module by the page.
8. Production-scale architecture diagram submitted (see `Architecture.md`).
9. Sub-agent configs committed under `.claude/agents/`.

---

## 8. Known dependencies & blockers

- **Listing content and photos are supplied by the user.** Blocks Phase 1 (`phases.md`); Phase 0 can proceed without them.
- **The reference is behind Vercel bot protection.** `curl` returns a *Vercel Security Checkpoint* page and WebFetch returns HTTP 429. Fidelity verification requires a real browser — Playwright, a browser MCP, or user-supplied screenshots. Plain HTTP fetching of the reference will not work.
- `DESIGN.md` §Known Gaps lists values not captured from Airbnb (hover colors, loading states, map styling, form error states). Measure those from the reference during Phase 3 rather than guessing.
