variable "NETLIFY_TOKEN" {}

terraform {
  required_providers {
    netlify = {
      source  = "netlify/netlify"
      version = "~> 0.1.1"
    }
  }
  required_version = ">= 0.13"
}

provider "netlify" {
  token = var.NETLIFY_TOKEN
  default_team_slug = "nickawilliams"
}

data "netlify_site" "production" {
  id = "aca7217b-8f6a-4dbf-8bbb-2e7a0e49aa5f"
}

resource "netlify_site_domain_settings" "production" {
  site_id = data.netlify_site.production.id
  custom_domain = "www.nickawilliams.com"
}

resource "netlify_site_build_settings" "production" {
  site_id = data.netlify_site.production.id
  # functions_region = "us-east-1"
  build_command = "yarn dist"
  production_branch = "main"
  publish_directory = "dist"

  branch_deploy_branches = [
    "main"
  ]
}
