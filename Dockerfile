FROM node:21-alpine

RUN npm install -g nodemon

WORKDIR /jsapi_sample

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm", "run", "dev"]