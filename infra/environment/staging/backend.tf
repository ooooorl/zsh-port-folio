# Terraform backend configuration
terraform {
  backend "s3" {
    bucket       = "tf-bckt-stg"
    key          = "staging-portfolio/terraform.tfstate"
    region       = "ap-southeast-1"
    encrypt      = true
    use_lockfile = true
  }
}
