
# Setup and build the client

FROM node:11.9.0-stretch as client

WORKDIR /usr/app/client/
COPY client/package*.json ./
RUN npm install --no-optional
COPY client/ ./
RUN npm run build
RUN npm rebuild node-sass



# Setup the server

FROM node:11.9.0-stretch

WORKDIR /usr/app/
COPY --from=client /usr/app/client/build/ ./client/build/
WORKDIR /usr/app/server/
COPY server/package*.json ./
RUN npm install 
COPY server/ ./


EXPOSE 80

CMD ["npm", "start"]
