# NodeJS Express Boilerplate

## Requirements
 - NodeJS v8.1+
 - NPM v4+
 - Docker, docker compose/swarm for prod to maximize nginx caching & security(optional)

## Install
```
$ git clone https://github.com/shierro/node-express-boilerplate <project_name>
$ cd <project_name> && npm i
```

## Set your Environment vars
```
$ cp .env.tpl .env
```
Change .env vars with your env

## Dev mode
```
$ npm run dev
```

## Run unit test
```
$ npm test
```

## Generate test coverage
```
$ npm run cover
```

## Prod mode w/ docker-compose
```
$ docker-compose up -d
```

## Uses sequelize & sequelize-auto to handle the model layer
```
$ npm run generate:models
```

## Built-in Application Monitoring
  - http://localhost:<PORT_IN_ENV>/status
  - http://localhost:<PORT_IN_ENV>/healthcheck
  - http://localhost:<PORT_IN_ENV>/version

## OpenAPI(Swagger) Specs
-  http://localhost:<PORT_IN_ENV>/specs
