.PHONY: install test build start dev

help: ## Display available commands
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Setup all project dependencies
	yarn install

test: ## Launch all tests
	yarn test

build: ## Build server for production
	yarn build

start: ## Start production server
	yarn start

dev: ## Start developpement server
	yarn dev
