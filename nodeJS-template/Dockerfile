FROM node:20.15.1

WORKDIR /usr/src/node-app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run","dev" ]


