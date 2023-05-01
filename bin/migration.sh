#!/bin/sh
docker-compose run --rm app yarn prisma:migrate
