# Trentino Trasporti Graphql

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql) ![Type-graphql](https://img.shields.io/badge/-TypeGraphQL-%23C04392?style=for-the-badge) ![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) ![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white) ![EsLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
[![Deploy to heroku](https://github.com/Pater999/trentino-trasporti-graphql/actions/workflows/deploy.yml/badge.svg)](https://github.com/Pater999/trentino-trasporti-graphql/actions/workflows/deploy.yml) ![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg)


A GraphQL backend for Trentino's public transports built for fun using Apollo Server, TypeGraphQL, Prisma, Docker & more....

## Local setup

Install dependencies
```
npm install
```



Run docker container
```
docker-compose up
```

You can seed the database using
```
npm run prisma:seed
```

**Server with sandbox is ready** at http://localhost:8080/graphql

A testing environment with *apollo server sandbox* is deployed on heroku [here](https://trentino-trasporti-graphql.herokuapp.com/graphql).

## Query Examples

#### Get all stops
```
curl 'http://localhost:8080/graphql' \
  -H 'Accept: */*' \
  -H 'content-type: application/json' \
  --data-raw '{"query":"query Stops {\n  stops {\n    stopId\n    stopName\n  }\n}\n","variables":{"where":{"stopId":"URBAN_2"}},"operationName":"Stops"}' \
  --compressed
```

GraphQL schema can be found [here](https://github.com/Pater999/trentino-trasporti-graphql/blob/master/src/schema/generated-schema.graphql).