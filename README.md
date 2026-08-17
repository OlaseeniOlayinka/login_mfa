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
