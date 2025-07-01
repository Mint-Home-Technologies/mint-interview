# Setting Up the Interview Repository

This document provides instructions for setting up and administering the technical interview challenges.

## Repository Structure

The repository is organized as follows:

```
mint-interview/
├── 01-concurrent-fibonacci/     # Challenge 1: Concurrent Fibonacci
│   ├── README.md                # Challenge 1 instructions
│   ├── src/                     # Source code for Challenge 1
│   └── tests/                   # Tests for Challenge 1
├── 02-wizard-application/       # Challenge 2: Multi-Step Wizard
│   ├── README.md                # Challenge 2 instructions
│   ├── api-documentation.md     # API documentation
│   ├── database-schema.md       # Suggested database schema
│   ├── wizard-flow.md           # Wizard flow diagram
│   ├── frontend/                # Frontend starter files
│   └── backend/                 # Backend starter files
├── README.md                    # Main repository README
├── SETUP.md                     # This file
├── .gitignore                   # Git ignore file
├── package.json                 # NPM package configuration
└── tsconfig.json                # TypeScript configuration
```

## Administering the Challenges

### Challenge 1: Concurrent Fibonacci

1. Candidates should implement the `concurrentMemoFibonacci` function in `01-concurrent-fibonacci/src/index.ts`.
2. They can run tests using `npm test 01-concurrent-fibonacci`.
3. The solution should demonstrate understanding of:
   - Asynchronous programming
   - Memoization
   - Concurrent operation handling

### Challenge 2: Multi-Step Wizard Application

1. Candidates should create a separate repository for this challenge.
2. They should implement both frontend (Next.js) and backend (NestJS) components.
3. The application should follow the wizard flow described in `02-wizard-application/wizard-flow.md`.
4. The API should implement endpoints similar to those in `02-wizard-application/api-documentation.md`.
5. The database schema should be similar to the one in `02-wizard-application/database-schema.md`.

## Evaluation Guidelines

### Challenge 1: Concurrent Fibonacci

Evaluate based on:
- Correctness of the implementation
- Proper handling of concurrent calls
- Effective memoization
- Code readability and organization

### Challenge 2: Multi-Step Wizard Application

Evaluate based on:
- Functionality (does it meet all requirements?)
- Code quality and organization
- User experience
- Error handling
- Testing
- Documentation

## Customizing the Challenges

If you need to modify the challenges:

1. Edit the respective README.md files to update instructions.
2. For Challenge 1, you may need to update the tests in `01-concurrent-fibonacci/tests/index.test.ts`.
3. For Challenge 2, update the supporting documentation files as needed.

## Sending to Candidates

1. Create a new private repository for each candidate.
2. Push this repository to the candidate's private repository.
3. Grant the candidate access to their private repository.
4. Provide clear instructions on how to submit their solutions.

## Reviewing Submissions

1. For Challenge 1, run the tests to verify the solution works.
2. For Challenge 2, follow the candidate's setup instructions to run their application.
3. Review the code for both challenges according to the evaluation criteria.
4. Prepare feedback for the technical interview discussion.