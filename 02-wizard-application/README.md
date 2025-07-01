# Exercise 02 - Multi-Step Wizard Application

## Overview

In this challenge, you will create a full-stack application that simulates a quote request wizard for HVAC services. This is a real-world scenario that our customers use to request quotes for our services.

## Requirements

### Technology Stack

- **Frontend**: Next.js
- **Backend**: NestJS
- **Database**: SQLite

### Wizard Flow

Create a multi-step wizard with the following flow:

1. **Step 1: Address Collection**
   - Ask the customer for their address (street, city, state, zip code)
   - Include validation for required fields and proper formatting

2. **Step 2: AC Unit Quantity**
   - Ask how many AC units they have:
     - 1
     - 2
     - More than 3
     - I don't know
   - If they select **more than 3** or **I don't know**, navigate to a contact page where they enter their name and phone number, with a message that we will contact them

3. **Step 3: System Type** (only if they chose 1 or 2 AC units)
   - Let them select the system type:
     - Split
     - Package
     - I don't know
   - If they select **I don't know**, navigate to the contact page mentioned above

4. **Step 4: Heating Type** (only if they chose a specific system type)
   - Select the heating type:
     - Heat pump
     - Gas

5. **Step 5: Contact Information**
   - Collect:
     - Name
     - Phone number
     - Email address
   - Include proper validation for all fields

6. **Step 6: Confirmation**
   - Display a confirmation page showing all the information they've provided
   - Include a thank you message

### Backend Requirements

1. Create a NestJS backend with the following features:
   - Use SQLite to store all user data
   - Implement proper data validation
   - Create RESTful APIs for:
     - Determining the next step in the wizard based on user selections (`/api/wizard/next-step`)
     - Storing user contact and quote request details (`/api/users`)
   - Write basic tests for your API endpoints

### Frontend Requirements

1. Create a Next.js frontend that:
   - Implements the multi-step wizard UI
   - Communicates with the backend API
   - Provides a responsive design that works on both desktop and mobile
   - Includes form validation

## Evaluation Criteria

Your solution will be evaluated based on:

1. **Functionality**: Does it meet all the requirements?
2. **Code Quality**: Is the code well-structured, readable, and maintainable?
3. **User Experience**: Is the wizard intuitive and easy to use?
4. **Error Handling**: How well does it handle errors and edge cases?
5. **Testing**: Are there sufficient tests to ensure functionality?
6. **Documentation**: Is the code well-documented? Is there clear documentation on how to run the application?

## Submission

Create a separate repository for this challenge and provide:

1. Complete source code for both frontend and backend
2. A README.md with:
   - Setup instructions for both frontend and backend
   - Any assumptions or design decisions you made
   - Any additional features you implemented
3. Database schema or migrations

You can either share the repository URL or provide a ZIP file with your solution.

## Tips

- Focus on functionality first, then improve the UI/UX
- Use TypeScript for type safety
- Consider using form libraries like Formik, React Hook Form, or similar
- Implement proper error handling for both frontend and backend
- Document your code and provide clear instructions for running your application