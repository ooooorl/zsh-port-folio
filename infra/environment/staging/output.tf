output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  value       = module.cloudfront.domain_name
}

output "s3_bucket_name" {
  description = "Deployed S3 bucket name"
  value       = module.s3_bucket.bucket_name
}
