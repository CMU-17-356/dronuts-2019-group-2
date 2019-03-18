
# Setup and build the client

FROM node:9.4.0-alpine as client

WORKDIR /usr/app/client/
COPY client/package*.json ./
RUN npm install --no-optional
COPY client/ ./
RUN npm run build
RUN npm rebuild node-sass



# Setup the server

#FROM node:9.4.0-alpine

#WORKDIR /usr/app/
#COPY --from=client /usr/app/client/build/ ./client/build/
#WORKDIR /usr/app/server/
#COPY server/package*.json ./
#RUN npm install 
#COPY server/ ./


#EXPOSE 80

CMD ["npm", "start"]
