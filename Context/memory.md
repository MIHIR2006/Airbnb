# Project Memory

Durable facts about this project. Update when a decision changes.

## What this is

Take-home task: pixel-perfect clone of an Airbnb listing page plus two overlay views (Photo Tour, Lightbox), with a production-scale architecture diagram and committed sub-agent configs.

Reference and single source of truth: https://airbnb-clone-umber-two.vercel.app

## Locked decisions

| Decision | Choice |
|---|---|
| Backend | Next.js Route Handler (`src/app/api/listings/[id]/route.ts`), same app as the page. Real HTTP boundary, one deployable. |
| Styling | Tailwind v4 `@theme` tokens generated from `DESIGN.md` |
| Listing data + photos | Real listing content extracted from user-supplied screenshots (a live "Romantic Jacuzzi 1BHK Candolim" listing); photos are locally generated placeholder SVGs pending real image files |
| Repo | Single flat Next.js app at the repo root — no monorepo, no workspaces |
| Overlay state | URL query params (`?photos=1&i=3`), not React context |
| Modals/overlays | Built on Radix Dialog (`@radix-ui/react-dialog`) |

**2026-08-26 — dropped the separate Express service, flattened to one app.** Submission requires a live link and time is short; a second service means a second host and `API_URL` wiring across two deploys. Moved the one route into a Next.js Route Handler and flattened `Frontend/` up to the repo root so Vercel's zero-config import just works (no "Root Directory" setting). Still real Node.js server code with a real HTTP boundary — only the deploy topology changed, not the frontend's data-fetching pattern. See `Architecture.md` §1 "Why one app, not a separate Express service."

## Constraints that bite

- **`DESIGN.md` is the token source of truth and is read-only.** It holds colors, a 16-step type scale, `rounded`/`spacing` scales, ~30 component specs, the responsive table, and a Known Gaps list. Never rewrite it.
- **The reference is behind Vercel bot protection.** `curl` and WebFetch return a "Vercel Security Checkpoint" page / HTTP 429. Any fidelity check needs a real browser: Playwright, a browser MCP, or user screenshots.
- `DESIGN.md` §Known Gaps lists values Airbnb extraction missed — hover colors, loading states, map styling, form error states. Measure them from the reference; do not invent them.

## Planning docs

`PRD.md` (what + acceptance criteria) · `phases.md` (0–7, each with a verify step) · `Architecture.md` (stack, flow, folder tree, production diagram) · `Roadmap.md` (MVP = Phases 0–4) · `Rules/Rules.md` (do/avoid/library boundaries) · `AGENTS.md` (commands, style, pitfalls) · `claude.md` (behavioral guidelines, auto-loaded) · `skills/SKILL.md` (same guidelines packaged as an invokable skill) · `.claude/agents/` (pixel-auditor, a11y-motion-reviewer, token-guard).
