FROM node:latest

EXPOSE 4000

WORKDIR /app

COPY . .

RUN npm install

RUN npx prisma migrate deploy

RUN npm run build

CMD [ "npm", "start" ]

