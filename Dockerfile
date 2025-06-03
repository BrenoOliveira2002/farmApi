FROM node:22.2.0

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g ts-node-dev

COPY . .

EXPOSE 3000

CMD ["ts-node-dev", "--respawn", "--transpile-only", "src/index.ts"]
