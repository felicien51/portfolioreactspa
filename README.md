# Portfolio Showcase — React SPA

A single-page application built with React and Vite for showcasing creative projects. Features real-time search, category filtering, project management, and a fully responsive layout.

**Live Demo:** https://portfolioreactspaa.vercel.app/

---

## Tech Stack

- React 18
- Vite
- Plain CSS (component-scoped)

---

## Getting Started

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

### Build for production

```bash
npm run build
npm run preview
```

---

## Features

- **View projects** — browse all projects on the landing page in a responsive 3-column grid
- **Real-time search** — filter projects instantly by title, category, or description
- **Category filter** — filter by Web Design, App Design, Branding, and more via pill buttons
- **Add projects** — add new projects via a validated form with required field checks
- **Delete projects** — remove any project directly from its card
- **Clear filters** — reset search and category filter in one click
- **Responsive layout** — works on mobile, tablet, and desktop
- **Accessible** — `aria-expanded`, `aria-label`, and semantic HTML throughout

---

## Component Hierarchy

```
App
├── Navbar
├── Hero
├── SearchBar
├── FilterBar
├── AddProjectForm (conditional)
├── ProjectList
│   └── ProjectCard
└── Footer
```

---

## File Structure

```
portfolioreactspa/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── components/
        ├── Navbar.jsx / Navbar.css
        ├── Hero.jsx / Hero.css
        ├── SearchBar.jsx / SearchBar.css
        ├── FilterBar.jsx / FilterBar.css
        ├── ProjectList.jsx / ProjectList.css
        ├── ProjectCard.jsx / ProjectCard.css
        ├── AddProjectForm.jsx / AddProjectForm.css
        └── Footer.jsx / Footer.css
```

---

## State Management

All global state is managed in `App.jsx` using `useState` and `useMemo`:

| State | Type | Purpose |
|---|---|---|
| `projects` | Array | Full list of projects |
| `searchText` | String | Current search input value |
| `activeCategory` | String | Currently selected category filter |
| `showForm` | Boolean | Controls Add Project form visibility |

`filteredProjects` and `categories` are derived with `useMemo` for optimized re-renders.

---

## Running Tests

```bash
node logic.test.js
```

Runs 24 unit tests covering search filtering, add project logic, form validation, and data integrity — no dependencies required.