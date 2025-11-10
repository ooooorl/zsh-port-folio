# variable "role_arn" {
#   description = "IAM Role ARN that can access the S3 bucket"
#   type        = string
#   sensitive   = true
# }

variable "bucket_name" {
  description = "S3 bucket base name (will be appended with environment)"
  type        = string
}

variable "aws_region" {
  description = "AWS region to deploy to"
  type        = string
  default     = "ap-southeast-1"
}

variable "env" {
  description = "Deployment environment"
  type        = string
}

variable "owner" {
  description = "Owner of the resource"
  type        = string
}

variable "project_name" {
  description = "Project Name"
  type = string
}

# Route53 variables
# variable "zone_name" {
#   description = "Zone domain name (e.g., example.com)"
#   type = string
# }

# variable "record_name" {
#   description = "Subdomain to use (e.g., staging, www). Leave empty for apex domain."
#   type = string
# }