variable "NETLIFY_TOKEN" {}

terraform {
  required_providers {
    netlify = {
      source  = "terraform-providers/netlify"
      version = "~> 0.4.0"
    }
  }
  required_version = ">= 0.13"
}

provider "netlify" {
  token = var.NETLIFY_TOKEN
}

resource "netlify_site" "production" {
  name          = "nickawilliams"
  custom_domain = "www.nickawilliams.com"

  repo {
    provider      = "github"
    repo_path     = "RogWilco/Resume"
    repo_branch   = "master"
    command       = "yarn dist"
    dir           = "dist"
  }
}
