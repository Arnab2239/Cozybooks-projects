# CozyBooks – Full DevOps Project (Local → Production on AWS EKS)

A complete microservices-based book‑store demo project deployed using **Docker, Kubernetes, AWS EKS, Route53, ACM SSL, ALB, CloudWatch & GitHub Actions CI/CD**.

---

# 📚 1. Project Overview

CozyBooks is a microservices web application containing:

* **Frontend**: Next.js (dynamic UI)
* **Backend**: Express.js API
* **REST communication** between services
* Deployed locally using Docker Compose
* Deployed in Production using **AWS EKS + AWS ALB + SSL + Route53**

---

# 📁 2. Repository Structure

```
book_store_project/
│
├── frontend/                # Next.js Application
├── backend/                 # Express.js API
│
├── docker-compose.yml       # Local development
│
├── k8s/
│   ├── dev/
│   ├── staging/
│   └── prod/
│
├── .github/workflows/
│   └── ci-cd.yaml           # GitHub Actions CI/CD Pipeline
│--- terraform
└── alb-setup/               # ALB + SSL + IAM roles setup
```

---

# 🧱 3. Architecture Diagram

```mermaid
graph TD;
    A[Developer Machine] -->|Docker Compose Up| B(Local Environment);
    B --> FE1[Frontend Container];
    B --> BE1[Backend Container];

    A -->|Git Push| CI[GitHub Actions];
    CI -->|Build & Push Images;
    CI -->|kubectl apply| EKS;

    subgraph Cloud [AWS Cloud]
        EKS[EKS Cluster]
        ALB[Application Load Balancer]
        FE[Frontend Deployment]
        BE[Backend Deployment]
        SVC_FE[Frontend Service]
        SVC_BE[Backend Service]
        CW[CloudWatch Logs + Metrics]
        ACM[ACM SSL Certificate]
        R53[Route53 DNS Domain]
    end

    EKS --> FE
    EKS --> BE
    FE --> SVC_FE
    BE --> SVC_BE

    ALB --> SVC_FE
    ALB --> SVC_BE

    R53 --> ALB
    ACM --> ALB
    EKS --> CW
```

---

# 🚀 4. Local Development (Docker Compose)

Run both microservices locally:

```bash
docker compose up --build
```

### ✔️ Benefits

* Easy local development
* One command = full stack ready
* Consistent environment matching production
* No need to install Node.js locally

---

# 🐳 5. Containerization (Docker)

### Backend & Frontend use:

* Multi‑stage builds → smaller images
* Environment variables using build args
* Production optimized images

### ✔️ Benefits

* Fast deployments
* Lightweight images
* Portable across machines & cloud

---

# ☸️ 6. Kubernetes (Dev / Staging / Prod)

### Includes:

* Deployments
* Services
* ConfigMaps
* Secrets
* HPAs (Auto‑scaling)
* Namespaces
* Ingress (ALB)

### ✔️ Benefits

* Auto‑scaling
* Self‑healing pods
* Separate environments (dev/staging/prod)
* Rolling updates

---

# 🌐 7. AWS Infrastructure

### Components:

* **EKS Cluster** (managed Kubernetes)
* **AWS Load Balancer Controller** for ALB
* **ACM SSL Certificate** for HTTPS
* **Route 53** domain mapping
* **CloudWatch Dashboards + Logs**

### ✔️ Benefits

* Fully secure HTTPS production site
* Global traffic routing
* Automatic scaling and monitoring
* Integrated logs + metrics

---

# 🔐 8. Security

* Kubernetes Secrets for API keys
* No hardcoded passwords
* IAM Roles for Service Accounts (IRSA)
* ALB security groups
* HTTPS enforced

### ✔️ Benefits

* Industry standard DevSecOps
* Zero hardcoded credentials
* Encrypted communication end‑to‑end

---

# 🔄 9. CI/CD Pipeline (GitHub Actions)

Pipeline tasks:

1. Lint + test
2. Build Docker images
3. Push to DockerHub
4. Deploy to Kubernetes using kubectl
5. Rollback on failure

### ✔️ Benefits

* Zero‑downtime deployments
* Fully automated delivery
* Automatic rollback safeguards
* Guaranteed consistent builds

---

# 📊 10. CloudWatch Logging & Monitoring

You configured:

* Application logs
* Dataplane logs
* Node/host logs
* Performance/metrics
* Dashboards

### ✔️ Benefits

* Real‑time system health monitoring
* Helps detect errors fast
* Performance optimization

---

# 📄 11. Deployment Flow Summary

1. **Write code** → push to GitHub
2. GitHub Actions **builds images + pushes to registry**
3. Pipeline deploys to **EKS dev → staging → prod**
4. ALB exposes services via HTTPS
5. Route53 domain points to ALB
6. CloudWatch monitors logs & metrics

---

# 📝 12. How to Scale

### Horizontal auto‑scaling:

* Increase pod replicas using HPA (CPU threshold)

```bash
kubectl get hpa -n prod
```

# 📌 13. Production URL

**[https://litecodex.in](https://litecodex.in)**
(Available after ALB + Route53 + ACM SSL)

---

# ✅ Project Completed

This project covers the **entire DevOps lifecycle** from local Docker to Production Kubernetes on AWS.

If you want, I can also generate:
✅ Terraform version for entire infrastructure
✅ Professional resume points
✅ Architecture PowerPoint
✅ Interview preparation based on this project
