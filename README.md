# RhinoSphere

A full-stack School Management SaaS platform built with Next.js, TypeScript, and PostgreSQL. Supports four distinct roles — Admin, Teacher, Guardian, and Student — each with a dedicated dashboard, access-controlled routes, and role-specific workflows.

## Features

### Multi-Role System
- 🔐 **Admin** — Full control over students, teachers, fees, notices, and platform settings
- 👨‍🏫 **Teacher** — Timetable management, student lists, noticeboard, messaging
- 👨‍👩‍👧 **Guardian** — View linked student profiles, fee status, notifications, and messages
- 🎓 **Student** — Personal dashboard, timetable, noticeboard, contact

### Core Modules
- 💰 **Fee Management** — Track student fees with status: Pending / Paid / Overdue
- 🔔 **Notifications** — Automated alerts for fee due, payment received, and general announcements
- 📅 **Timetable** — Interactive calendar scheduling with react-big-calendar
- 📋 **Noticeboard** — Platform-wide announcements by admin/teachers
- 💬 **Messaging** — Internal messaging between roles
- 📊 **Admin Dashboard** — Data visualization with Recharts
- 👥 **Lists** — Manage student and teacher rosters

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15 (App Router), TypeScript, Tailwind CSS |
| UI Components | shadcn/ui, Radix UI, Lucide Icons |
| Charts | Recharts |
| Calendar | react-big-calendar, react-day-picker |
| Animations | Motion (Framer Motion) |
| Backend | Node.js, Express.js, TypeScript |
| Database | PostgreSQL |
| ORM | Prisma (with migrations + seed) |
| Auth | JWT + bcrypt |

## Architecture

The frontend uses Next.js App Router with a `(dashboard)` route group — each role (admin, teacher, guardian, student) has its own protected route subtree. Middleware handles JWT validation and role-based redirects before any page renders. The backend is a separate Express API with clean separation across controllers, services, routes, and middleware. PostgreSQL is managed via Prisma with a typed schema, versioned migrations, and a seed script for development data.

```
Browser
  │
  ├── Next.js App Router
  │     ├── /login  /register
  │     └── /(dashboard)
  │           ├── /admin
  │           ├── /teacher
  │           ├── /guardian
  │           ├── /student
  │           ├── /timetable
  │           ├── /noticeboard
  │           └── /messages
  │
  └── Express REST API
        ├── /api/users    (auth, RBAC)
        ├── /api/students
        └── /api/fees
              │
        PostgreSQL (via Prisma)
```

## Database Schema

Four user roles defined at the enum level: `admin`, `teacher`, `guardian`, `student`.

Key models: `User` · `Student` · `Fee` (status: pending/paid/overdue) · `Notification` (fee_due / payment_received / general)

Guardians are linked to students via a relation — enabling scoped fee and notification views per family.

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database

### Installation

```bash
git clone https://github.com/bokhtier19/RhinoSphere.git
cd RhinoSphere

# Backend
cd backend
cp .env.example .env        # add DATABASE_URL and JWT_SECRET
npm install
npx prisma migrate dev      # run migrations
npx prisma db seed          # seed demo data
npm run dev

# Frontend (new terminal)
cd frontend
cp .env.example .env        # add NEXT_PUBLIC_API_URL
npm install
npm run dev
```

### Environment Variables

**`backend/.env`**
```env
DATABASE_URL=postgresql://user:password@localhost:5432/rhinosphere
JWT_SECRET=your_jwt_secret
PORT=5000
```

**`frontend/.env`**
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Status

> 🚧 **Work in progress** — core modules (auth, fee management, dashboards, timetable) are functional. Ongoing improvements to messaging, notifications, and mobile responsiveness.

## License
MIT