# Table Booking

A fullstack application for restaurant table bookings. Users can register accounts, verify email, log in, and browse and create bookings.

![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![React](https://img.shields.io/badge/React-19-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6+-green)
![License](https://img.shields.io/badge/license-ISC-blue)

## ✨ Features

- **Registration** – account creation with validation
- **Email verification** – activation link sent after registration
- **Login** – JWT (access + refresh token), "Remember me" option
- **Table booking** – interface for selecting date, time and table
- **Booking history** – view your own bookings
- **Responsive UI** – layout adapted for desktop and mobile

## 🛠 Tech Stack

| Layer       | Stack                                   |
| ----------- | --------------------------------------- |
| **Frontend**| React 19, Vite 7, TypeScript, Tailwind CSS 4, React Router 7 |
| **Backend** | Node.js, Express 5, TypeScript          |
| **Database**| MongoDB (Mongoose)                     |
| **Auth**    | JWT, bcrypt, cookies                   |
| **Email**   | Nodemailer (Gmail SMTP)                |
| **Validation**| Zod (shared schema)                  |

## 📁 Project Structure

```
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── hooks/          # useUser, requests
│   │   ├── pages/          # Auth, Booking, Error
│   │   └── types/
│   └── package.json
├── server/                 # Backend (Express)
│   └── src/
│       ├── middleware/     # errorHandler, rateLimit
│       ├── models/         # users (MongoDB)
│       ├── routes/         # users.router
│       ├── services/       # email
│       └── utils/          # JWT, tryCatch
├── shared/
│   └── validation/         # registrationSchema (Zod)
├── .github/workflows/      # CI (Node 20, MongoDB 6/7)
├── package.json            # Root – scripts + concurrently
└── README.md
```

## 📋 Requirements

- **Node.js** 20.x or newer
- **MongoDB** 6.0 or 7.0 (local or Atlas)
- **npm** 9+

## 🚀 Installation

### 1. Clone and install dependencies

```bash
git clone https://github.com/Borub-ar/Fullstack-Table-Booking-App.git
cd Fullstack-Table-Booking-App
npm run setup
```

### 2. Environment variables

Create `server/src/.env` with the following variables:

```env
# Server
PORT=8000

# MongoDB (required)
MONGO_URL=mongodb://localhost:27017/table-booking

# JWT (optional in dev – fallback is used)
JWT_SECRET=your-secret-key-min-32-characters

# Email – account verification (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=gmail-app-password
CLIENT_URL=http://localhost:5173
```

> **Note:** For Gmail, use an [app password](https://support.google.com/accounts/answer/185833), not your regular password.

Optionally in `client/` – `.env`:

```env
VITE_API_URL=http://localhost:8000
```

### 3. Run

```bash
# Backend + frontend concurrently
npm run dev
```

- **Frontend:** http://localhost:5173  
- **Backend API:** http://localhost:8000  

## 📜 Available Scripts

| Script        | Description                                      |
| ------------- | ------------------------------------------------ |
| `npm run setup` | Install dependencies (root, client, server)   |
| `npm run dev`   | Run server and frontend concurrently             |
| `npm run build` | Build client + server                            |
| `npm run test`  | Tests for server + client                        |
| `npm run lint`  | ESLint for server and client                     |
| `npm run audit` | Security audit                                   |

**Client only:**
```bash
npm run dev --prefix client      # Dev server
npm run build --prefix client    # Production build
npm run preview --prefix client  # Preview build
```

**Server only:**
```bash
npm run dev --prefix server      # Run (tsx)
npm run watch --prefix server    # Nodemon + hot reload
```

## 🔌 API

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/users/create` | Registration |
| POST | `/users/send-verification-email` | Send verification email |
| GET | `/users/verify-email/:token` | Email verification |
| POST | `/users/resend-verification-email` | Resend verification link |
| POST | `/users/login` | Login |
| POST | `/users/logout` | Logout |
| POST | `/users/refresh-session-token` | Refresh JWT |

Requests are rate-limited and protected by CORS (whitelist: `http://localhost:5173`).

## 🧪 CI/CD

GitHub Actions runs:

- dependency installation,
- build,
- security audit,
- lint,
- tests,

for Node 20 and MongoDB 6.0 as well as 7.0.

## 📄 License

ISC

---

**Author:** Kacper Barabasz  
**Repo:** [Fullstack-Table-Booking-App](https://github.com/Borub-ar/Fullstack-Table-Booking-App)
