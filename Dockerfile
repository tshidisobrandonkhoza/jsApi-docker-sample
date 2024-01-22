FROM node:21-alpine

WORKDIR /jsAPI-Sample

COPY . .

RUN npm install

EXPOSE 4000

CMD [ "npm", "start" ]