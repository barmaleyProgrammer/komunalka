# step 1 (build stage)
FROM node:16-slim as build-stage
WORKDIR /app
COPY ./package*.json ./
RUN npm install --force
COPY . ./
RUN npm run build

# step 2 (production-stage)
FROM nginx:1.21.6 as production-stage
WORKDIR /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/build/ /usr/share/nginx/html/
