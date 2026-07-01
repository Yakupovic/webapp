FROM node:20-alpine

WORKDIR /app

# Installation des dependances
COPY package*.json ./
RUN npm install --omit=dev

# Copie du code source
COPY . .

# Lancement de l'application
CMD ["node", "app.js"]
