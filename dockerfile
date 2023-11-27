# Fase de construcción
FROM node:16 as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
RUN npm run build

# Fase de producción
FROM nginx:alpine
COPY --from=build /app/www /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]