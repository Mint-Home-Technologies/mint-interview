# HVAC Quote Wizard

A simple full-stack application simulating a multi-step quote request wizard for HVAC installation services. Built with **NestJS** (backend), **MongoDB** (via Docker), and **Next.js** (frontend).

---

# Features

- Multi-step wizard for collecting HVAC quote data
- Address form, system details, and contact info
- Auto-saves to MongoDB and resumes from previous session
- Backend API with validation and relationships

---

# Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

# Testing the App

Demo and setup explaination here - https://www.loom.com/share/5f240224a24c497e9c1a5bb2c38d478e

## Backend Setup (NestJS)

From the `backend` folder (`cd backend`):

### 1. Start MongoDB with Docker

Run `docker-compose up -d`

### 2. Install dependencies

Run `npm install`

### 3. Start the backend server

Run `npm run start:dev`

This runs the NestJS server at http://localhost:3001

## Frontend Setup (Next.js)

From the `frontend` folder (`cd frontend`):

### 1. Install dependencies

Run `npm install`

### 2. Run the frontend

Run `npm run dev`

This runs the frontend at http://localhost:3000

---

# API Endpoints

The NestJS backend exposes the following routes:

- POST /system — Create a new system
- PUT /system/:id — Update a system
- GET /system/:id — Get system by ID
- POST /customer — Create a customer
- PUT /customer/:id — Update a customer
- GET /customer/:id — Get customer by ID
- POST /customer/system — Create a customer and link them to a system
