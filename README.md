# Gig Contacts SPA

Gig Contacts SPA is a single-page application for managing contacts. It allows users to add, edit, and delete contacts,
and stores the contact information in the browser's local storage.

### Requirements

Node.js `22.11.0`

pnpm `9.13.2`

## Installation

To install the project dependencies, run:

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
