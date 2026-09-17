# Student Management System

A full-stack student records dashboard with a React/Vite frontend, Django REST API, and persistent SQLite storage.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the Django API server through the managed API workflow
- `pnpm --filter @workspace/student-management-system run dev` — run the React/Vite dashboard through the managed web workflow
- `.pythonlibs/bin/python backend/manage.py makemigrations students` — create Django migrations after model changes
- `.pythonlibs/bin/python backend/manage.py migrate` — apply SQLite migrations
- `.pythonlibs/bin/python backend/manage.py seed_students` — add sample records if the database is empty
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- Django admin is available at `/api/admin/` when a staff user is created with `createsuperuser`.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React, Vite, TypeScript, React Query
- API: Django 5 + Django REST Framework
- DB: SQLite (`backend/db.sqlite3`)
- API validation: Django REST Framework serializers and model validators
- API codegen: Orval (from OpenAPI spec)
- API CORS: django-cors-headers

## Where things live

- `backend/config/` — Django settings, URL configuration, and application entry points
- `backend/students/` — Student model, serializers, CRUD viewset, dashboard summary, admin, and migrations
- `artifacts/student-management-system/src/` — React dashboard and UI components
- `lib/api-spec/openapi.yaml` — source-of-truth REST contract
- `backend/db.sqlite3` — local persistent student database

## Architecture decisions

- Django owns student persistence and validation; the React app never treats local state as the source of truth.
- The API keeps the `/api/` prefix so it is routed through the existing managed API service and is easy to test with Postman.
- The dashboard summary is a read-only aggregate endpoint so totals, department counts, and average CGPA always reflect SQLite.
- OpenAPI remains the frontend contract and generated React Query hooks are used for every API call.

## Product

- View live student records and dashboard aggregates
- Search by name, email, or department
- Add, edit, advance year, and delete student records
- See client and server validation feedback, loading states, empty states, and connection errors

## User preferences

- Keep the project beginner-friendly and organized.
- Keep Django, Django REST Framework, and SQLite as the backend stack.

## Gotchas

- API workflow commands run from `artifacts/api-server`, so they first change to the repository root before invoking Django.
- Run OpenAPI codegen after changing `lib/api-spec/openapi.yaml` so the generated hooks stay aligned.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
