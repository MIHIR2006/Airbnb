# Zero-To-Ship

Starter template for AI-assisted coding projects. Drop into any new project to get a consistent structure and behavioral ruleset for AI coding agents (Claude Code, Cursor, etc.) — build and ship faster with fewer LLM coding mistakes.

## What's Inside

### Planning docs (fill in per project)
- **PRD.md** — What to build, targeted users, features.
- **Architecture.md** — App flow, folder/file structure, tech stack.
- **Design.md** — UI details.
- **Roadmap.md** — High-level timeline, MVP definition, future phases.
- **Plases.md** — Project phases.
- **AGENTS.md** — Tech stack & commands, code style, testing expectations, git workflow boundaries, common pitfalls, agent personas.
- **Context/memory.md** — Running project context/memory for the agent.

### Rules (behavioral guidelines for the AI agent)
- **claude.md** — Core behavioral guidelines: Think Before Coding, Simplicity First, Surgical Changes, Goal-Driven Execution. Sourced from [Karpathy's observations on LLM coding pitfalls](https://x.com/karpathy/status/2015883857489522876).
- **Rules/Rules.md** — What to do, what to avoid, library/error-handling boundaries (fill in per project).
- **Rules/EXAMPLES.md** — Concrete before/after code examples for each of the four principles above.
- **skills/SKILL.md** — Packages the Karpathy guidelines as an invokable skill (`alwaysApply: true`).

## The Four Principles

1. **Think Before Coding** — state assumptions, surface tradeoffs, ask when unclear.
2. **Simplicity First** — minimum code that solves the problem, nothing speculative.
3. **Surgical Changes** — touch only what's needed, match existing style, clean up only your own mess.
4. **Goal-Driven Execution** — define verifiable success criteria, loop until met.

See `Rules/EXAMPLES.md` for real code showing what LLMs commonly get wrong and how to fix it.

## Usage

1. Copy this template into a new project.
2. Fill in `PRD.md`, `Architecture.md`, `Design.md`, `Roadmap.md`, `Plases.md`, `AGENTS.md`, `Rules/Rules.md` with project-specific details.
3. Keep `claude.md` / `skills/SKILL.md` as-is (or extend) — these govern agent behavior across the project.
4. Point your AI coding agent at this repo root so it picks up the rules automatically.
