# # infra/modules/route53/main.tf
# data "aws_route53_zone" "zone" {
#   name         = var.zone_name
#   private_zone = false
# }

# data "cloudfront_distribution" "distribution" {
#   id = var.cloudfront_distribution_id
# }

# resource "aws_route53_record" "alias" {
#   zone_id = data.aws_route53_zone.zone.zone_id
#   name    = var.record_name != "" ? var.record_name : var.zone_name
#   type    = "A"

#   alias {
#     name                   = data.cloudfront_distribution.distribution.domain_name
#     zone_id                = data.cloudfront_distribution.distribution.hosted_zone_id  # CloudFront hosted zone ID
#     evaluate_target_health = false
#   }
# }