# SkillBridge — Skill Gap Analyzer & Career Roadmap

React + Vite frontend, Spring Boot REST API, MySQL persistence.

## Included functionality
- Registration, login and JWT-protected user dashboard.
- Six role-specific MCQ assessment tracks: AI/ML Engineer, Full Stack Developer, Data Scientist, Software Engineer, Data Analyst and Cloud Engineer.
- Six questions per career track; results are evaluated and saved to MySQL.
- Skill gap analysis and readiness score based on the latest saved exam.
- Weekly learning roadmap with learning documentation/tutorial links and practical project suggestions.
- Roadmap completion checkboxes saved in the browser's local storage for the current user/browser.

## Requirements
- Node.js 20.19+ or 22.12+
- Java 21+
- MySQL 8+

## 1. Database
Start MySQL and create the database (or allow the app to create it):

```sql
CREATE DATABASE skillbridge_db;
```

The backend reads credentials from environment variables. In PowerShell, before starting the backend:

```powershell
$env:DB_USERNAME="root"
$env:DB_PASSWORD="YOUR_MYSQL_PASSWORD"
```

Do not commit your real database password to Git.

## 2. Start backend
Open PowerShell:

```powershell
cd .\backend
.\mvnw.cmd spring-boot:run
```

Backend: http://localhost:8080
Health endpoint: http://localhost:8080/api/health

## 3. Start frontend
Open a second PowerShell window:

```powershell
cd .\frontend
npm install
npm run dev
```

Open the URL printed by Vite (normally http://localhost:5173).

## 4. Use the application
1. Register or log in.
2. Open the dashboard and choose **Take Career Exam**.
3. Select one of the six career paths.
4. Answer all six questions and submit.
5. Return to the dashboard to view readiness, strong/weak/missing skills and the roadmap.
6. Mark roadmap weeks completed; progress is stored in this browser.

## API endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/user/profile` (JWT)
- `POST /api/assessments` (JWT)
- `GET /api/assessments/analysis` (JWT)
- `GET /api/assessments/roadmap` (JWT)

## Notes / limitations
- The included quizzes are short foundational screening assessments, not professional certification exams.
- Readiness is a simple rule-based score, not an AI model prediction.
- Roadmap completion is currently browser-local (localStorage), not synchronized between devices.
- External learning and project links require an internet connection.
