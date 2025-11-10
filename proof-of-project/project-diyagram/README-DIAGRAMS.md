# CozyBooks – Architecture Diagrams Pack

This bundle contains ready-to-use **Mermaid diagrams** for your repository, wiki, or documentation site. GitHub renders Mermaid automatically in Markdown.

## Files Included
- `diagrams/overall-architecture.md` – Full cloud view (Terraform + EKS + ALB + DNS + SSL)
- `diagrams/cicd-pipeline.md` – GitHub Actions build/deploy/rollback flow
- `diagrams/terraform-modules.md` – IaC module relationships
- `diagrams/k8s-topology.md` – Namespaces, Services, Deployments, HPAs
- `diagrams/network-ingress.md` – Route53 → ALB → Ingress → Services request flow
- `diagrams/monitoring.md` – CloudWatch logs/metrics & dashboards

## How to Use
1. Commit this folder to your repo (e.g., under `docs/` or at root).
2. Open any `.md` file on GitHub to see rendered diagrams.
3. To embed in README, use:
   ```markdown
   [View Overall Architecture](diagrams/overall-architecture.md)
   ```

## Tips
- For non-GitHub renderers, use Mermaid plugins or export to PNG/SVG.
- Keep diagrams versioned with infra changes (Terraform plans, k8s updates).
