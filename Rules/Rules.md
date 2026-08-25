# Project Rules

Extends `claude.md` (Think Before Coding / Simplicity First / Surgical Changes / Goal-Driven Execution) with rules specific to this clone.

## Do

- **Read `DESIGN.md` before writing any styling.** It holds the full token system — colors, 16-step type scale, `rounded`, `spacing`, and ~30 component specs.
- **Use token utilities**: `bg-primary`, `text-muted`, `rounded-md`, `p-lg`.
- **Measure, don't guess.** If a value is not in `DESIGN.md`, read it off the reference in the browser and add it to `tokens.css` with a comment naming where it came from.
- **RSC by default.** Add `"use client"` only when the component needs state, effects, or event handlers.
- **Keep overlay state in the URL** (`?photos=1&i=3`) — never in a context provider.
- **Verify before claiming done.** Every phase in `phases.md` has a runnable check; run it and paste the output.

## Avoid

- Raw hex or px literals in components — they belong in `tokens.css`.
- Editing `DESIGN.md`. Read-only.
- `any`, non-null `!`, and `@ts-ignore`. TypeScript is strict.
- Adding a dependency without asking first.
- `curl`/`fetch` against the reference URL — it is behind Vercel bot protection and returns a security-checkpoint page. Use a browser.
- Speculative abstraction: no `utils/` barrel, no config layer, no generic `<Section>` wrapper for one-off sections.

## Library boundaries

**Approved:** Next.js · React · TypeScript · Tailwind v4 · Radix (`@radix-ui/react-dialog`) · Playwright.

**Ask first:** everything else. Specifically —

- **Icons:** hand-roll SVG to match Airbnb's illustrated 32-glyph set. No `lucide`, no `react-icons` — the shapes are wrong.
- **Modals/overlays:** built on Radix Dialog (`components/ui/Modal.tsx`, `PhotoTourOverlay`, `Lightbox`) — gives focus trap, ESC handling, and `aria-modal` for free. Don't hand-roll a second modal primitive.
- **Date picker:** hand-rolled to match `date-picker-day` / `date-picker-day-selected` in `DESIGN.md`. Library pickers cannot hit the lozenge range styling without heavy overrides.
- **State:** URL (overlay state) + local component state. No Redux, Zustand, or Jotai.

## Error handling boundary

- API `404` → not-found UI. API `500`/network failure → a simple error state. That is the full set.
- Do **not** write handling for impossible states: missing token values, empty photo arrays, malformed seed data. The data is a fixture the repo controls — if it is wrong, fix the fixture.
- The Route Handler (`src/app/api/listings/[id]/route.ts`) returns 404 for an unknown id and nothing else. No per-route try/catch scaffolding.

## Git

- Never commit `node_modules`, `.env`, `.next`, Playwright artifacts, or scratch files.
- Never touch: `DESIGN.md`.
- Commits and PR bodies are written in normal English, not compressed.
