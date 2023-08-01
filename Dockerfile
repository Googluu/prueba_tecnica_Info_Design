FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN mkdir src

COPY src ./src/

EXPOSE 3000

CMD [ "npm", "run", "dev" ]