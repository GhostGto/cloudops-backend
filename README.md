# 🚀 Project Backend - Node.js + Express + Docker

This is the **backend service** for the DevOps Portfolio Project.  
It is a simple Node.js + Express API running inside Docker, with CI/CD configured via GitHub Actions.

---

## 📌 Features
- Healthcheck endpoint (`/health`)
- Items endpoint (`/items`)
- Metrics endpoint (`/metrics`) (for Prometheus scraping)
- CI/CD pipeline with GitHub Actions
- Dockerized for easy deployment

---

## 🛠️ Tech Stack
- **Node.js** (Express)
- **Docker**
- **GitHub Actions** (CI/CD)
- **Prometheus** (metrics scraping)

---

## 📂 Project Structure
```
src/
└── app.js # Express API
tests/
└── test.js # Basic Jest test
Dockerfile
package.json
.github/workflows/ci-cd-backend.yml
```

---

## 🚀 How to Run Locally
```bash
# Clone repo
git clone https://github.com/YOUR_USERNAME/project-backend.git
cd project-backend

# Install dependencies
npm install

# Run backend
npm start
API will run on: http://localhost:3000

🐳 Run with Docker
docker build -t project-backend .
docker run -p 3000:3000 project-backend

⚙️ CI/CD Pipeline
Runs on push to main
Steps:
Install dependencies
Run tests
Build Docker image
Push to DockerHub
```
   [Developer]
       |
       | git push
       v
[GitHub Repository]
       |
       | GitHub Actions CI/CD
       v
+-----------------------+
|   CI/CD Pipeline      |
|-----------------------|
| 1. Checkout Code      |
| 2. Setup Node.js      |
| 3. Install deps       |
| 4. Run tests          |
| 5. Build Docker image |
| 6. Push to DockerHub  |
| 7. Deploy to EC2      |
+-----------------------+
       |
       v
 [DockerHub Registry]
       |
       v
[EC2 Instance with Docker]
       |
       | Docker-compose runs
       v
+-----------------------+
| Backend Container     |
|-----------------------|
| Node.js + Express App |
| /health, /items,      |
| /metrics              |
+-----------------------+
       |
       v
[Prometheus + Grafana (Optional)]
       |
       v
Monitoring Dashboard & Alerts
