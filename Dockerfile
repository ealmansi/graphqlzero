FROM node:10

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .
RUN yarn bootstrap
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]
