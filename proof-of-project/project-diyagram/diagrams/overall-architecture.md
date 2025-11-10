# Overall Architecture (Mermaid)

```mermaid
graph TD
  Dev[Developer Laptop] -->|git push| GitHub[GitHub]
  GitHub -->|Actions: build, test, push| DockerHub
  GitHub -->|kubectl apply| EKS[(AWS EKS Cluster)]
  subgraph AWS
    subgraph VPC[VPC - Public & Private Subnets]
      EKS --> NG[Managed Node Groups]
      ALB[Application Load Balancer] -->|HTTP/HTTPS| Ingress[ALB Ingress]
      Ingress --> FE[Frontend Service (ClusterIP)]
      Ingress --> BE[Backend Service (ClusterIP)]
      FE --> FE_DEP[Frontend Deployment]
      BE --> BE_DEP[Backend Deployment]
      FE_DEP --> FE_Pods[(Frontend Pods)]
      BE_DEP --> BE_Pods[(Backend Pods)]
      FE_Pods -->|REST| BE_Pods
    end
    ACM[ACM SSL] --> ALB
    R53[Route53 DNS] --> ALB
    CW[CloudWatch] <-.logs/metrics .-> EKS
  end
  DockerHub[(Docker Hub Registry)]
```
