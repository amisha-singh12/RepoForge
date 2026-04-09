# RepoForge
RepoForge, it suggests a place where developers can create, manage, and refine repositories just like a blacksmith forges metal into useful tools. It gives a sense of craftsmanship and control over your code. 
RepoForge is a **GitHub-inspired version control system** that simulates how real-world distributed version control works under the hood.

Instead of just using Git, this project focuses on **building Git-like functionality from scratch**, including:

- Repository initialization
- Staging changes
- Committing changes
- Pushing & pulling data
- Reverting to previous states

It also includes a **web-based interface** to manage repositories, issues, and users.

## ⚙️ Tech Stack

### 🖥️ Frontend
- React (Vite)
- Context API
- CSS

### 🛠️ Backend
- Node.js + Express
- MongoDB

### ☁️ Storage
- AWS S3 (for repository storage)

## 🎥 Demo
![RepoForge Demo](https://raw.githubusercontent.com/amisha-singh12/RepoForge/main/Video%20Project%201.gif)

## 🏗️ Project Structure
RepoForge/
├── backend/
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ ├── .mygit/ ← Custom Git-like system
│
├── frontend/
│ ├── components/
│ ├── pages/
│ ├── context/
│
├── README.md


## 🔄 Workflow (Step-by-Step)
### 1️. INIT (Initialize Repository)
### 2. ADD (Staging Area Adds file to staging area)
### 3. COMMIT (Takes staged files , Stores metadata (message, timestamp))
### 4. PUSH (Sends data to remote storage (AWS S3)) 
### 5. PULL (Fetches latest data from remote)
### 6. REVERT (Rolls back project to previous state, Uses stored commit history)

             INIT → ADD → COMMIT → PUSH
                            ↑
                         REVERT
                           ↓
                         PULL
## 🌐 Web Application Features
🔐 User Authentication
📁 Repository Management
🐞 Issue Tracking System
🔍 Search Repositories

RepoForge is not just a project, but an attempt to deeply understand how real-world developer tools like Git and GitHub function internally, by building them from scratch.
