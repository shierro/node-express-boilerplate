# NodeJS Express Boilerplate

# Requirements
 - NodeJS v7+
 - NPM < v5.2 && > v4

# Install
```
$ git clone https://github.com/shierro/node-express-boilerplate <project_name>
$ cd <project_name> && npm i
```

# Set your Environment vars
```
$ cp .env.tpl .env
```
Change .env vars with your env

# Start Application
```
$ npm start
```

# Run unit test
```
$ npm test
```

# Get test coverage
```
$ npm run cover
```

# Have an existing SQL database? Auto generate your application models!
```
$ npm run generate:models
```
##### Since `sequelize-auto` does not yet support es6 funcs & custom indentation, check `/src/models/generated/` & manually fix problems so it will pass `npm run lint`

# Built-in Application Monitoring
  - http://localhost:8080/status
  - http://localhost:8080/healthcheck
  - http://localhost:8080/version

# OpenAPI(Swagger) Specs
-  http://localhost:8080/specs
