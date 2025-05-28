#make file for running android and ios tests
.PHONY: help install test-android test-ios report docker-build docker-up docker-test docker-stop docker-start docker-clean docker-logs

help:
	@echo "Makefile for running Android and iOS tests"
	@echo "Usage:"
	@echo "  make install         - Install appium and webdriverio dependencies"
	@echo "  make test-android    - Run tests on Android emulator"
	@echo "  make test-ios        - Run tests on iOS realdevice"
	@echo "  make report          - Generate test report"
	@echo "  make docker-build    - Build Docker images"
	@echo "  make docker-up       - Start Docker containers with emulator and run tests"
	@echo "  make docker-test     - Run tests in Docker container"
	@echo "  make docker-stop     - Stop Docker containers"
	@echo "  make docker-start    - Start stopped Docker containers"
	@echo "  make docker-clean    - Clean up Docker containers and images"
	@echo "  make docker-logs     - View logs from Docker containers"
#Local execution
install:
	npm install

test-android:
	bash start-emulator.sh
	npm run wdio:android

test-ios:
	npm run wdio:ios

report:
	npm run wdio:report


# Docker execution
docker-build:
	docker compose build

docker-up:
	bash start-emulator.sh
	docker compose up --remove-orphans

docker-test:
	bash start-emulator.sh
	docker compose run appium

docker-stop:
	docker compose stop

docker-start:
	docker compose start

docker-clean:
	docker compose down --remove-orphans

docker-logs:
	docker compose logs