FROM node:18

WORKDIR /app

RUN apt-get update && apt-get install -y netcat-openbsd

COPY package*.json ./
RUN npm install


COPY . .

EXPOSE 5000

COPY wait-for.sh ./
CMD ["./wait-for.sh", "mysql", "npm", "run", "dev"]
