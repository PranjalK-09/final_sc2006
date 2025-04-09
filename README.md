# EduPath

EduPath is a web-based platform designed to help students explore their educational and career pathways. It provides personalized insights—such as course recommendations, career visualizations, and detailed data on salaries, job vacancies, and employment trends—all tailored to assist students in making informed decisions for their future. Although the job recommendation feature is under development, EduPath still presents valuable market insights for students.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation and Setup](#installation-and-setup)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup](#frontend-setup)
  - [Backend & Database Setup](#backend--database-setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Features

- **Authentication:** User registration, login, and password reset powered by Firebase Authentication.
- **User Profiles:** Users can update their name, educational qualifications, and interests. All profile data is stored in a MySQL database.
- **Dashboard and Visualizations:** Interactive dashboards display visualizations such as median salaries, job vacancies, and employment trends.
- **Bookmarks and Recommendations:** Save course pathways/bookmarks. (Personalized job recommendations are planned for future updates.)
- **Responsive and Modern UI:** Built using React, Next.js, Tailwind CSS, and Lucide icons; includes smooth animations powered by Framer Motion.

## Tech Stack

- **Frontend:**  
  - Next.js  
  - React  
  - Tailwind CSS  
  - Framer Motion  
  - Lucide-react  
  - Firebase (Authentication)

- **Backend:**  
  - PHP (for session-based authentication integrated with MySQL)  
  - MySQL as the database (accessed via XAMPP locally)

- **Database:**  
  - MySQL (User data and profiles stored in tables such as `users`, `user_profiles`, `bookmarks`)

## Installation and Setup

### Prerequisites

Before you start, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org) (LTS recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [XAMPP](https://www.apachefriends.org/index.html) (to run MySQL and Apache locally)

### Frontend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PranjalK-09/final_sc2006.git
   cd final_sc2006
   ```

2. **Install npm packages:**  
   Install all required dependencies:
   ```bash
   npm install
   ```
   This will install packages such as `next`, `react`, and `firebase`.

3. **Install additional packages:**
   ```bash
   npm install lucide-react
   npm install framer-motion
   npm install firebase
   ```
   > Note: If you already have these in your `package.json` then running `npm install` should be enough.

4. **Environment Variables:**  
   Create a `.env.local` file in the root directory with the following details (adjust as needed):
   ```
   NEXT_PUBLIC_API_BASE_URL=http://localhost:YOUR_API_PORT
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_USER=your_mysql_username
   MYSQL_PASSWORD=your_mysql_password
   MYSQL_DATABASE=edupath
   ```

5. **Firebase Configuration:**  
   In `lib/firebaseConfig.ts`, ensure you have your Firebase config correctly set up and exported:
   ```typescript
   import { initializeApp, getApps, getApp } from 'firebase/app';
   import { getAuth } from 'firebase/auth';
   // (Other imports if needed)

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
     measurementId: "YOUR_MEASUREMENT_ID"
   };

   const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
   export const auth = getAuth(app);
   export { app };

   // Optionally, Firebase Analytics setup...
   ```

### Backend & Database Setup

1. **XAMPP Installation & MySQL:**
   - Download and install [XAMPP](https://www.apachefriends.org/index.html).
   - Launch XAMPP and start Apache and MySQL servers.
   - Open [phpMyAdmin](http://localhost/phpmyadmin) to manage your database.

2. **Create the Database:**  
   Create a new database named `edupath`.

3. **Create Required Tables:**  
   Execute the following SQL queries in phpMyAdmin or via MySQL CLI:

   **Users Table:**
   ```sql
   CREATE TABLE IF NOT EXISTS users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     firebase_uid VARCHAR(128) NOT NULL UNIQUE,
     full_name VARCHAR(255) NOT NULL,
     email VARCHAR(255) NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

   **User Profiles Table:**
   ```sql
   CREATE TABLE IF NOT EXISTS user_profiles (
     firebase_uid VARCHAR(128) PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     qualification VARCHAR(255) NOT NULL,
     interests TEXT,
     profile_photo VARCHAR(255),
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     FOREIGN KEY (firebase_uid) REFERENCES users(firebase_uid) ON DELETE CASCADE
   );
   ```

   **Bookmarks Table:**
   ```sql
   CREATE TABLE IF NOT EXISTS bookmarks (
     id INT AUTO_INCREMENT PRIMARY KEY,
     firebase_uid VARCHAR(128) NOT NULL,
     course_data JSON NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     FOREIGN KEY (firebase_uid) REFERENCES users(firebase_uid) ON DELETE CASCADE
   );
   ```

4. **Backend Integration:**  
   The backend uses PHP (handled by Tiffany) with session-based authentication and MySQL. Ensure your API endpoints (e.g., `/api/save-user`, `/api/update-profile`, etc.) correctly point to your PHP backend and that the environment variable `NEXT_PUBLIC_API_BASE_URL` reflects the correct endpoint URL.

## Running the Application

1. **Run the Frontend:**  
   Start your Next.js development server:
   ```bash
   npm run dev
   ```
   The application should now be available at [http://localhost:3000](http://localhost:3000).

2. **Ensure XAMPP is Running:**  
   Confirm that Apache and MySQL are running in XAMPP so that your PHP backend and database can be accessed.

3. **Test the Features:**  
   - **Login & Signup:** Try logging in with Firebase credentials.
   - **Profile Update:** Update your user profile and verify changes in MySQL.
   - **Bookmarks & Visualizations:** Check that the visualizations and bookmarking features work as expected.
   - **Forgot Password:** Use the forgot password flow to verify it sends an email via Firebase.

## Project Structure

```
.
├── app/
│   ├── api/
│   │   ├── save-user/route.ts
│   │   ├── save-profile/route.ts
│   │   ├── update-profile/route.ts
│   │   ├── delete-account/route.ts
│   │   ├── get-bookmarks/route.ts
│   │   ├── user/route.ts
│   │   ├── get-interest/route.ts       // New endpoint to fetch interests
│   ├── dashboard/...
│   ├── login/page.tsx
│   ├── signup/page.tsx
│   ├── forgot-password/page.tsx
│   └── ... (other pages)
├── lib/
│   ├── firebaseConfig.ts
│   └── db.ts                          // Database connection using mysql2/promise
├── public/
│   ├── hero-image.svg
│   └── ... (other public assets)
├── package.json
├── .env.local
└── README.md
```

## Future Enhancements

- **Job Recommendation Feature:** Extend personalization to include job recommendations.
- **Enhanced Visualizations:** Refine graph highlighting based on user interests.
- **Real-time Data:** Integrate real-time data feeds for up-to-date market insights.
- **Mobile Optimization:** Further improve responsiveness and accessibility.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
