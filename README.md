
# ApplyHub

ApplyHub is a full-stack job application tracking system that helps job seekers manage and monitor their job applications in one place. Users can securely register, log in, add job applications, update their status, and keep track of opportunities through a clean dashboard interface.

This project was built to demonstrate practical full-stack development skills using modern web technologies.

## ✨ Features

* **User authentication** (Register / Login)
* **JWT-based** protected routes
* **Add, update, and delete** job applications
* **Job status tracking** (Applied, Interview, Offer, Rejected)
* **User-specific data** (each user sees only their own jobs)
* **Responsive dashboard UI**
* **Clean separation** of frontend and backend

## 🛠 Tech Stack

### Frontend
* React (Vite)
* React Router
* Bootstrap (grid system)
* Custom CSS

### Backend
* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt for password hashing

## 📂 Project Structure

```text
applyhub/
├── frontend/        # React application
│   ├── src/
│   └── public/
├── backend/         # Express API
│   ├── config/
│   ├── routes/
│   ├── models/
│   └── middleware/
```

## 🚀 Getting Started

### Prerequisites

- Node.js
- MongoDB (local or Atlas)

## Frontend setup
```bash
git clone https://github.com/KSRanasinghe/applyhub-frontend.git
```
```bash
cd applyhub-frontend
```
```bash
npm install
```
```bash
npm run dev
```

> **Note:** Frontend runs on: `http://localhost:5173`

## Backend setup

### Backend Repository

> **Note:** The backend API for this project is maintained in a separate repository:  [ApplyHub-Backend](https://github.com/KSRanasinghe/applyhub-backend.git)
```bash
git clone https://github.com/KSRanasinghe/applyhub-backend.git
```
```bash
cd applyhub-backend
```
```bash
npm install
```

### Create a .env file in the backend folder:
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run the backend server:
```bash
npm run dev
```

> **Note:** Backend runs on:  `http://localhost:5000`


## 🧪 How to Test the Application

1. Register a new user account
2. Log in with your credentials
3. Add job applications from the dashboard
4. Update job status or delete jobs
5. Log out and log in again to verify data persistence


## 🔐 Authentication Notes

- JWT is used for authentication
- Protected routes prevent unauthorized access
- Tokens are stored on the client side for session handling

## 📌 Project Status

This project is functionally complete and can be extended further with:
- Deployment
- Sorting and filtering jobs
- Search functionality
- Refresh token implementation
- UI animations and enhancements


## 👤 Author

Keshara S. Ranasinghe

## 🎯 Purpose of This Project
This project was built as a portfolio application to practice and demonstrate` full-stack web development`, including `authentication`, `protected routes`, and `CRUD operations` using modern technologies.