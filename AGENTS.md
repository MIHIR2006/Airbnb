# AGENTS.md

Airbnb listing-page clone. Single Next.js app (page + API Route Handler), deployed as one Vercel project.
Read `PRD.md` for what to build, `phases.md` for order, `Rules/Rules.md` for boundaries, `DESIGN.md` for every design value.

## Commands

| Task | Command |
|---|---|
| Dev | `npm run dev` — :3000 |
| Typecheck | `npm run typecheck` |
| Lint | `npm run lint` |
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

- Overlay behavior (Photo Tour, Lightbox) is covered by Playwright keyboard-only specs — focus trap, focus restore, ESC layering.
- Visual fidelity is verified by screenshot comparison at 375 / 744 / 1128 / 1440.
- a11y gate: axe zero violations, Lighthouse ≥ 95, on all three views.
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

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
