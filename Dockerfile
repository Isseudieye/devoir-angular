# ====== STAGE 1 : BUILD ANGULAR ======
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production

# ====== STAGE 2 : NGINX ======
FROM nginx:1.27-alpine

# Supprime la conf par défaut

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie les fichiers Angular buildés
COPY --from=build /app/dist/devoir-angular/ /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
