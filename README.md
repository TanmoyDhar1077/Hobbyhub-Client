# HobbyHub - A Local Hobby Group Organizer

🌐 **Live Site**: [https://hobbyhub-tanmoy.netlify.app/](https://hobbyhub-tanmoy.netlify.app/)

HobbyHub is a dynamic platform designed to connect people through shared interests by helping them discover, join, or create local hobby-based groups. Whether it's reading, hiking, painting, or cooking, HobbyHub fosters real-world communities for real-world passions.

---

## 🚀 Key Features

- 🔐 **Authentication System**  
  Secure login and registration using Firebase (Email/Password + Google Sign-In) with strong password validation and user feedback via toast alerts.

- 🛡️ **Protected Routes**  
  Sensitive pages like group creation, personal groups, and updates are accessible only to authenticated users with protected routes.

- 🎨 **Unique and Responsive Design**  
  Custom UI design using Tailwind CSS and DaisyUI, fully responsive for mobile, tablet, and desktop.

- 🌙 **Dark/Light Mode Toggle**  
  User-friendly theme switching on the Home Page for a personalized viewing experience.

- 📅 **Event Management**  
  Groups with past start dates are automatically marked inactive, preventing new joins.

- 📦 **CRUD Functionality for Groups**  
  Full Create, Read, Update, Delete operations with real-time data updates from a MongoDB database via a secure Express server.

- 🧠 **Interactive UI Enhancements**  
  Integrated `React Awesome Reveal` for animated transitions and `React Tooltip` for helpful UX hints.

---

## 📁 Client Repository

🔗 [Client GitHub Repository](https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-TanmoyDhar1077)

Key Technologies:
- React
- Firebase Authentication
- React Router
- Tailwind CSS + DaisyUI
- React Toastify
- React Tooltip
- React Awesome Reveal

---

## 🛠️ Server Repository

🔗 [Server GitHub Repository](https://github.com/Programming-Hero-Web-Course4/b11a10-server-side-TanmoyDhar1077)

Key Technologies:
- Node.js
- Express.js
- MongoDB
- CORS
- Dotenv for environment security

---

## 📋 Pages Overview

- `/` — Home (with Banner, Featured Groups, and Static Sections)
- `/login` — Login Page
- `/register` — Register Page
- `/groups` — View All Groups
- `/group/:id` — Group Details (Join or View Only)
- `/createGroup` — Create New Group
- `/myGroups` — User’s Created Groups (Edit/Delete)
- `/updateGroup/:id` — Update Group Info
- `*` — 404 Not Found

---

## 🔒 Environment Variables

Environment variables are used to hide Firebase configuration and MongoDB credentials:

---

## 📄 License

This project is developed as part of a course assignment and is not licensed for commercial use.

