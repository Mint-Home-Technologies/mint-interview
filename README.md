# Programming challenges

This repository provides a single exercise.

## Exercises

1. **01-concurrent-fibonacci** – Calculate Fibonacci numbers with concurrent memoization in TypeScript.

Run `npm test` from the repository root to execute the tests.

## Additional Requirement

Create a separate repository using **Next.js** and **NestJS** that implements a multi-step wizard:

1. Ask the customer for their address.
2. Ask how many AC units they have (1, 2, more than 3, or "I don't know").
   - If they select **more than 3** or **I don't know**, navigate to a page where they enter their name and phone number and inform them that we will contact them.
3. If they choose **1** or **2**, let them select the system type (split, package, or "I don't know").
   - Choosing **I don't know** should also lead to the contact page mentioned above.
4. Select the heating type (heat pump or gas).
5. Show a page where they enter their name, phone number, and email.
6. Display a confirmation page after the flow is complete.

You are free to choose the look and feel and any libraries. Use a local database, for example **SQLite**. Provide the code and a README explaining how to run the project, either in a GitHub repository or as a ZIP file.
