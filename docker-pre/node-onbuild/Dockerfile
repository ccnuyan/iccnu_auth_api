FROM node:6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ONBUILD ARG NODE_ENV
ONBUILD ENV NODE_ENV $NODE_ENV
ONBUILD COPY package.json /usr/src/app/
ONBUILD RUN npm install --registry=https://registry.npm.taobao.org
ONBUILD COPY . /usr/src/app

CMD [ "npm", "start" ]