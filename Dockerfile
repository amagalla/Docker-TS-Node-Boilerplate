FROM node:16 as base

WORKDIR /app

COPY . .

RUN npm install

COPY . .

FROM base as production

ENV NODE_PATH=./dist

RUN npm run build