"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = require("./infrastructure/lib/pino");
const server_1 = require("./server");
const connection_1 = require("./interfaces/database/prisma/connection");
async function signalHandler() {
    await connection_1.prismaService.$disconnect();
    pino_1.logger.warn("Conexão com o banco de dados encerrada");
    process.exit(110);
}
connection_1.prismaService.$connect()
    .then(async () => {
    pino_1.logger.info("Conexao com o banco de dados realizada com sucesso!");
    server_1.server
        .listen(3000, () => pino_1.logger.info(`O servidor esta rodando na porta: 3000`))
        .on("error", error => pino_1.logger.error(`Falha ao subir o processo ${process.pid} pelo seguinte motivo: ${error.message}`));
    process.on("SIGINT", signalHandler);
    process.on("SIGTERM", signalHandler);
    process.on("SIGQUIT", signalHandler);
})
    .catch(async (error) => {
    pino_1.logger.error("Falha ao se conectar com o banco de dados!");
    process.exit(110);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQ0FBbUM7QUFDbkMscUNBQWtDO0FBQ2xDLHdFQUF1RTtBQUV2RSxLQUFLLFVBQVUsYUFBYTtJQUN4QixNQUFNLDBCQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsYUFBTSxDQUFDLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFBO0lBQ3JELE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDckIsQ0FBQztBQUVELDBCQUFhLENBQUMsUUFBUSxFQUFFO0tBQ25CLElBQUksQ0FBQyxLQUFLLElBQUUsRUFBRTtJQUNYLGFBQU0sQ0FBQyxJQUFJLENBQUMscURBQXFELENBQUMsQ0FBQTtJQUNsRSxlQUFNO1NBQ0QsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFNLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLENBQUM7U0FDekUsRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLGFBQU0sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLE9BQU8sQ0FBQyxHQUFHLDBCQUEwQixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBRXRILE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFBO0lBQ25DLE9BQU8sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFBO0lBQ3BDLE9BQU8sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFBO0FBRXhDLENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBVSxFQUFFLEVBQUU7SUFDeEIsYUFBTSxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFBO0lBQzFELE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDckIsQ0FBQyxDQUFDLENBQUEifQ==