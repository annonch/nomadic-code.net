build: check-env
	npm i
	npm run build
	@echo ""
	@echo "Building Docker Image"
	@echo ""
	@gcloud config set project nomadic-code
	@podman build . --platform linux/amd64 -t us-central1-docker.pkg.dev/nomadic-code/personal/site:${TAG}

publish: build
	@podman push us-central1-docker.pkg.dev/nomadic-code/personal/site:${TAG}

setup:
	gcloud auth login
	gcloud auth application-default login
	gcloud auth configure-docker us-central1-docker.pkg.dev
	gcloud config set project nomadic-code

deploy: check-env
	gcloud config set project nomadic-code
	terraform init
	terraform apply -var TAG=${TAG} -auto-approve

local: check-env
	@podman run -dt --name site -p 3000:3000 us-central1-docker.pkg.dev/nomadic-code/personal/site:${TAG}
       
check-env:
ifndef TAG
	$(error TAG is undefined)
endif

reset:
	@podman stop site || true
	@podman rm site || true
	@rm -rf node_modules

