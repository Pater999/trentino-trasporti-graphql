FROM node:16 as ts-compiler

WORKDIR /usr/app
COPY package*.json ./
COPY tsconfig*.json ./
COPY src ./src
COPY prisma ./prisma
RUN npm ci
RUN npm run build

FROM node:16 as ts-remover
WORKDIR /usr/app
COPY --from=ts-compiler /usr/app/package*.json ./
COPY --from=ts-compiler /usr/app/dist/src ./
RUN npm ci --omit=dev
COPY --from=ts-compiler /usr/app/node_modules/.prisma/client ./node_modules/.prisma/client

FROM gcr.io/distroless/nodejs:16
WORKDIR /usr/app
COPY --from=ts-remover /usr/app ./
CMD ["index.js"]