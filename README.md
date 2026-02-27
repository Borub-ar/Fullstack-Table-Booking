# Table Reserve

Aplikacja pełnostackowa do rezerwacji stolików w restauracji. Użytkownicy mogą rejestrować konta, weryfikować e-mail, logować się oraz przeglądać i tworzyć rezerwacje.

![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![React](https://img.shields.io/badge/React-19-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6+-green)
![License](https://img.shields.io/badge/license-ISC-blue)

## ✨ Funkcjonalności

- **Rejestracja** – tworzenie konta z walidacją
- **Weryfikacja e-mail** – link aktywacyjny wysyłany po rejestracji
- **Logowanie** – JWT (access + refresh token), opcja "Remember me"
- **Rezerwacja stolików** – interfejs wyboru daty, godziny i stolika
- **Historia rezerwacji** – przegląd własnych rezerwacji
- **Responsywny UI** – layout dopasowany do desktop i mobile 

## 🛠 Technologie

| Warstwa      | Stack                                   |
| ------------ | --------------------------------------- |
| **Frontend** | React 19, Vite 7, TypeScript, Tailwind CSS 4, React Router 7 |
| **Backend**  | Node.js, Express 5, TypeScript          |
| **Baza**     | MongoDB (Mongoose)                     |
| **Auth**     | JWT, bcrypt, cookies                   |
| **E-mail**   | Nodemailer (Gmail SMTP)                |
| **Walidacja**| Zod (shared schema)                    |

## 📁 Struktura projektu

```
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/     # Komponenty UI
│   │   ├── hooks/          # useUser, requests
│   │   ├── pages/          # Auth, Booking, Error
│   │   └── types/
│   └── package.json
├── server/                 # Backend (Express)
│   └── src/
│       ├── middleware/     # errorHandler, rateLimit
│       ├── models/         # users (MongoDB)
│       ├── routes/        # users.router
│       ├── services/      # email
│       └── utils/         # JWT, tryCatch
├── shared/
│   └── validation/         # registrationSchema (Zod)
├── .github/workflows/      # CI (Node 20, MongoDB 6/7)
├── package.json            # Root – skrypty + concurrently
└── README.md
```

## 📋 Wymagania

- **Node.js** 20.x lub nowszy
- **MongoDB** 6.0 lub 7.0 (lokalnie lub Atlas)
- **npm** 9+

## 🚀 Instalacja

### 1. Klonowanie i instalacja zależności

```bash
git clone https://github.com/Borub-ar/Fullstack-Table-Reservation-App.git
cd Fullstack-Table-Reservation-App
npm run setup
```

### 2. Zmienne środowiskowe

Utwórz plik `server/src/.env` z następującymi zmiennymi:

```env
# Serwer
PORT=8000

# MongoDB (obowiązkowe)
MONGO_URL=mongodb://localhost:27017/table-reservation

# JWT (opcjonalne w dev – używany jest fallback)
JWT_SECRET=twoj-tajny-klucz-min-32-znaki

# E-mail – weryfikacja konta (Gmail)
EMAIL_USER=twoj-email@gmail.com
EMAIL_PASSWORD=haslo-aplikacji-gmail
CLIENT_URL=http://localhost:5173
```

> **Uwaga:** Dla Gmaila użyj [hasła aplikacji](https://support.google.com/accounts/answer/185833), nie zwykłego hasła.

Opcjonalnie w `client/` – `.env`:

```env
VITE_API_URL=http://localhost:8000
```

### 3. Uruchomienie

```bash
# Jednocześnie backend + frontend
npm run dev
```

- **Frontend:** http://localhost:5173  
- **Backend API:** http://localhost:8000  

## 📜 Dostępne skrypty

| Skrypt       | Opis                                      |
| ------------ | ----------------------------------------- |
| `npm run setup` | Instalacja zależności (root, client, server) |
| `npm run dev`   | Uruchamia serwer i frontend równolegle     |
| `npm run build` | Build client + server                      |
| `npm run test`  | Testy server + client                      |
| `npm run lint`  | ESLint dla server i client                 |
| `npm run audit` | Audyt bezpieczeństwa                      |

**Tylko client:**
```bash
npm run dev --prefix client      # Dev server
npm run build --prefix client    # Produkcyjny build
npm run preview --prefix client  # Podgląd builda
```

**Tylko server:**
```bash
npm run dev --prefix server      # Uruchomienie (tsx)
npm run watch --prefix server    # Nodemon + hot reload
```

## 🔌 API

| Metoda | Endpoint | Opis |
|--------|----------|------|
| POST | `/users/create` | Rejestracja |
| POST | `/users/send-verification-email` | Wyślij e-mail weryfikacyjny |
| GET | `/users/verify-email/:token` | Weryfikacja e-mail |
| POST | `/users/resend-verification-email` | Ponowne wysłanie linku |
| POST | `/users/login` | Logowanie |
| POST | `/users/logout` | Wylogowanie |
| POST | `/users/refresh-session-token` | Odświeżenie JWT |

Requesty są ograniczane (rate limiting) oraz chronione CORS (whitelist: `http://localhost:5173`).

## 🧪 CI/CD

GitHub Actions uruchamia:

- instalację zależności,
- build,
- audyt bezpieczeństwa,
- lint,
- testy,

dla Node 20 i MongoDB 6.0 oraz 7.0.

## 📄 Licencja

ISC

---

**Autor:** Kacper Barabasz  
**Repo:** [Fullstack-Table-Reservation-App](https://github.com/Borub-ar/Fullstack-Table-Reservation-App)
