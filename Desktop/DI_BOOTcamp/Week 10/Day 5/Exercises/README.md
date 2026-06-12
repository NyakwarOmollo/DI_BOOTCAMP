# Collaborative Storytelling App

This monorepo contains:
- backend: Express + PostgreSQL auth and story APIs
- frontend: Vite + React + TypeScript + Redux
- types: shared TypeScript models for User and Story

## Scripts
- npm run dev — starts backend and frontend together
- npm run start — starts only the backend
- npm run build — builds the frontend

## Environment variables
Create backend/.env with:
- DATABASE_URL=postgres://...
- JWT_SECRET=replace-me
- REFRESH_SECRET=replace-me
- PORT=5000

## Database setup
Run the SQL in backend/src/db/schema.sql in your PostgreSQL database before starting the backend.
