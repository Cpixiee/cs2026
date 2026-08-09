# Cyber Space 2026 (www.cs2026.my.id)

A Y2K Cyberpop Scrapbook landing page built with **Next.js 16 (App Router)** for the Frontend and a high-performance **Go REST API** with **PostgreSQL** database for the Backend.

Designed based on Google Stitch UI specifications.

---

## 🛠️ Project Structure

```
cs2026/
├── frontend/               # Next.js 16 App Router Frontend
│   ├── src/
│   │   ├── app/            # App Router pages & layout
│   │   ├── components/     # Header, Hero, Highlights, Form, Footer
│   │   └── globals.css     # Y2K Neo-brutalist CSS design system
│   ├── package.json
│   └── tailwind.config.ts
└── backend/                # Go REST API & PostgreSQL Backend
    ├── cmd/server/main.go  # Entrypoint
    ├── internal/           # Handlers, Models, DB layer
    ├── docker-compose.yml  # PostgreSQL 16 Alpine container
    ├── go.mod
    └── .env.example
```

---

## ⚡ Getting Started

### 1. Run Next.js Frontend
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Run Go Backend
```bash
cd backend
go run ./cmd/server
```
The API server runs on [http://localhost:8080](http://localhost:8080).

### 3. Run PostgreSQL (Docker)
```bash
cd backend
docker-compose up -d
```

---

## 📡 API Endpoints

- `GET /health` - Health check
- `POST /api/v1/subscribe` - Register pre-registration email
- `GET /api/v1/subscribers` - Retrieve subscribers list
