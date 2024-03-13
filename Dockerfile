FROM node:latest

WORKDIR /procedimento/sistemasDistribuidos

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
