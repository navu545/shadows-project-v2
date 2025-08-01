# 🎨 Shadows Project

A fast and modern full-stack web app built using **Vite**, **React (TypeScript)**, **Tailwind CSS**, and **Express**.

---

## 🚀 Tech Stack

- ⚡️ [Vite](https://vitejs.dev/) — blazing-fast frontend build tool  
- ⚛️ [React (TypeScript)](https://reactjs.org/) — component-based UI  
- 💨 [Tailwind CSS](https://tailwindcss.com/) — utility-first styling  
- 🌐 [Express](https://expressjs.com/) — minimal and flexible Node.js backend  

---

## 📁 Folder Structure

```
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
```

---

## 🛠️ Getting Started

### 1. Clone the repo

```
git clone https://github.com/navu545/shadows-project-v2.git
cd shadows-project
```

### 2. Install dependencies

```
npm install
# or
yarn install
```

### 3. Run the frontend (Vite)

```
npm run dev
# or
yarn dev
```

### 4. Run the backend (Express)

```
node server.js
```

> Make sure to run both frontend and backend if using them together.

---

## 🧪 Available Scripts

- `dev` — Start development server  
- `build` — Create a production build  
- `preview` — Preview the production build  
- `start` — Run the Express server (`node server.js`)  
- `format` — Format code (if Prettier is configured)  

---

## 💡 Notes

- Most files are written in TypeScript (`.tsx`).
- Styling is centralized in `src/index.css`.
- Routing is handled through `animatedRoutes.tsx` using animated transitions.
- `server.js` contains backend logic and validation and is located outside `src/`.

---

## 📦 Deployment

You can deploy this app using:

- [Netlify](https://www.netlify.com/)
- [Render](https://render.com/)
- Any platform that supports static frontend + Node.js backend

---

## 🧑‍💻 Author

- **Name:** Navdeep Singh  
- **GitHub:** [@navu545](https://github.com/navu545)

---

## 📄 License

This project is currently not licensed. All rights reserved.

---

> Built with passion using TypeScript, Vite, Tailwind, and Express.
