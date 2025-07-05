# 📝 Fullstack Blog App (Node.js + MySQL + AWS S3)

A full-featured blog application built with **Node.js**, **Express**, **MySQL**, and a **React frontend**, designed for showcasing fullstack and cloud engineering skills. This project demonstrates RESTful APIs, relational data modeling, and AWS S3 integration for media storage.

---

## 🚀 Features

- User authentication and authorization
- Create, read, update, delete (CRUD) blog posts and comments
- Search and filter posts
- Image upload support via AWS S3
- Sequelize ORM + MySQL database (via Docker)
- Built with modern tools and clean architecture
- Fully Dockerized backend and database

---

## Tech Stack

**Backend**

- Node.js + Express
- MySQL (Docker)
- Sequelize ORM
- AWS S3 SDK (for media uploads)
- JWT for authentication

**Frontend**

- React
- TailwindCSS

**Infrastructure**

- Docker + Docker Compose
- AWS S3 (for image storage)

---

## Getting Started (Locally)

### 1. Clone the repo

```bash
git clone https://github.com/Alseals1/Blog.git
cd Blog/backend
```

### 2. Start MySQL via Docker

```bash
docker compose up -d mysql
```

This spins up a MySQL container, mapped to `localhost:3307`.

### 3. Setup `.env` (Optional for config.js users)

```env
DB_HOST=127.0.0.1
DB_PORT=3307
DB_USER=root
DB_PASS=mypassword123
DB_NAME=blog
```

### 4. Run migrations & seeds

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### 5. Start backend locally

```bash
npm install
npm run dev
```

### 6. Start frontend

```bash
cd ../frontend
npm install
npm run dev
```

---

## AWS S3 Integration (Images)

Coming Soon:

- Upload blog post images
- Store in AWS S3 bucket
- Retrieve and serve via secure URLs (Maybe?)

---

## API Endpoints

Example endpoints:

- `GET /api/posts`
- `POST /api/posts`
- `GET /api/users`
- `POST /api/comments`

---

## About the ME

**Alandis Seals** — Fullstack Developer + Cloud Engineer.  
Follow along my tech journey on [LinkedIn](https://www.linkedin.com/in/alandisseals/) | [GitHub](https://github.com/Alseals1)

---

## Summary

This project demonstrates:

- Fullstack RESTful development
- SQL data modeling and joins
- Dockerized microservices
- Cloud integration via AWS S3

Contact me directly for walkthroughs or collaboration.
