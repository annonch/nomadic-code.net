provider "google" {
  project = "nomadic-code"
  region  = "us-central1"
  zone    = "us-central1-c"
}

provider "google-beta" {
  project     = "nomadic-code"
  region      = "us-central1"
  zone        = "us-central1-c"
}

terraform {
  backend "gcs" {
    bucket  = "nomadic-code-infra"
    prefix  = "terraform/site"
  }
}

# create a service account to run as site
resource "google_service_account" "site" {
  account_id   = "site-sa-cr"
  display_name = "site Service Account"
}

# add permissions to invoke this cloud run
resource "google_cloud_run_service_iam_member" "site-invoker-chris" {
  service  = google_cloud_run_service.site.name
  location = google_cloud_run_service.site.location
  role     = "roles/run.invoker"
  member   = "user:annonch@gmail.com"
}
# add permissions to invoke this cloud run
resource "google_cloud_run_service_iam_member" "site-invoker-allUsers" {
  service  = google_cloud_run_service.site.name
  location = google_cloud_run_service.site.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}

# Display the service URL
output "service_url" {
  value = google_cloud_run_service.site.status[0].url
}

resource "google_cloud_run_service" "site" {
  provider = google-beta
  name     = "site"
  location = "us-central1"
  template {
    metadata {
      annotations = {
        "autoscaling.knative.dev/maxScale"  = "1"
	"autoscaling.knative.dev/minScale"  = "0"
	"startup_cpu_boost" = "true"
    	}	
      }
    spec {
      container_concurrency=80
      timeout_seconds=30
      service_account_name = google_service_account.site.email   
      containers {
	image = "us-central1-docker.pkg.dev/nomadic-code/personal/site:${var.TAG}"
	ports {
	  container_port = 3000
	}
	resources {
	  limits = {
	    cpu = "1000m"
	    memory = "512Mi" 
	  }
	}
      }
    }
  }
  traffic {
    percent         = 100
    latest_revision = true
  }

  lifecycle {
    ignore_changes = [
      metadata.0.annotations,
    ]
  }
}

variable "TAG" {
  type = string
}
