# PRODIGY_FS_01
# Secure User Authentication System

This project implements a **Secure User Authentication System** featuring signup and login functionalities. Built with **HTML**, **CSS**, and **JavaScript**, the system integrates with **Firebase** to securely handle user registration, login, and authentication.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Signup Page**: Users can create a new account with their email and password.
- **Login Page**: Users can securely log in with their registered credentials.
- **Firebase Integration**: Firebase Authentication is used to securely store user credentials and manage session tokens.
- **Form Validation**: Includes front-end validation for email and password inputs.
- **Responsive Design**: The pages are fully responsive and mobile-friendly.
- **Security**: Passwords are securely managed using Firebase’s built-in security features.

## Technologies Used
- **Frontend**: 
  - HTML: Markup for structuring the pages.
  - CSS: Styling for creating a user-friendly interface.
  - JavaScript: Handles form validation and communication with Firebase.
  
- **Backend**: 
  - Firebase Authentication: Used to manage users' registration and login securely.
  - Firebase Realtime Database: (Optional) To store user profile data or additional user information.

## Project Structure

## Setup and Installation

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/hermela-bekele/PRODIGY_FS_01.git
2. **Install Firebas CLI**
   ```bash
   nnpm install -g firebase-tools
   firebase login
4. **Set up Firebase
   - create a new project and enable Firebase Authentication with Email/Password as the sign-in method.
   - Obtain your Firebase Configuration object (API key, Auth domain, etc.) and replace the values in the firebaseauth.js file.
5. **Run the project**
   ```bash
   npx live-server

   
