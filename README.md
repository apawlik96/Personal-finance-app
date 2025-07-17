# Personal Finance App

## About

Personal Finance App is a responsive web application designed to help users take control of their personal finances. It offers a clean and intuitive interface to track daily expenses, set savings goals, monitor recurring bills, and review past transactions.

## Features

### Overview

- Main dashboard with a summary of Current Balance, Income and Expenses.
- Section previews (Pots, Recurring Bills, Budgets, Transactions) with buttons linking to full views.

### Transactions

- Table view of all transactions.
- Sorting by: category, A–Z / Z–A, date (newest/oldest), amount (highest/lowest).
- Search input for filtering transactions.
- Select number of rows displayed per page.

### Budgets/Pots

- Detailed view of each budget or savings pot
- Options to add, edit or delete pots and budgets

### Recurring Bills

- Summary view: Paid Bills, Total Upcoming, Due Soon.
- Table with columns: Bill Title, Due Date, Amount.
- Sorting by: category, A–Z / Z–A, date (newest/oldest), amount (highest/lowest).
- Search input for filtering transactions.

## News Ticker

### API

- Live news ticker displaying financial headlines with publication date.
- Fetched from the Finnhub API in real time.

## State Management & Routing

### Redux Toolkit

- Used for global state management (e.g. transactions, budgets, UI state).

### React Router

- Enables client-side navigation between app sections (dashboard, transactions, budgets, etc.)

## Technology Stack

- Language: TypeScript
- Frontend: React.js
- State Management: Redux Toolkit
- Routing: React Router
- Styling: Styled-components & Material-UI (MUI)
- Testing: Jest & React Testing Library
- API: Finnhub
- Deployment: Netlify
