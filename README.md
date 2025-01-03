# Next.js Starter with favorite tech stacks

If you’re tired of repeatedly setting up projects with various tech stacks but don’t have the time to do it manually every time, this repository is here to help. With just one single command, you can spin up a fully configured development environment for your Next.js project

This repository provides a ready-to-use setup for starting a Next.js project with PostgreSQL and Docker. It simplifies the development process by including pre-configured Docker containers for the application and database, along with other essential tools.

## Tech Stack

- **Next.js**
- **Tailwind CSS**
- **Shadcn UI**
- **PostgreSQL**: Relational database for data storage.
- **Drizzle ORM**: For managing database migrations and schema.
- **Docker**: Containerized environment for consistent development.
- **authJS (next-auth v5)**: The nextjs package for managing the authentication and authorization in your project`(optional)`.
- **Linting Setup**: Pre-configured tools like ESLint and Prettier for consistent code style and quality.
- **Commit Message Checks**: Ensure commit messages follow a defined format (e.g., Conventional Commits) to maintain a clean Git history.


---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker Desktop](https://www.docker.com/)
- [Node.js](https://nodejs.org/) (for local development outside Docker)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/alizada-hadi/nextjs-starter-setup.git your-project-name
cd your-project-name
```

### 2. Start development using Docker
```
docker compose up --build -d
```
This command will
#### 1. Install the required dependencies.
#### 2. Spin up a PostgreSQL database instance locally.
#### 3. Generate the schema (e.g., users table).
#### 4. Apply database migrations.

After the setup is complete, your development environment will be available at http://localhost:3000.

---

## Workflow for Schema Changes
If you make changes to your database schemas (models) and need to regenerate them:

### 1. Restart the Docker containers:
```bash
docker compose down
docker compose up -d
```

###	2.	Or manually generate and migrate the schema (without restarting the containers):
```bash
npm run generate
npm run migrate
```

---
## Access Drizzle Studio
To visually explore your database schema, you can access the Drizzle Studio by running:
```bash
npm run studio
```

---
## Contributing
Feel free to fork this repository, create issues, or submit pull requests to improve the setup and functionality.

Please don't forget to give it a star ⭐