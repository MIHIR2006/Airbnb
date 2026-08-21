# Project Memory

Durable facts about this project. Update when a decision changes.

## What this is

Take-home task: pixel-perfect clone of an Airbnb listing page plus two overlay views (Photo Tour, Lightbox), with a production-scale architecture diagram and committed sub-agent configs.

Reference and single source of truth: https://airbnb-clone-umber-two.vercel.app

## Locked decisions

| Decision | Choice |
|---|---|
| Backend | Separate Express + TypeScript service in `apps/api`; Next.js consumes it over HTTP. Not route handlers, not a static import. |
| Styling | Tailwind v4 `@theme` tokens generated from `DESIGN.md` |
| Listing data + photos | **Supplied by the user** — blocks Phase 1, not Phase 0 |
| Repo | npm workspaces: `apps/web`, `apps/api` |
| Overlay state | URL query params (`?photos=1&i=3`), not React context |

## Constraints that bite

- **`DESIGN.md` is the token source of truth and is read-only.** It holds colors, a 16-step type scale, `rounded`/`spacing` scales, ~30 component specs, the responsive table, and a Known Gaps list. Never rewrite it.
- **The reference is behind Vercel bot protection.** `curl` and WebFetch return a "Vercel Security Checkpoint" page / HTTP 429. Any fidelity check needs a real browser: Playwright, a browser MCP, or user screenshots.
- `DESIGN.md` §Known Gaps lists values Airbnb extraction missed — hover colors, loading states, map styling, form error states. Measure them from the reference; do not invent them.

## Planning docs

`PRD.md` (what + acceptance criteria) · `phases.md` (0–7, each with a verify step) · `Architecture.md` (stack, flow, folder tree, production diagram) · `Roadmap.md` (MVP = Phases 0–4) · `Rules/Rules.md` (do/avoid/library boundaries) · `AGENTS.md` (commands, style, pitfalls) · `claude.md` (behavioral guidelines, auto-loaded) · `skills/SKILL.md` (same guidelines packaged as an invokable skill) · `.claude/agents/` (pixel-auditor, a11y-motion-reviewer, token-guard).
