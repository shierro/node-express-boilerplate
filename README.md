# NodeJS Express Boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/shierro/node-express-boilerplate.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/shierro/node-express-boilerplate.svg?branch=master)](https://travis-ci.org/shierro/node-express-boilerplate)
[![Maintainability](https://api.codeclimate.com/v1/badges/a6fbd06ef529c7af570f/maintainability)](https://codeclimate.com/github/shierro/node-express-boilerplate/maintainability)
[![codecov](https://codecov.io/gh/shierro/node-express-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/shierro/node-express-boilerplate)
[![dependency status](https://david-dm.org/shierro/node-express-boilerplate/status.svg)](https://david-dm.org/shierro/node-express-boilerplate/status.svg)
[![devDependency status](https://david-dm.org/shierro/node-express-boilerplate/dev-status.svg)](https://david-dm.org/shierro/node-express-boilerplate/dev-status.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/shierro/node-express-boilerplate/badge.svg)](https://snyk.io/test/github/shierro/node-express-boilerplate)


- NodeJS boilerplate on top of express without the need to use Babel

## Built-in modules/libraries
- ExpressJS - NodeJS HTTP Framework
- Sequelize - NodeJS ORM
- Mogran - Express logger
- Winston - Logs transport to console/file. Logrotate daily added
- dotenv-safe - environment manager
- MochaJS - Testing framework
- Eslint - Base:AirBnB
- Swagger - Define/Document APIs

*and more*

## Requirements
 - NodeJS v7.0+
 - Yarn
 - Docker, docker compose/swarm for prod to maximize nginx caching & security(optional)

## Install
```
$ git clone https://github.com/shierro/node-express-boilerplate <project_name>
$ cd <project_name> && npm i
```

## Set your Environment vars (important)
```
$ cp .env.example .env
```
Change .env vars with your env

## Dev mode
```
$ yarn dev
```

## Run unit test
```
$ yarn test
```

## Generate test coverage
```
$ yarn run cover
```

## Prod mode w/ docker-compose
```
$ docker-compose up -d
```

## Uses sequelize & sequelize-auto to handle the model layer
```
$ yarn generate:models
```

## Built-in Application Monitoring
  - http://localhost:<PORT_IN_ENV>/healthcheck
  - http://localhost:<PORT_IN_ENV>/version

## Swagger Specs
-  http://localhost:<PORT_IN_ENV>/specs
