# Gig Contacts SPA

Gig Contacts SPA is a single-page application for managing contacts. It allows users to add, edit, and delete contacts,
and stores the contact information in the browser's local storage.

You can see a live demo of the application here:
[https://gig-contacts-spa.vercel.app/](https://gig-contacts-spa.vercel.app/)

### Requirements

Node.js `20.18.0`

pnpm `9.13.2`

## Installation

To install the project dependencies install pnpm (more info [here](https://pnpm.io/installation)):


```bash
npm install -g pnpm
```

Then install the project dependencies:

```bash
pnpm install --frozen-lockfile
```

## Usage

To start the development server, run:

```bash
pnpm dev
```

This will start the development server at [http://localhost:5173](http://localhost:5173).

## Testing

To run the tests, run:

```bash
pnpm test
```

run the tests with coverage, run:

```bash
pnpm test:coverage
```

The tests are written using `@testing-library/react` and vitest.

