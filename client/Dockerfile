FROM node:12.2.0-alpine

RUN mkdir -p /srv/client
WORKDIR /srv/client

COPY package.json /srv/client
COPY package-lock.json /srv/clinet

RUN npm install

COPY . /srv/client

CMD [ "npm", "start" ]
