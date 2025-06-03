FROM node:22.2.0

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g ts-node-dev

EXPOSE 3000

CMD ["ts-node-dev", "--respawn", "--transpile-only", "--require", "tsconfig-paths/register", "src/index.ts"]
