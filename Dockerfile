FROM node:14.18.0
WORKDIR /home/app

COPY package*.json ./

RUN npm install


COPY . .

EXPOSE 3000

CMD ["npm","run","deploy"]