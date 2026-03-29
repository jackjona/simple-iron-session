# Simple iron-session

A simple [iron-session](https://github.com/vvo/iron-session) implementation in Next.js.

## Features

- the Login button on homepage creates a secure, stateless, and cookie-based session
- `/` is the home page it is accessible without being logged in
- `/secure` is the protected page that is only accessible when logged in
  - Navigating to `/secure` without being logged in redirects you back to the homepage

## Required env

Set the SECRET_COOKIE_PASSWORD in your env file ex. `.env.local` - This is the Private key used to encrypt the cookie (it is required). It has to be at least 32 characters long.

## Getting Started

To install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
