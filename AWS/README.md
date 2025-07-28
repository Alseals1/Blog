# AWS CloudFormation Templates for Blog App

This folder contains AWS CloudFormation templates used to deploy and manage the infrastructure for the Fullstack Blog App project. These templates demonstrate real-world cloud engineering practices including VPC design, networking, routing, and security.

## What’s Included

- **vpcTemplate.yaml**  
  Provisions a custom VPC with public and private subnets, Internet Gateway (IGW), and route tables. Designed to follow best practices for scalability, security, and modular cloud architecture.

## Folder Structure

```
AWS/
├── vpcTemplate.yaml   # CloudFormation template to create
└── README.md          # This file
```

## Why Use CloudFormation?

CloudFormation lets you define your entire infrastructure as code, making it:

- **Repeatable**: Consistent environments across dev, staging, and prod.
- **Trackable**: Version-controlled in Git.
- **Scalable**: Easy to extend and reuse templates for other projects.

## How to Deploy

```bash
aws cloudformation create-stack \
  --stack-name Blog-VPC \
  --template-body file://aws/vpcTemplate.yaml \
  --region us-east-1 \
  --capabilities CAPABILITY_NAMED_IAM
```

## Validating the Template

```bash
aws cloudformation validate-template \
  --template-body file://aws/vpcTemplate.yaml
```

## Deleting the Stack

```bash
aws cloudformation delete-stack \
  --stack-name Blog-VPC
```

## Cloud Engineer Practices Demonstrated

- Designing secure, scalable networks (custom VPCs, public/private subnets)
- Infrastructure as Code with YAML and AWS CLI
- Clean documentation for future use and team handoff
- Aligned with AWS Free Tier usage and cost efficiency

Created by **Alandis Seals** — showcasing end-to-end infrastructure skills.
