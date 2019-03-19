FROM node:11.9.0-stretch

WORKDIR /usr/app

COPY package*.json ./
RUN npm install --verbose

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
