# Candidate Evaluation

This repository contains the candidate's solution for the two exercises of the Mint Home challenge. Below is an overview of the work that was delivered.

## What Was Done Well

- **Concurrent Fibonacci implementation** – a memoized function caches promises to ensure that concurrent calls for the same `n` share the computation. Negative numbers are guarded against and the recursion result is cached for reuse.
- **Full‑stack wizard application** – provided both a NestJS backend and a Next.js frontend. The backend exposes routes for creating and updating `System` and `Customer` entities, while the frontend walks through address, system, and contact steps. Local storage is used so the form can resume where it left off.
- **Clear run instructions** – the `README` describes how to start MongoDB, run the backend, and launch the frontend.

## Missing Items

- The Fibonacci exercise asks to use `setTimeout` to simulate a heavy asynchronous operation, but the implementation does not use `setTimeout` at all.
- There are almost no tests for the wizard application and only the default e2e test in the backend.

## Implemented but With Issues

- The wizard stores the identifier in local storage and posts updates to the backend. While functional, it lacks form validation and does not fully demonstrate resuming from a database session.
- API calls from the frontend are hard‑coded to `http://localhost:3001` rather than using configuration or environment variables.
- Error handling is minimal in both frontend and backend.

Overall, the candidate demonstrated the ability to set up a full‑stack project and implement the general flow of both exercises, but some key requirements and polish are missing.
