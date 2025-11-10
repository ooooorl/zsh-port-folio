# --- S3 Module ---
module "s3_bucket" {
  source = "../../modules/s3"

  bucket_name   = var.bucket_name
  env           = var.env
  force_destroy = true
  cloudfront_distribution_arn = module.cloudfront.distribution_arn

  tags = {
    Owner       = var.owner
    Environment = var.env
    CostCenter  = var.env
  }
}

# --- CloudFront Module ---
module "cloudfront" {
  source = "../../modules/cloudfront"

  project_name           = var.project_name
  s3_bucket_domain_name  = module.s3_bucket.bucket_domain_name
  domain_name            = "" # optional custom domain via route53
  acm_certificate_arn    = "" # optional
  tags = {
    Environment = var.env
    Project     = var.project_name
  }
}

# --- Route53 Module ---
# module "route53" {
#   source = "../../modules/route53"

#   zone_name = var.zone_name
#   record_name = "staging.example.com"
#   cloudfront_distribution_domain_name = module.cloudfront.domain_name
# }