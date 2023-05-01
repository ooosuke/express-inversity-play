# express-inversity-play

![](https://github.com/ooosuke/express-inversity-play/actions/workflows/main.yml/badge.svg)

This is a demo application using express and inversity. It uses a clean architecture.
docker and docker-compose are required to start。

- express
- inversity
- inversity-express-utis
- prisma

## Setup

```bash
npm install
# or
yarn install
```

## Getting Started

First, run the development server:

```bash
cp env/local.env.template env/local.env
docker-compose up -d
```

## Database Migration

```bash
bin/migration.sh
```
