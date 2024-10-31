# module-19-challenge-repo

Tech Quiz Application

# Table of Contents
-Project Description
-User Story
-Acceptance Criteria
-Features
-Installation
-Usage
-Testing
-Component Tests
-End-to-End Tests
-Walkthrough Video

# Project Description
The Tech Quiz Application is a full-stack quiz app designed to help users test their tech knowledge. Built with the MERN stack (MongoDB, Express, React, Node.js), it provides users with a set of randomly generated tech questions, displays their final score, and allows them to start a new quiz. The project highlights strong front-end interaction using React and robust back-end handling with MongoDB, making it a complete, interactive application for tech enthusiasts.

# User Story
As an aspiring developer,
I want to take a tech quiz
So that I can test my knowledge and improve my skills.

# Acceptance Criteria
Start the Quiz: When the user clicks the start button, the quiz begins, and the first question is displayed.
Answer Questions: The user answers each question and proceeds to the next one.
Display Score: When all questions are answered, the quiz ends, and the user’s score is displayed.
Restart Quiz: After viewing the score, the user can start a new quiz.

# Features
Randomized Questions: A set of random questions is fetched from a database each time the quiz starts.
Interactive UI: Users can answer questions and navigate through the quiz seamlessly.
Score Display: After completing the quiz, the application calculates and displays the score.
Data Persistence: The application uses MongoDB to manage and fetch questions.
Testing with Cypress: Component and end-to-end tests ensure application reliability.

# Installation

* Clone the Repository:

bash
git clone: https://github.com/jacobmenlove/module-19-challenge-repo
cd tech-quiz-app

* Install Dependencies:

In the server directory:
bash
cd server
npm install

In the client directory:
bash
cd ../client
npm install

* Set Up Environment Variables:

Create a .env file in the server directory using .env.EXAMPLE as a template.
Set MONGODB_URI to your MongoDB connection string (e.g., mongodb://127.0.0.1:27017/techquiz).

* Seed the Database:

Run the following command to populate your database with sample questions:
bash
cd ../server
npm run seed
Usage
Start the Backend Server:

In the server directory, start the backend:

bash
npm run start
Start the Frontend Development Server:

In the client directory, start the frontend:

bash
npm run dev
Visit http://localhost:3001 in your browser to access the application.

* Testing
The application includes comprehensive testing using Cypress to ensure reliability and a smooth user experience. Cypress tests include both component-level and end-to-end tests.

# Component Tests
Quiz Component: Verifies that the Quiz component renders correctly, starts the quiz, displays questions, and shows the final score.
End-to-End Tests
Complete Quiz Flow: Simulates a user starting the quiz, answering questions, and viewing the final score.
Data Fetching: Mocks API requests to /api/questions/random to ensure consistent testing with mock data.
To run tests:

# Open Cypress:
bash
Copy code
npx cypress open
Run All Tests: Execute component and end-to-end tests directly from the Cypress UI.

# Walkthrough Video
Link to walkthrough video

This video demonstrates:

The application setup and running both servers.
A complete user interaction with the quiz.
running component and end-to-end tests.