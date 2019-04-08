FROM node:10.15.3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/

RUN yarn config set registry https://registry.npm.taobao.org

RUN yarn install --production && yarn cache clean
COPY . /usr/src/app

RUN npm run build

RUN npm run tsc

EXPOSE 7001

CMD [ "npm", "start" ]