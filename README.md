# 📝 Medium Clone

A full-stack blogging platform inspired by Medium — where users can sign up, create posts, read articles, and manage their content. Built using modern web technologies including **React**, **Node.js**, **Express**, and **MongoDB**.

---

## 📚 Table of Contents

- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Folder Structure](#-folder-structure)
- [API Endpoints](#-api-endpoints)
- [Screenshots](#-screenshots)
- [Concepts Demonstrated](#-concepts-demonstrated)
- [Future Improvements](#-future-improvements)
- [Author](#-author)
- [License](#-license)

---

## 🔧 Tech Stack

- **Frontend:** React, React Router, Axios, Material UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT (JSON Web Token)
- **State Management:** React Context API / Redux (if used)

---

## ✨ Features

- ✍️ Create, edit, and delete blog posts  
- 🔐 JWT-based user authentication  
- 📜 Read articles from all users  
- 👤 Personalized user dashboard  
- 🧠 RESTful API design  
- 💻 Fully responsive and clean UI

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Adarsh7309/medium.git
cd medium
cd server
npm install

cd ../client
npm install
```
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```
```bash
cd server
npm run dev
cd ../client
npm start
```
# Folder Structure
```bash
medium/
├── client/                  # React frontend
│   ├── components/          # Reusable components
│   ├── pages/               # Main pages (Home, Login, Dashboard, etc.)
│   └── context/             # Global state
├── server/                  # Express backend
│   ├── controllers/         # Route logic
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API routes
│   └── middleware/          # Auth & validation
```
