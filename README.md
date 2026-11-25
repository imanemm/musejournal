# MuseJournal 

> Your life, told through music.

MuseJournal is a private music journal. Write a memory, tag how you felt, attach the song that goes with it, and rediscover those moments later through an "On this day" view and insights about your moods and music.

**Status:** In active development.

## Planned features (MVP)

- Sign up / log in (email or Google) and a one-click **demo mode**
- Journal entries with a date, mood and reflection
- Spotify catalog search to attach a song to each memory
- Journal timeline with filters and full-text search
- Music Library of every song tied to a memory
- Insights: mood distribution, mood per day, top songs and artists, logging streak
- "On this day" memory rewind
- Light and dark themes

## Tech stack

| Layer | Technologies |
|---|---|
| Frontend | React, TypeScript, Vite, Tailwind CSS, React Router, TanStack Query |
| Backend | Java 25, Spring Boot (Web, Security, Data JPA, Validation, Actuator) |
| Database | PostgreSQL, Flyway |
| Auth | Firebase Authentication + Spring Security (OAuth2 Resource Server) |
| Integrations | Spotify Web API |
| Testing | JUnit 5, Mockito, Testcontainers, Vitest, React Testing Library, Playwright |
| DevOps | Docker, GitHub Actions, Vercel, Render, Neon |

## Repository structure

```
musejournal/
├─ backend/            Spring Boot API
├─ frontend/           React app
├─ docs/               architecture, ADRs, screenshots
├─ docker-compose.yml  local PostgreSQL
└─ .github/            CI workflows and templates
```

## Getting started

_Coming in milestone M0._

## Architecture decisions

See [`docs/adr`](docs/adr).

## Author

Designed and developed by Imane Moussa Marou.
