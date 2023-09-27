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

<!-- TABLE OF CONTENTS -->
<p>Table of Contents</p>
<ol>
<li>
    <a href="#about-the-project">About The Project</a>
    <ul>
    <li><a href="#built-with">Built With</a></li>
    </ul>
</li>
<li>
    <a href="#getting-started">Getting Started</a>
    <ul>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#installation">Installation</a></li>
    </ul>
</li>
<li><a href="#features">Features</a></li>
<li>
    <a href="#how-to-contribute">How To Contribute</a>
    <!-- <ul>
    <li><a href="#expectations-for-contributors">Expectations for Contributors</a></li>
    </ul> -->
</li>
<!-- <li><a href="#screenshots">Screenshots</a></li> -->

</ol>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- ![secure-vote](/screenshots/largest-screen.png) -->

This project aims to produce a highly performant and mobile responsive electoral voting web application (known as **Secure Vote &trade;** ) that allows voters to vote in a free, fair and credible manner.

Its frontend is written in React which is well known JavaScript library for building fast applications and its backend will be written in ExpressJS, which is a popular Node.js framework for writing server-side applications; which provides API endpoints operations such as routing.

## Built With

- [![React][React.js]][React-url]
- [![Vite][Vite]][Vite-url]
- [![TailwindCSS][TailwindCss]][TailwindCSS-url]

<!-- GETTING STARTED -->

## Getting Started

To get it into your local system, follow these simple example steps.

### Prerequisites

You need to have `npm` installed on your computer in order to be able to install and run the project.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/emmanuelonwukwe/secure-vote.git
   ```
2. Install NPM packages
   ```sh
   cd secure-vote/client && npm install
   ```
3. Run the Project
   ```sh
   npm run dev
   ```
4. Navigate to `http://127.0.0.1:5173/` (or the exposed port) on your favorite browser

## Features

The electoral voting app will consist of the following features:

```[task list]
- [ ] Voter Registration and Authentication
- [ ] Voter Validation using BVN (Bank Verification Number) (See https://github.com/Official-kornelios/BVN-verification)
- [ ] Account Management System and Dashboard for Voters and Election Manager
- [ ] Ballot Creation and Customization
- [ ] Real Time Result Collation
- [ ] Educational Resources to Onboard Users
- [ ] Data Security and Compliance To Handle Data according to Data - - Protection Regulation
- [ ] Feedback and Support Channels (e.g, Email or WhatsApp)
```



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
[TypeScript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-%2338BDF8.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
