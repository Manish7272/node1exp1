<!-- TOC-START -->

## 📋 Table of Contents

- [Project Setup](#project-setup)
  - [1. Create Project Folder](#1-create-project-folder)
  - [2. Initialize Node.js Project](#2-initialize-nodejs-project)
  - [3. Install Express](#3-install-express)
  - [4. Install EJS](#4-install-ejs)
  - [5. Install Nodemon](#5-install-nodemon)
  - [6. Enable ES Modules](#6-enable-es-modules)
  - [7. Create Project Structure](#7-create-project-structure)
  - [8. Start the Application](#8-start-the-application)
  - [9. Run in Development Mode](#9-run-in-development-mode)
  - [10. Open in Browser](#10-open-in-browser)

<!-- TOC-END -->
<img width="1918" height="1017" alt="image" src="https://github.com/user-attachments/assets/79c5c827-7e41-41bf-a2f8-1d8f46b4ca39" />

## Project Setup

### 1. Create Project Folder

Create a new directory for your project and move into it.

```bash
mkdir kpi-dashboard
cd kpi-dashboard
```

### 2. Initialize Node.js Project

Generate a default `package.json` file to manage project metadata and dependencies.

```bash
npm init -y
```

### 3. Install Express

Install Express.js, a minimal web framework for building servers and APIs.

```bash
npm install express
```

### 4. Install EJS

Install EJS (Embedded JavaScript Templates) to render dynamic HTML pages from the server.

```bash
npm install ejs
```

### 5. Install Nodemon

Install Nodemon to automatically restart the server whenever files change during development.

```bash
npm install nodemon 
npm install nodemon --save-dev
```

### 6. Enable ES Modules

Allow the use of modern JavaScript `import` and `export` syntax.

Add the following to `package.json`:

```json
{
  "type": "module"
}
```

### 7. Create Project Structure

Organize your project into separate folders for views, static assets, and application logic.

```text
kpi-dashboard/
│
├── public/
│   └── home.css
│
├── views/
│   └── home.ejs
│
├── data.json
├── index.js
├── package.json
└── README.md
```

### 8. Start the Application

Run the server and make the application available in your browser.

```bash
node index.js
```

### 9. Run in Development Mode

Use Nodemon for automatic server restarts during development.

```bash
npx nodemon index.js
nodemon index.js
```

### 10. Open in Browser

Access the dashboard from your browser.

```text
http://localhost:3200
```
