# CozyBooks – Full DevOps Project (Local → Production on AWS EKS with Terraform)

A complete production-grade DevOps case study deploying a microservices-based web application using Docker, Kubernetes, Terraform, AWS EKS, Route53, ACM SSL, ALB, CloudWatch & GitHub Actions CI/CD.

## 1. Architecture (Terraform + EKS)
(See architecture-diagram.md)

## 2. Repository Structure
Included: frontend, backend, docker-compose, k8s, terraform, GitHub Actions.

## 3. Local Development
Run stack:
```
docker compose up --build
```

## 4. Kubernetes
Namespaces, deployments, services, configmaps, secrets, HPAs.

## 5. Terraform IaC
Provisions VPC, subnets, EKS cluster, node groups, IAM.

## 6. SSL + Domain
ALB ingress, ACM SSL, Route53 A-record.

## 7. CI/CD
GitHub Actions builds → DockerHub → deploy to EKS.

## 8. Monitoring
CloudWatch log groups and metrics configured.

## 9. Production URL
https://litecodex.in

## 10. Deployment
Push to main → auto deploy.
