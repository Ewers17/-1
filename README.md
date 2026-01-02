# Coffee Shop — Full-stack Scaffold

This repository contains a scaffold for a full-stack Coffee Shop project.

Features:
- Frontend: React + Vite + TypeScript + Tailwind CSS
- Backend: Node.js + Express + TypeScript
- MongoDB (Mongoose) with seed script
- Auth using JWT and bcrypt
- Mock payment endpoint (no real Stripe keys)
- Docker & docker-compose (includes MongoDB)
- ESLint, Prettier and Jest (backend)

Quick start

1. Copy `.env.example` to `.env` and fill variables (JWT_SECRET, MONGO_URI if needed)
2. Run MongoDB and services via Docker Compose:

   docker-compose up --build

3. Seed sample data (after DB is up):

   cd server && npm install && npm run seed

Run locally (without Docker):

- Server:
  cd server
  npm install
  npm run dev

- Client:
  cd client
  npm install
  npm run dev

Notes

- Mock payment: POST to `/api/payments/mock` with { amount, token } to simulate a payment.
- Auth: POST `/api/auth/register` and `/api/auth/login` to get a JWT token.

Vercel deployment

- Connect this GitHub repository to Vercel.
- Set environment variables in your Vercel project:
  - `MONGO_URI` — URL to your MongoDB Atlas cluster
  - `JWT_SECRET` — secret for JWT
  - `VITE_API_URL` — e.g. `https://<your-vercel-domain>/api`
  - `ALLOW_SEED` — set to `true` temporarily to run `/api/seed` (optional)
- The repo contains `vercel.json` and `api/` serverless functions (auth, products, payments, seed).

Scripts (sample):
- client: `start`, `dev`, `build`
- server: `start`, `dev`, `seed`, `test`

License: MIT
