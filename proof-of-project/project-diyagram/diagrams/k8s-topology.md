# Kubernetes Logical Topology (Mermaid)

```mermaid
graph TD
  NS1[Namespace: dev] --- NS2[Namespace: staging] --- NS3[Namespace: prod]
  subgraph prod
    Ingress[Ingress (ALB)] --> FE_SVC[Service: frontend (ClusterIP)]
    Ingress --> BE_SVC[Service: backend (ClusterIP)]
    FE_SVC --> FE_DEP[Deployment: frontend]
    BE_SVC --> BE_DEP[Deployment: backend]
    FE_DEP --> FE_P1[(fe-pod-1)] & FE_P2[(fe-pod-2)]
    BE_DEP --> BE_P1[(be-pod-1)] & BE_P2[(be-pod-2)]
    HPA_FE[HPA frontend] -.scales.-> FE_DEP
    HPA_BE[HPA backend] -.scales.-> BE_DEP
    CM[ConfigMap] -.env.-> FE_DEP & BE_DEP
    SEC[Secret] -.env.-> FE_DEP & BE_DEP
  end
```
