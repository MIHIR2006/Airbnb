# AGENTS.md

Airbnb listing-page clone. Next.js frontend + Express API, npm workspaces.
Read `PRD.md` for what to build, `phases.md` for order, `Rules/Rules.md` for boundaries, `DESIGN.md` for every design value.

## Commands

| Task | Command |
|---|---|
| Dev (both apps) | `npm run dev` — web :3000, api :4000 |
| Typecheck | `npm run typecheck` |
| Lint | `npm run lint` |
| Unit tests | `npm run test` |
| E2E / a11y / visual | `npx playwright test` |
| Build | `npm run build` |

## Code style

- TypeScript strict. No `any`, no `!`, no `@ts-ignore`.
- Components: `PascalCase.tsx`, one component per file, colocated with its section.
- Hooks: `useThing.ts` in the folder of the component that uses it. Promote to `lib/` only on the second consumer.
- RSC by default; `"use client"` only for state, effects, or event handlers.
- Styling via Tailwind token utilities. No raw hex or px in components — see `Architecture.md` §4.
- Component folders: `listing/` (page sections), `gallery/` (overlays), `ui/` (primitives). Nothing else without a reason.

## Testing expectations

- Overlay behavior (Photo Tour, Lightbox) is covered by Playwright keyboard-only specs — focus trap, focus restore, ESC layering, Back behavior.
- Visual fidelity is verified by screenshot comparison at 375 / 744 / 1128 / 1440.
- a11y gate: axe zero violations, Lighthouse ≥ 95, on all three views.
- Unit tests only where logic exists (date range, price breakdown). Do not unit-test markup.
- **Never claim a phase is done without pasting the output of its verify command.**

## Git workflow & boundaries

- Never commit `node_modules`, `.env`, `.next`, Playwright artifacts, scratch files.
- **Never edit:** `DESIGN.md`.
- Commits and PR bodies in normal English.

## Common pitfalls

- **The reference is bot-protected.** `curl` and `fetch` return a Vercel Security Checkpoint page (HTTP 429). Inspect it through a browser or Playwright only.
- Font fallback silently fakes weights — verify `display-lg` renders at 500, not faux-bold.
- Overlay state in React context breaks Back and deep links. Keep it in the URL.
- Rebuilding an existing token in a component instead of using the one in `DESIGN.md`.
- "Improving" adjacent code while making a fidelity fix. Surgical changes only.

## Sub-agents

Configs in `.claude/agents/`:

- **`pixel-auditor`** — read-only visual fidelity diff against the reference. Reports differences with measured vs expected values. Never fixes.
- **`a11y-motion-reviewer`** — focus order, trap/restore, ARIA, keyboard paths, reduced-motion. Severity-tagged findings.
- **`token-guard`** — finds raw hex/px/font literals outside `tokens.css` and maps each to its `DESIGN.md` token.
