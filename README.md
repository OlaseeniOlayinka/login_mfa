# React Auth Demo (Login + MFA)

A small demo app showing a login → MFA → protected flow with role-based UI.

## Technologies used

- React 18
- Vite (dev server + bundler)
- JavaScript (ESM)
- react-router-dom (routing)
- Vitest + @testing-library/react (tests)

## Setup / Install

From the project root (quote the path if it contains spaces):

```bash
npm install
```

## Local run

Start the dev server:

```bash
npm run dev
# open http://localhost:5173
```

Run tests:

```bash
npm run test
```

## Mock user credentials / roles

- reader@example.com (username) / readerpass (password) — role: `read` (cannot edit)
- writer@example.com (username) / writerpass (password)  — role: `write` (can edit)

## How to test the login / MFA flow

1. Open the app at `http://localhost:5173` (home page).
2. Click the **Login** button (visible only on the home page).
3. Enter one of the mock credentials above and submit.
4. You will be taken to the MFA step — a demo one-time code is displayed on-screen for convenience.
5. Enter the displayed code and submit.
6. You will be navigated to the protected page. The `Edit` action will be disabled for the `read` role and enabled for `write`.

## Key design decisions & assumptions

- Auth is simulated client-side using a React Context (`AuthContext`) and mock user data (`/src/mocks/users.js`).
- MFA is simulated: the app generates a demo OTP and shows it on the screen (no external SMS/email provider).
- Route protection is implemented with a `PrivateRoute` wrapper that checks `isAuthenticated` and `mfaPassed`.
- UI uses minimal plain HTML components — Chakra UI components were removed where they caused runtime/install issues.
- No backend or persistence: state resets on page refresh.

## Known limitations

- This is a demo only: credentials and MFA are not secure and should not be used in production.
- No password hashing, no HTTPS-enforced API, and no session persistence.
- Tests assume a working `node_modules` install and may fail if installs were incomplete.

---
# React Auth Demo

Demo app showcasing a Login → MFA → Protected flow with role-based access (read vs write) using React, Vite, Chakra UI, and Vitest.

Setup

```bash
npm install
npm run dev
```

Tests

```bash
npm run test
```

Notes

- Login with `reader@example.com` / `readerpass` (read-only)
- Login with `writer@example.com` / `writerpass` (read/write)
- MFA code is generated and shown on the MFA page for demo purposes.
