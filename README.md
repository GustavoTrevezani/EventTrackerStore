# 🚲 BikeStore — Event Tracker Catalog

A single-page bicycle catalog built to demonstrate **real-time event tracking** in a modern web application. Every user interaction — clicking a bike, applying a filter, opening a modal — is captured and displayed live through a built-in event tracker panel.

This project was built as a portfolio piece to showcase how product analytics and user behavior tracking work in practice, using a bicycle store as the interface.

---

## Event Tracking

The core feature of this project is the **Event Tracker**, accessible via the button in the top-right corner of the navbar.

Every interaction the user makes is captured as an event:

| Event type | Triggered when |
|---|---|
| `click` | User clicks on a bike card or "View details" button |
| `filter` | User applies a category filter (electric, regular) |
| `view` | A bike detail modal is opened |
| `page_load` | The page is first loaded |

The tracker panel shows:
- Total event count (live counter on the navbar button)
- Summary metrics: total clicks, filters applied, time on page
- A scrollable feed of the last events with timestamps

---

## Tech stack

| Technology | Version | Role |
|---|---|---|
| [Next.js](https://nextjs.org) | 16 | React framework, routing, SSR |
| [React](https://react.dev) | 19 | UI components |
| [TypeScript](https://www.typescriptlang.org) | 5.7 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Styling |
| [Radix UI](https://www.radix-ui.com) | — | Accessible UI primitives (modals, dialogs) |
| [shadcn/ui](https://ui.shadcn.com) | — | Pre-built components on top of Radix |
| [Lucide React](https://lucide.dev) | — | Icons |
| [Recharts](https://recharts.org) | 2.15 | Charts inside the tracker panel |
| [Vercel Analytics](https://vercel.com/analytics) | 1.6 | Production analytics layer |
| [next-themes](https://github.com/pacocoursey/next-themes) | — | Dark/light mode |

---

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/GustavoTrevezani/EventTrackerStore
cd EventTrackerStore
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build the project

```bash
npm run build
```

### 4. Start the production server

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Development mode

To run with hot reload (auto-refreshes the browser on every file save):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Any change you save will reflect instantly in the browser without losing page state.

---

## Project structure

```
/app          → Next.js app router pages
/components   → UI components (catalog, cards, event tracker modal)
/lib          → Event tracking logic and utilities
/public       → Static assets (bike images)
```

---

## Live demo

> Coming soon / [Add your Vercel URL here]

---

Built by [Gustavo Trevezani](https://github.com/GustavoTrevezani)
