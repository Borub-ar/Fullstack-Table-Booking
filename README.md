# Table Booking App

A full-stack project for learning and developing a restaurant table reservation app. The repository currently includes a working user authentication flow and a frontend booking panel prototype.

![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![React](https://img.shields.io/badge/React-19-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6+-green)
![License](https://img.shields.io/badge/license-ISC-blue)

## Project Status

This project is not yet a complete end-to-end reservation system.

Implemented:

- user registration with validation,
- verification email sending,
- email confirmation via token,
- verification email resend flow,
- login with access token and refresh token generation,
- protected client-side routes,
- responsive UI for auth and booking views.

In progress / still to build:

- backend logic for table reservations,
- storing and fetching reservation history,
- full `logout` implementation,
- session refresh via `refresh-session-token`.

## Tech Stack

| Layer | Stack |
| --- | --- |
| Frontend | React 19, Vite 7, TypeScript, Tailwind CSS 4, React Router 7 |
| State and requests | TanStack React Query, Axios |
| Backend | Node.js, Express 5, TypeScript |
| Database | MongoDB + Mongoose |
| Auth | JWT, bcrypt |
| Email | Nodemailer |
| Validation | Zod |
| Testing | Vitest |

## Main Views

- `/auth/register` - registration form
- `/auth/login` - login form
- `/auth/verify-email` - verification notice screen
- `/auth/verify-email-result` - account activation result after clicking the email link
- `/booking` - date, time, and table selection view
- `/booking/history` - reservation history view

## Project Structure

```text
.
├── client/                  # React + Vite frontend app
├── server/                  # Express + MongoDB API
├── shared/                  # shared validation schemas
├── .github/workflows/       # CI pipeline
├── package.json             # root-level scripts
└── README.md
```

## Requirements

- `Node.js` 20+
- `npm` 9+
- `MongoDB` 6+ locally or in the cloud

## Installation

```bash
git clone https://github.com/Borub-ar/Fullstack-Table-Booking-App.git
cd Fullstack-Table-Booking-App
npm run setup
```

## Environment Variables

The server loads environment variables from `server/src/.env`.

```env
PORT=8000
MONGO_URL=mongodb://localhost:27017/table-booking
JWT_SECRET=your-secret-key
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
CLIENT_URL=http://localhost:5173
```

Notes:

- `MONGO_URL` is required for the backend to start.
- `JWT_SECRET` has a development fallback, but it should be set explicitly in practice.
- for Gmail, use an [App Password](https://support.google.com/accounts/answer/185833), not your regular password.
- `CLIENT_URL` is used to build the verification link sent by email.

Optionally, you can add `client/.env`:

```env
VITE_API_URL=http://localhost:8000
```

## Run Locally

Start the frontend and backend together:

```bash
npm run dev
```

Local addresses:

- frontend: `http://localhost:5173`
- backend: `http://localhost:8000`

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run setup` | installs dependencies in root, `client`, and `server` |
| `npm run dev` | starts frontend and backend in parallel |
| `npm run build` | builds the client and server |
| `npm run lint` | runs ESLint for both apps |
| `npm run test` | runs server and client tests |
| `npm run audit` | runs a dependency security audit |

Per-app scripts:

```bash
npm run dev --prefix client
npm run build --prefix client
npm run preview --prefix client

npm run dev --prefix server
npm run watch --prefix server
npm run start --prefix server
```

## API

The backend currently exposes mainly user and authentication endpoints:

| Method | Endpoint | Status | Description |
| --- | --- | --- | --- |
| `POST` | `/users/create` | ready | user registration |
| `POST` | `/users/send-verification-email` | ready | send verification email |
| `GET` | `/users/verify-email/:token` | ready | activate account |
| `POST` | `/users/resend-verification-email` | ready | resend verification link |
| `POST` | `/users/login` | ready | login and return tokens |
| `POST` | `/users/logout` | placeholder | endpoint exists, but the logic is not implemented yet |
| `POST` | `/users/refresh-session-token` | placeholder | endpoint exists, but the logic is not implemented yet |

Additionally, the API uses:

- `CORS` with a whitelist for `http://localhost:5173`,
- rate limiting for the whole app and selected auth endpoints,
- centralized error-handling middleware.

## Testing And CI

The repository includes a GitHub Actions pipeline that runs on `push` and `pull_request` to `main`:

- dependency installation,
- build,
- `npm audit`,
- lint,
- tests.

The CI matrix checks Node 20 and MongoDB 6.0 as well as 7.0.

At the moment, test coverage is limited. The repository mainly contains a test for the `errorHandler` middleware, and the frontend has Vitest configured without real component tests yet.

## Notes

- The `/booking` and `/booking/history` views are currently mostly UI screens without a connected reservation backend.
- Login returns JWT tokens in the API response; a cookie-based session flow is not implemented yet.
- Shared registration validation lives in `shared/validation/registrationSchema.ts`.

## License

ISC

## Author

Kacper Barabasz
