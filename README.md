[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<div align="center"> 
  <img src="./client/public/banner-and-logo.png" alt="Logo">

  <h3 align="center">Electoral Voting Web Application - Secure Vote</h3>
  <p align="center">
    StackTrek Capstone Project
    <br />
    <!-- <a href="https://recipe-page-eta.vercel.app/"><strong>See Live Version »</strong></a> -->
    <!-- <br /> -->
    <br />
    <!-- <a href="https://recipe-page-eta.vercel.app/">View Demo</a> -->
    <!-- · -->
    <a href="https://github.com/emmanuelonwukwe/secure-vote/issues">Report Bug</a>
    ·
    <a href="https://github.com/emmanuelonwukwe/secure-vote/issues">Request Feature</a>
  </p>
</div>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Introduction

SecureVote is a secure and user-friendly application designed to facilitate electronic voting processes in various contexts, such as elections, surveys, and decision-making within organizations. This app ensures transparency, security, and ease of use, making it an ideal solution for modernizing the voting experience. The app link is [secure-vote.onrender.com](secure-vote.onrender.com)

Key advantages of the Electronic Voting App include:

- **Security:** Utilizes advanced encryption techniques to protect the integrity and confidentiality of votes.
- **Accessibility:** Provides a user-friendly interface that ensures people of all abilities can cast their votes.
- **Auditing:** Generates detailed logs to facilitate auditing and maintain the transparency of the voting process.
- **Customization:** Allows administrators to configure voting options, candidates, and settings to suit their specific needs.
- **Scalability:** Easily scales to accommodate small or large-scale voting events.

## Features

### User Features

1. **User Registration and Authentication:** Users can create accounts and log in securely.

2. **Voting:** Users can cast their votes electronically for candidates or options.

3. **Verification:** Users can verify the status of their votes to ensure they were counted accurately.

4. **Results:** Users can view real-time voting results, if authorized by administrators.

### Administrator Features

1. **Administrator Dashboard:** Administrators have access to a dashboard for managing elections and overseeing the voting process.

2. **Election Configuration:** Administrators can create, configure, and schedule elections, specifying candidates, voting periods, and other settings.

3. **Voter Management:** Administrators can add, edit, or remove voters and monitor their voting activity.

4. **Results Management:** Administrators can access and export detailed voting results for analysis and reporting.

5. **Security:** The app includes robust security features to prevent unauthorized access and protect against tampering.

## Getting Started

### Prerequisites

Before setting up the Electronic Voting App, make sure you have the following prerequisites:

- Node.js (version 14.0 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/emmanuelonwukwe/secure-vote.git
   ```

2. Change to the project directory:

   ```bash
   cd secure-vote
   ```

3. Install the required dependencies:
   ```bash
    cd server
    npm install
   ```
   ```bash
   cd client
   npm install
   ```

4. Configure the application by creating a `.env` file in the `server` root directory and specifying the following environment variables:

   ```
   DATABASE_URL={your postgres database connection url}

   APP_ENVIRONMENT={development|production}

   SERVER_PORT=3000

   JWT_SECRET={your_secret_key}
   ```


5. Start the application:

   ```bash
   client
   npm run dev

   server
   node index.js
   ```

6. Access the app in your web browser at `http://localhost:5173`.

7. Migrate your database tables by visiting this endpoint url `http://localhost:3000/api/v1/create-db-tables`

## Usage

### User Usage

1. **Registration:** Users can create accounts with their personal information.

2. **Authentication:** Log in securely with your username and password.

3. **Voting:** Cast your vote in the active elections.

4. **Verification:** After voting, verify your vote to ensure accuracy.

### Administrator Usage

1. **Admin Login:** Access the admin dashboard using admin credentials.

2. **Election Management:** Create, configure, and schedule elections from the dashboard.

3. **Voter Management:** Add, edit, or remove voters as needed.

4. **Results Management:** Monitor and export voting results for analysis.

## Security

Security is a top priority for SecureVote. The following security measures have been implemented:

- Data Encryption: Sensitive data is encrypted using industry-standard encryption algorithms.

- Authentication: User and administrator access is protected using JWT tokens.

- Authorization: Role-based access control ensures that only authorized individuals can perform specific actions.

- Auditing: Detailed logs are generated to track all voting and administrative activities.

- Regular Security Audits: The app undergoes regular security audits and vulnerability assessments.


## Contributing

We welcome contributions from the open-source community. If you'd like to contribute to the Electronic Voting App, please Reach out to us.

## Authors
* Ochiba Gabriel (https://github.com/gabbyedgar) 
* Emmanuel Onwukwe (https://github.com/emmanuelonwukwe)




[contributors-shield]: https://img.shields.io/github/contributors/emmanuelonwukwe/secure-vote.svg?style=for-the-badge
[contributors-url]: https://github.com/emmanuelonwukwe/secure-vote/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/emmanuelonwukwe/secure-vote.svg?style=for-the-badge
[forks-url]: https://github.com/emmanuelonwukwe/secure-vote/network/members
[stars-shield]: https://img.shields.io/github/stars/emmanuelonwukwe/secure-vote.svg?style=for-the-badge
[stars-url]: https://github.com/emmanuelonwukwe/secure-vote/stargazers
[issues-shield]: https://img.shields.io/github/issues/emmanuelonwukwe/secure-vote.svg?style=for-the-badge
[issues-url]: https://github.com/emmanuelonwukwe/secure-vote/issues
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vite]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-%2338BDF8.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
