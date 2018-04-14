# NodeJS Express Boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/shierro/node-express-boilerplate.svg)](https://greenkeeper.io/)
- NodeJS boilerplate on top of express without the need to use Babel

## Built-in modules/libraries
- ExpressJS - NodeJS HTTP Framework
- Sequelize - NodeJS ORM
- Mogran - Express logger
- Winston - Logs transport to console/file. Logrotate daily added
- Dotenv - environment manager (TODO): Switch to dotenv-safe
- MochaJS - Testing framework
- Eslint - Base:AirBnB
- Swagger - Define/Document APIs

*and more*

## Requirements
 - NodeJS v7.6+
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
