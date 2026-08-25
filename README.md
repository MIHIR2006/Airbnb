# Airbnb Clone

Listing detail page clone built with Next.js 16, React 19, and Tailwind CSS 4. Includes photo gallery/lightbox, photo tour overlay, booking calendar and rail, reviews, amenities, host profile, and nearby listings sections.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/) (Dialog)
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## Project Structure

```
src/
  app/              # App Router pages and API routes
  components/
    listing/        # Listing page sections (header, gallery, booking, reviews, etc.)
    gallery/         # Lightbox and photo tour overlay
    ui/              # Shared UI primitives
  lib/               # Data fetching, types, hooks
  data/              # Listing data
```

## Architecture

**Current implementation** — how this repo runs today.

![Current Implementation](./CURRENT%20IMPLEMENTATION.png)

**Production-scale target** — same Next.js core, scaled with a real database, cache, CDN, and search index.

![Production-Scale Target](./PRODUCTION-SCALE%20TARGET.png)

## Links

- GitHub: [Mihir2006](https://github.com/MIHIR2006)
- LinkedIn: [Mihir-Goswami](https://www.linkedin.com/in/mihir-goswami)
- Portfolio: [Mihir Portfolio](https://mihirgoswami.is-a.dev)
