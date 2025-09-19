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
## Arquitectura (Flowchart)

```mermaid
flowchart TD
    A[Developer] -->|git push| B[GitHub Repository]
    B -->|GitHub Actions CI/CD| C[CI/CD Pipeline]

    subgraph C[CI/CD Pipeline]
        C1[1. Checkout Code]
        C2[2. Setup Node.js]
        C3[3. Install deps]
        C4[4. Run tests]
        C5[5. Build Docker image]
        C6[6. Push to DockerHub]
        C7[7. Deploy to EC2]
    end

    C --> D[DockerHub Registry]
    D --> E[EC2 Instance with Docker]
    E -->|Docker-compose runs| F[Backend Container]

    subgraph F[Backend Container]
        F1[Node.js + Express App]
        F2[/health, /items, /metrics]
    end

    F --> G[Prometheus + Grafana (Optional)]
    G --> H[Monitoring Dashboard & Alerts]
```