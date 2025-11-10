# 🚀 CozyBooks – Complete DevOps + Terraform + Kubernetes Project

---

# 📚 1. Project Overview

CozyBooks is a cloud‑native microservices application consisting of:

* **Frontend:** Next.js (React Framework)
* **Backend:** Express.js REST API
* **Database:** (Optional extension – MongoDB / DynamoDB)
* **Communication:** REST API between microservices
* **Local environment:** Docker Compose
* **Production environment:** AWS EKS + ALB + SSL + Route53
* **Infrastructure as Code:** Terraform

---

# 📁 2. Repository Structure (With Terraform)

```
book_store_project/
│
├── frontend/                     # Next.js Application
├── backend/                      # Express.js API
│
├── docker-compose.yml            # Local Dev using Docker Compose
│
├── k8s/                          # Kubernetes YAMLs
│   ├── dev/
│   ├── staging/
│   └── prod/
│
├── alb-setup/                    # ALB Ingress + IAM + SSL Setup
│
├── terraform/                    # Entire Cloud Infrastructure
│   ├── vpc/                      # VPC, subnets, routing
│   ├── eks/                      # EKS cluster + node groups
│   ├── S3/
│   ├── security_group
│   ├── outputs.tf                # Exposed values
│   ├── variables.tf              # Variables
│   
│
└── .github/workflows/            # CI/CD Pipeline
    └── ci-cd.yaml
```

---

# 🧱  Architecture (Terraform + AWS)

### **High‑Level Architecture Components**

* **Terraform** provisions:

  * VPC (public + private subnets)
  * S3
  * EKS cluster + node groups

* **Kubernetes** deploys:

  * Frontend Deployment + Service
  * Backend Deployment + Service
  * ConfigMap & Secrets
  * Horizontal Pod Autoscalers (HPA)
  * ALB Ingress
* **CloudWatch** for logs and dashboards
* **GitHub Actions** for CI/CD

---

### **How to deploy Terraform**

```bash
cd terraform
terraform init
terraform validate
terraform plan
terraform apply -auto-approve

---

# 🐳  Local Development – Docker Compose

Run full stack locally:

```bash
docker compose up --build
```

### Benefits:

* Same environment as production
* Quick testing
* Portable setup

---

# ☸️  Kubernetes Deployments

Environments:

* **dev**
* **staging**
* **prod**

K8s includes:

* Deployments
* Services (ClusterIP)
* ConfigMaps
* Secrets
* HPAs
* Namespaces
* Ingress with ALB

Apply production manifests:

```bash
kubectl apply -f k8s/prod/
```

---

# 🌐  Domain + SSL (Route53 + ACM + ALB)

### Steps:

1. Buy or use an existing domain (litecodex.in)
2. Create Record Set in Route53 → point to ALB DNS
3. Request ACM SSL certificate
4. Validate via CNAME
5. Add annotation in ingress:

```yaml
alb.ingress.kubernetes.io/certificate-arn: <ACM-ARN>
```

6. Enforce HTTPS redirection

---

# 📡  CI/CD – GitHub Actions

Pipeline performs:

1. Build frontend + backend Docker images
2. Push to DockerHub
3. Connect to EKS
4. Apply Kubernetes YAML automatically
5. Rollback if failure

---

# 🔐  Security Best Practices

* IRSA (IAM Roles for Service Accounts)
* Kubernetes Secrets instead of hardcoded data
* SSL mandatory (HTTPS only)
* Security groups restrict access
* Terraform remote backend (S3 + DynamoDB) recommended

---

# 📊  Monitoring – CloudWatch

You configured:

* Application logs `/aws/containerinsights/.../application`
* Cluster performance `/aws/containerinsights/.../performance`
* Node/host logs
* Dashboards

Add metrics:

* Node CPU usage
* Pod restarts
* ALB request count
* 5xx/4xx errors

---

# 📄  Deployment Flow

```
Developer → GitHub → CI/CD → DockerHub → EKS → ALB → User
```

1. Developer pushes code
2. Actions builds + pushes Docker images
3. CI deploys to **dev → staging → prod**
4. ALB exposes endpoint
5. SSL secures traffic

---

# 📌  Production URL

**[https://litecodex.in](https://litecodex.in)**

---

# 📘  Future Enhancements

* Add Prometheus + Grafana
* Add ArgoCD 
* Add Terraform remote backend
* Add Vertical Pod Autoscaler

---

# ✅ Project Completed

This project demonstrates **real-world DevOps skills** across:
✔ Containers
✔ Kubernetes
✔ AWS EKS
✔ Terraform IaC
✔ CI/CD
✔ Monitoring
✔ SSL + Domain
✔ Load balancing

A perfect project for:

* DevOps Resume
* Job Interviews
* Portfolio
* Production-ready apps

