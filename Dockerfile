FROM node:8

MAINTAINER devops@onix-systems.com

ARG BOTANIO_TOKEN=token
ARG NODE_ENV=staging
ARG TELEGRAM_BOT_TOKEN=token
ARG HOST=localhost

ENV BOTANIO_TOKEN=${BOTANIO_TOKEN} \
    NODE_ENV=${NODE_ENV} \
    TELEGRAM_BOT_TOKEN=${TELEGRAM_BOT_TOKEN} \
    HOST=${HOST}

RUN mkdir -p /app

WORKDIR /app

COPY ./ ./

RUN npm install

CMD npm start
