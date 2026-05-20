# 🌴 KeralaHire — Premium Job Platform for Kerala, India

KeralaHire is a highly premium, modern startup-style job hiring platform built with a Kerala-inspired color palette (emerald green, pristine white, and traditional gold accents). It features sleek glassmorphism designs, smooth CSS transitions, interactive seeker/recruiter dashboards, a simulated AI Resume Score Analyzer, direct message threads, and an Admin control panel.

---

## 🚀 Two Development Implementations Included

This project contains two distinct architectures tailored to satisfy both immediate evaluation and long-term production needs:

### 1. Unified Browser-Ready Prototype (`d:\job\index.html`)
A 100% self-contained, high-fidelity interactive application built using React, Tailwind CSS, and Lucide Icons imported via CDN.
- **Why it exists**: It runs **instantly** on any system without requiring Node.js, npm installations, MongoDB connections, Firebase auth credentials, or build tools.
- **How to run it**: 
  - Double-click `d:\job\index.html` or open it directly in Google Chrome, Microsoft Edge, or Safari!
  - Fully explore the filters, search mechanics, dynamic resume analysis feedback, recruiter job postings, admin verifying logs, and support bot instantly.

### 2. Modular Production-Ready Full-Stack Codebase
A fully structured, scalable production architecture matching professional engineering code standards:
- **Frontend (`d:\job\frontend/`)**: React.js SPA set up with Vite, Tailwind CSS configs, modular React context, and responsive pages.
- **Backend (`d:\job\backend/`)**: Node.js + Express.js REST API with database connections, JWT authentication middlewares, modular router controllers, and structured MongoDB data models.

---

## 🛠️ Production Codebase Setup & Run Guide

To migrate the modular code to a live staging or production environment, follow these steps:

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- [MongoDB](https://www.mongodb.com/) (running instance local or Atlas cloud string)

---

### Step 1: Backend Setup
1. Open your terminal and navigate to the backend directory:
   ```bash
   cd d:\job\backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure your Environment variables. Create a `.env` file in `d:\job\backend/`:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/keralahire
   JWT_SECRET=keralahire_secure_jwt_secret_key_2026
   NODE_ENV=development
   ```
4. Boot the Express API server:
   ```bash
   # Production mode
   npm start
   
   # Development hot-reload mode
   npm run dev
   ```
   *The server will initialize at `http://localhost:5000` with the MongoDB cluster linked.*

---

### Step 2: Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd d:\job\frontend
   ```
2. Install build packages:
   ```bash
   npm install
   ```
3. Spin up the Vite development server:
   ```bash
   npm run dev
   ```
4. Access the application at `http://localhost:3000` (preconfigured with hot-reloading and Express port routing proxy).

---

## 📂 Core Directory Tree Map

```
d:\job\
├── index.html                     # Instant Browser-Ready Production Prototype
├── README.md                      # Platform Setup & Run Manual
│
├── frontend/                      # Production-Ready React + Vite Client
│   ├── package.json               # Frontend dependencies (React, Vite, Framer Motion)
│   ├── tailwind.config.js         # Custom emerald/gold color parameters
│   ├── vite.config.js             # Proxies API requests to Express server
│   ├── index.html                 # Main template index mount
│   └── src/
│       ├── main.jsx               # Render compiler
│       ├── index.css              # Custom scrollbars & glassmorphic classes
│       ├── App.jsx                # Seeker/Recruiter page router & dynamic state
│       └── utils/
│           └── mockData.js        # Seed lists of Kochi Infopark & Technopark jobs
│
└── backend/                       # Node.js + Express REST API Server
    ├── package.json               # Backend packages (Express, Mongoose, JWT, Bcrypt)
    ├── server.js                  # Entry server point mapping routers & CORS
    ├── config/
    │   └── db.js                  # Mongoose MongoDB connection builder
    ├── middleware/
    │   ├── authMiddleware.js      # JWT authorization & Recruiter role checks
    │   └── errorMiddleware.js     # Global REST error payload parser
    ├── models/                    # Mongoose database validation schemas
    │   ├── User.js                # Profile & Auth Schema
    │   ├── Company.js             # Star ratings & Review logs Schema
    │   ├── Job.js                 # Requisitions & District location Schema
    │   └── Application.js         # Pipeline progress & Candidate message threads Schema
    ├── controllers/               # Business routing controllers
    │   ├── authController.js
    │   ├── jobController.js
    │   ├── companyController.js
    │   └── applicationController.js
    └── routes/                    # API endpoints routes
        ├── authRoutes.js
        ├── jobRoutes.js
        ├── companyRoutes.js
        └── applicationRoutes.js
```

---

## 🌟 Key Features Walkthrough

### 1. Hero Search & Kerala Accents
The Hero section utilizes an abstract flowing emerald background overlaid with traditional Kerala motifs. Search parameters enable multi-criteria queries covering job titles, companies, and districts (Kochi, Thiruvananthapuram, Thrissur, etc.).

### 2. Side-by-Side Unified Dashboards
Switch between Candidate, Recruiter, and Platform Admin roles instantly inside the profile avatar menu.
- **Candidate Dashboard**: Tracks applied job cards, displays an interactive timeline of application states, and offers personalized AI job recommendations based on profile skills.
- **Recruiter Dashboard**: Post new job vacancies (which go directly to the Admin queue), shortlist applicants, and initiate real-time message replies.
- **Admin Panel**: Screen pending job drafts, verify incubator startup badges (adding golden KSUM labels), and review active metrics charts.

### 3. AI Resume Score Analyzer
Simulate an advanced AI screening model. On resume upload, the system analyzes CV text compatibility against target skills, outputting a precise score (e.g., 85%), highlighting matched terms, identifying missing keys, and detailing bulleted tips for CV improvement.

### 4. Floating support KeraBot
A constant floating virtual assistant configured to reply to FAQs regarding Technopark campuses, KSUM incubation, and interview preparation.
