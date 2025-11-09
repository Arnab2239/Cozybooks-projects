# CozyBooks — Next.js + Express (No DB) with Docker Compose

## Run
```bash
docker compose build --no-cache
docker compose up -d
```
- Frontend: http://localhost:3000
- Backend:  http://localhost:4000

## Why rebuild?
Next.js reads NEXT_PUBLIC_* env vars at **build time**. The compose file passes
the API URL as a **build arg** so the frontend calls http://backend:4000.
