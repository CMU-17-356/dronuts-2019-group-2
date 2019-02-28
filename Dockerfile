
# Setup and build the client

FROM node:11.9.0-alpine as client

WORKDIR /usr/app/client/
COPY client/package*.json ./
RUN npm install -qy
COPY client/ ./
RUN npm install -g -s --no-progress yarn && \
    yarn && \
    yarn run build && \
    yarn run prune && \
    yarn cache clean
RUN npm rebuild node-sass



# Setup the server

FROM node:11.9.0-alpine

WORKDIR /usr/app/
COPY --from=client /usr/app/client/build/ ./client/build/
WORKDIR /usr/app/server/
COPY server/package*.json ./
RUN npm install -g -s --no-progress yarn && \
    yarn && \
    yarn run build && \
    yarn run prune && \
    yarn cache clean
COPY server/ ./


EXPOSE 80

CMD ["npm", "start"]
