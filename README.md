# Portfolio Backend API

A scalable RESTful API built with **Node.js, Express, PostgreSQL, and Prisma ORM** to power the personal portfolio and admin dashboard for `tanzim-rahman.com`.

## Tech Stack

- **Runtime & Framework:** Node.js, Express.js
- **Database & ORM:** PostgreSQL, Prisma ORM
- **Authentication:** JSON Web Tokens (JWT) & bcrypt
- **Security & Validation:** CORS, Helmet, Express Rate Limit

---

## Project Architecture

This project follows a **Modular Layered Architecture** (`Routes -> Controllers -> Services -> Prisma Database`). Separating HTTP handling from database logic keeps the codebase clean, testable, and easy to scale.

```text
portfolio-backend/
├── prisma/
│   ├── schema.prisma           # PostgreSQL database models & relations
│   └── seed.js                 # Initial data seeder (Projects & Experience)
├── src/
│   ├── config/
│   │   └── prisma.js           # Singleton PrismaClient instance
│   ├── middlewares/
│   │   ├── auth.middleware.js  # Protects Admin routes via JWT
│   │   └── error.middleware.js # Global error handler
│   ├── modules/
│   │   ├── auth/               # Admin login & token verification
│   │   │   ├── auth.routes.js
│   │   │   ├── auth.controller.js
│   │   │   └── auth.service.js
│   │   ├── projects/           # Portfolio projects CRUD
│   │   │   ├── project.routes.js
│   │   │   ├── project.controller.js
│   │   │   └── project.service.js
│   │   ├── experiences/        # Career timeline CRUD
│   │   │   ├── experience.routes.js
│   │   │   ├── experience.controller.js
│   │   │   └── experience.service.js
│   │   └── messages/           # Contact form submissions & AI moderation
│   │       ├── message.routes.js
│   │       ├── message.controller.js
│   │       └── message.service.js
│   ├── app.js                  # Express app setup, middlewares, route mounting
│   └── server.js               # Entry point: DB connection & app.listen(PORT)
├── .env                        # Environment variables (Ignored by Git)
├── .gitignore
├── package.json
└── README.md
```

### How the Layers Work

- **Routes (`*.routes.js`):** Defines the API endpoints (e.g., `GET /api/projects`) and attaches middlewares like `authMiddleware`.
- **Controllers (`*.controller.js`):** Handles `req` and `res`. Extracts body/params, calls the Service layer, and returns the HTTP status code and JSON response.
- **Services (`*.service.js`):** Contains pure business logic and executes Prisma queries (`prisma.project.findMany()`, `prisma.project.create()`, etc.).
- **Prisma Client (`src/config/prisma.js`):** Manages the connection pool to the PostgreSQL database.

---

## Core API Endpoints

### Public Endpoints (Portfolio Frontend)

| Method | Endpoint          | Description                                                      |
| ------ | ----------------- | ---------------------------------------------------------------- |
| GET    | `/api/projects`   | Fetch all projects (supports `?featured=true` for top 6 grid)    |
| GET    | `/api/experiences`| Fetch ordered career timeline items                              |
| POST   | `/api/messages`   | Submit a contact form message                                    |

### Protected Endpoints (Admin Dashboard)

| Method | Endpoint                  | Description                                  |
| ------ | ------------------------- | -------------------------------------------- |
| POST   | `/api/auth/login`         | Authenticate admin and return JWT            |
| POST   | `/api/projects`           | Create a new project                         |
| PUT    | `/api/projects/:id`       | Update project details or featured status    |
| DELETE | `/api/projects/:id`       | Delete a project                             |
| POST   | `/api/experiences`        | Add a new experience entry                   |
| PUT    | `/api/experiences/:id`    | Update an experience entry                   |
| DELETE | `/api/experiences/:id`    | Remove an experience entry                   |
| GET    | `/api/messages`           | View all contact messages in Admin Inbox     |
| PATCH  | `/api/messages/:id/read`  | Mark a message as read                       |
| DELETE | `/api/messages/:id`       | Delete a message                             |

Protected routes require an `Authorization: Bearer <token>` header using the JWT returned from `/api/auth/login`.

---

## Local Setup & Commands

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Configure environment variables (`.env`):**

   ```env
   PORT=5000
   DATABASE_URL="postgresql://user:password@localhost:5432/portfolio_db?schema=public"
   JWT_SECRET="your_secret_key_here"
   ```

3. **Run Prisma migrations & generate the client:**

   ```bash
   npx prisma migrate dev --name init
   ```

4. **(Optional) Seed initial data:**

   ```bash
   npx prisma db seed
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:5000`.
