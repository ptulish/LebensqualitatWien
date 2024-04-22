FROM ubuntu:latest
LABEL authors="clientadmin"

ENTRYPOINT ["top", "-b"]

FROM node:16-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 80

