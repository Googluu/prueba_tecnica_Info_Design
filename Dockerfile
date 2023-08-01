FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN mkdir src

COPY src ./src/

EXPOSE 4000

CMD [ "npm", "run", "dev" ]