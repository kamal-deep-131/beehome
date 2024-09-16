# Behome

Behome is a beautiful, UI-focused web application built with React, Firebase, and Vite. It showcases my ability to create modern and responsive designs using Tailwind CSS and demonstrates core functionality like authentication, profile management, and API integration.

## Features

- **Authentication**: Supports email/password and Google sign-in using Firebase.
- **Password Management**: Allows users to reset their password using Firebase's built-in password reset functionality.
- **Profile Management**: Users can view and manage their profiles.
- **State Management**: Uses React Context for state uplifting and management across components.
- **Routing**: Implemented with React Router DOM for seamless navigation.
- **Axios for API**: Axios is used to fetch data from external APIs.
- **Toast Notifications**: Provides feedback and improves UX by using toast notifications.

## Tech Stack

- **React**: Front-end JavaScript framework for building interactive UIs.
- **Firebase**: Backend as a Service (BaaS) used for authentication and user management.
- **Vite**: Front-end tooling for faster and leaner development.
- **Tailwind CSS**: Utility-first CSS framework for building responsive, modern designs.
- **Axios**: Promise-based HTTP client for fetching API data.
- **React Context**: Used for managing global state.
- **React Router DOM**: Enables navigation between components.
- **Toast Notifications**: For user notifications and better experience.

## Project Setup and Installation

### Prerequisites

To run this project locally, you need to have the following installed:

- Node.js (>= v12)
- NPM (comes with Node.js) or Yarn (optional)
- A Firebase project (Firebase Console)
### Installation

1. **Clone the repository**

```bash
   git clone https://github.com/kamal-deep-131/beehome.git
   cd behome
```

2. **Install dependencies**

- Using NPM
```bash
   npm install
```

- Using Yarn
```bash
   yarn install
```

- Using bun
```bash
   bun install
```

3. **Set up Firebase**
- Go to the [Firebase Console](https://console.firebase.google.com/)
- Create a new project (or use an existing one).
- Enable Email/Password and Google Sign-In under Authentication.
- Create a new Web app in your Firebase project and obtain your Firebase configuration.

4. **Add Firebase configuration to the project**

Open src/firebaseConfig.js (or wherever you store your Firebase configuration) and replace the values with your Firebase credentials:

``` bash
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};
```

5. **Run the app locally**
After setting up Firebase configuration, start the app:

If you are using NPM:
``` bash 
npm run dev
```

If you are using Yarn:
``` bash 
yarn dev
```

If you are using bun:
``` bash 
bun run dev
```

The app will run on http://localhost:5173.

6. **Build for production**
If you want to build the app for production, run:
``` bash 
npm run build
```
or,
If you are using yarn

``` bash 
bun run build
```

or,
If you are using bun

``` bash 
bun run build
```

7. **Preview the production build locally**
You can also preview the production build locally by running:
```bash
npm run preview
 ```
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://kamal131.vercel.app/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)

[![Demo](https://beehome-131.vercel.app/beehomeLogo.svg)](https://beehome-131.vercel.app/)


