FROM node:11.9.0-stretch
MAINTAINER dronuts_4

# Change working directory
WORKDIR /usr/src/app

# Install App Dependencies
COPY . .
RUN npm install --verbose
RUN npm uninstall ajv
RUN npm rebuild node-sass
RUN npm install ajv@6.8.1 --verbose

# Copy App Source
#TODO Run any build scripts here

EXPOSE 3000
CMD [ "npm", "start" ]