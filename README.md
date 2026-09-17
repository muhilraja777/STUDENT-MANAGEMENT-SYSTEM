🎓 Student Management System

A full-stack Student Management System for managing student records through a modern web dashboard.

The application uses a React + Vite + TypeScript frontend, a Django REST Framework backend, and SQLite for persistent data storage.

✨ Features

- 📊 Student dashboard with summary information
- 👨‍🎓 View student records
- ➕ Add new students
- ✏️ Edit existing student information
- 🔄 Advance students to the next academic year
- 🗑️ Delete student records
- 🔍 Search students by:
  - Name
  - Email
  - Department
- 📈 Dashboard statistics and department information
- 🧮 Average CGPA information
- ✅ Client-side and server-side validation
- ⚠️ Loading, empty-state, and connection-error handling
- 🔐 Django admin support
- 💾 Persistent SQLite database
- 🔌 REST API architecture

🛠️ Tech Stack

Frontend

- React
- Vite
- TypeScript
- React Query

Backend

- Python
- Django
- Django REST Framework
- django-cors-headers

Database

- SQLite

API & Development Tools

- OpenAPI
- Orval
- pnpm Workspaces
- Node.js

🏗️ Project Architecture

STUDENT-MANAGEMENT-SYSTEM/
│
├── backend/
│   ├── config/
│   │   └── Django configuration and URL settings
│   │
│   ├── students/
│   │   ├── Student models
│   │   ├── Serializers
│   │   ├── CRUD API views
│   │   ├── Dashboard summary
│   │   ├── Admin configuration
│   │   └── Migrations
│   │
│   └── db.sqlite3
│
├── artifacts/
│   ├── api-server/
│   └── student-management-system/
│       └── src/
│           └── React dashboard and UI
│
├── lib/
│   └── api-spec/
│       └── openapi.yaml
│
├── scripts/
│
├── main.py
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── pyproject.toml
├── tsconfig.json
├── tsconfig.base.json
└── README.md

🔄 How It Works

The application follows a client-server architecture:

React + Vite Frontend
        │
        │ REST API
        ▼
Django REST Framework
        │
        ▼
SQLite Database

The React frontend communicates with the Django API for student-related operations.

Django is responsible for data persistence, validation, and the REST API, while SQLite stores the student records.

📡 API

The backend exposes REST endpoints using the "/api/" prefix.

The API contract is maintained through:

lib/api-spec/openapi.yaml

OpenAPI is used as the source of truth for the API contract, with generated frontend API hooks used by the React application.

🚀 Running the Project

Prerequisites

Make sure you have:

- Node.js
- pnpm
- Python 3.11+
- Git

1. Clone the repository

git clone https://github.com/muhilraja777/STUDENT-MANAGEMENT-SYSTEM.git
cd STUDENT-MANAGEMENT-SYSTEM

2. Install dependencies

pnpm install

3. Run database migrations

.pythonlibs/bin/python backend/manage.py migrate

4. Add sample student records

If the database is empty, sample records can be added using:

.pythonlibs/bin/python backend/manage.py seed_students

5. Start the backend

pnpm --filter @workspace/api-server run dev

6. Start the frontend

In another terminal:

pnpm --filter @workspace/student-management-system run dev

The frontend and backend can then be accessed through the development URLs provided by the respective workflows.

👨‍💼 Django Admin

The Django administration interface is available at:

/api/admin/

To create an administrator account:

.pythonlibs/bin/python backend/manage.py createsuperuser

🗄️ Database

The application uses SQLite for persistent student data.

The database file is located at:

backend/db.sqlite3

Django migrations are used to manage database schema changes.

To create migrations after changing models:

.pythonlibs/bin/python backend/manage.py makemigrations students

Then apply them with:

.pythonlibs/bin/python backend/manage.py migrate

🔍 Student Management

The system allows users to:

1. View existing student records
2. Search students
3. Add new students
4. Edit student information
5. Advance students to the next academic year
6. Delete student records
7. View dashboard statistics

📊 Dashboard

The dashboard provides aggregate information from the database, including:

- Total student records
- Department information
- Average CGPA
- Student-related summary statistics

The dashboard summary is calculated from the backend data rather than relying only on frontend state.

🧪 Development Commands

Type checking

pnpm run typecheck

Build

pnpm run build

The build process performs type checking and builds the available packages.

API Code Generation

After modifying:

lib/api-spec/openapi.yaml

regenerate the API-related frontend code using:

pnpm --filter @workspace/api-spec run codegen

📁 Important Directories

Directory| Purpose
"backend/config/"| Django configuration and URL settings
"backend/students/"| Student models, serializers, views, admin and migrations
"backend/db.sqlite3"| Persistent SQLite database
"artifacts/student-management-system/src/"| React frontend and UI components
"lib/api-spec/"| OpenAPI API specification
"scripts/"| Project development scripts

🔐 Validation & Error Handling

The application includes validation on both the frontend and backend.

It also handles common application states such as:

- Loading states
- Empty data states
- Invalid input
- API connection errors
- Server validation errors

🎯 Project Objective

The objective of this project is to provide a practical full-stack application for managing student information while demonstrating the integration of a modern frontend with a RESTful backend and persistent database storage.

🔮 Future Improvements

Possible future improvements include:

- 🔐 Authentication and role-based access
- 👨‍🏫 Teacher management
- 📅 Attendance management
- 📝 Examination and marks management
- 📄 Student report generation
- 📧 Email notifications
- ☁️ Cloud database deployment
- 📱 Improved mobile experience
- 📊 Advanced analytics and reporting

👨‍💻 Author

Muhil Raja

GitHub:
https://github.com/muhilraja777

📄 License

This project is licensed under the MIT License.
