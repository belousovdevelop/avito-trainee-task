FROM node:12.2.0-alpine

# Creating the app directory on the container and setting as working directory
RUN mkdir -p /srv/api
WORKDIR /srv/api

COPY package.json /srv/api
#COPY package-lock.json /srv/api

RUN npm install

COPY . /srv/api

CMD [ "npm", "start" ]
