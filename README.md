# kehinde-oyewale-lendsqr-fe-test

A Lending platform with admin access to database of 100s of lenders that manages lending cash.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Context](#context)
- [License](#license)

## Introduction

This project is a User Management System built with React, TypeScript, Next.js, and SCSS. It serves as a platform for managing user data, including personal information, employment details, and social media accounts. The system includes features like user authentication, user filtering, and a pop-up menu for user actions.

## Components

- **Login**: A component for handling user authentication.
- **Home**: The main layout component for the application.
- **UserData**: A component displaying user data with pagination and filtering.
- **UserSummary**: A component showing a summary of user statistics.
- **Pagination**: A reusable pagination component.
- **ContextProvider**: A context provider for managing global state.
-**Users/[Page]**
- **Header Component**
- **SideNav Component**
- **Organization Filter**
- **Pop-Up**
-**Login Testing**

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repository.git

2.   Install dependencies:
        npm install

3. Start the development server:
    npm run dev

## Usage

1. Login Component
The Login component handles user authentication. It includes form inputs for email and password, with validation and error handling.

2. Home Component
The Home component provides the main layout for the application, including top and side navigation and a main content area.

3. UserData Component
The UserData component displays a table of user data with pagination and filtering capabilities.

4. UserSummary Component
The UserSummary component shows a summary of user statistics with tabs for different categories.

5. Pagination Component
The Pagination component provides a reusable pagination feature for displaying a large set of data.

6. ContextProvider Component
The ContextProvider component creates a context for managing global state, including user authentication and click state.

7. User Details Page Component
The page component displays detailed information about each user, including general details, education and employment information, socials, and guarantor details.

8. Organization Filter
The Organization Filter component identified by the organization header on the userlist table allows users to filter users based on organization, username, email, date, phone number, and status.

9. Header Component
The Header component provides essential features for navigation and user interaction like a search functionality and a responsive Menu Toggle allowing users to open or close the navigation sidebar. The Project Review can be found by clicking on the Docs

10. SideNav Component
The SideNav component provides an organized sidebar for navigating through various sections and includes the The log out functionality allowing users log out

11. Pop-Up
The Pop-Up component identified by the 3 dots on each user list provides a menu for actions like viewing user details, blacklisting, and activating users.

12. Login Testing
This ensures that different components are functioning as expected. The test suite covers scenarios like rendering components, handling form submissions, and ensuring that the login process works correctly.

13. License
This project is licensed under MIT.