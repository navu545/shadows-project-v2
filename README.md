# 🎨 Shadows Project

A modern, frontend-focused website with a lightweight backend, built and deployed for a **non-governmental organization (NGO)** using **Vite**, **React (TypeScript)**, **Tailwind CSS**, and **Express**.

---

## 🏷️ Project Context

This website was developed and deployed for an NGO.
I worked directly with stakeholders to design, build, and deploy the application end-to-end.

The repository is maintained on my GitHub for development and maintenance purposes, as the organization does not currently have a dedicated technical team or repository setup.

---

## 🚀 Tech Stack

- ⚡️ **Vite** — frontend build tool
- ⚛️ **React (TypeScript)** — component-based UI
- 💨 **Tailwind CSS** — utility-first styling
- 🌐 **Express** — lightweight Node.js backend for form handling and email notifications

---

## 📁 Folder Structure
.
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable UI components
│   ├── pages/           # App views / screens
│   ├── animatedRoutes.tsx  # Centralized route animation & routing
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Entry point
│   └── index.css        # Tailwind and global styles
├── server.js            # Express server
├── index.html           # Main HTML template 
├── package.json         # Project manifest
├── package-lock.json    # Dependency lockfile
├── .eslintrc.js         # ESLint configuration (or .json / .cjs depending on your format)
├── netlify.toml         # Netlify deployment config
└── README.md # Project overview

---

## 🛠️ Local Development

This section is intended for **development and maintenance** purposes.

### Install dependencies

npm install
# or
yarn install

### Run the frontend (Vite)

npm run dev
# or
yarn dev

### Run the backend (Express)

node server.js

Both frontend and backend should be running when developing locally.

---

## 🧪 Development Scripts

- `dev` — Start frontend development server
- `build` — Create a production build
- `preview` — Preview the production build
- `start` — Run the Express server (`node server.js`)
- `format` — Format code (if Prettier is configured)

---

## 💡 Notes

- Most frontend files are written in TypeScript (`.tsx`).
- Styling is centralized in `src/index.css`.
- Routing and page transitions are handled via `animatedRoutes.tsx`.
- The backend is intentionally minimal and handles form submissions and email delivery.

---

## 📦 Deployment

This application is currently deployed in production.

- The **frontend** is hosted on **Netlify**
- The **backend** is hosted on **Render**

Deployment details are intentionally scoped to this project and the organization it was built for.

---

## 🧑‍💻 Author

Navdeep Singh
GitHub: https://github.com/navu545

---

## 📄 License

This project is currently not licensed. All rights reserved.

---

Built as a real-world project for a non-profit organization and maintained as part of ongoing development and learning.
