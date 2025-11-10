# Terraform Notes

## Files Included
- vpc.tf — creates VPC, subnets, routes
- eks.tf — creates EKS cluster + node groups
- iam.tf — IAM roles (IRSA)
- variables.tf — input variables
- outputs.tf — outputs for kubeconfig
- provider.tf — AWS provider config

## Commands
Initialize:
```
terraform init
```

Plan:
```
terraform plan
```

Apply:
```
terraform apply -auto-approve
```

Destroy:
```
terraform destroy
```
