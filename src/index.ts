import { logger } from "@lib/pino";
import { server } from "./server";
import { prismaService } from "./interfaces/database/prisma/connection"

async function signalHandler() {
    await prismaService.$disconnect();
    logger.warn("Conexão com o banco de dados encerrada")
    process.exit(110)
}

prismaService.$connect()
    .then(async()=> {
        logger.info("Conexao com o banco de dados realizada com sucesso!")
        server
            .listen(3000, () => logger.info(`O servidor esta rodando na porta: 3000`))
            .on("error", error => logger.error(`Falha ao subir o processo ${process.pid} pelo seguinte motivo: ${error.message}`))

            process.on("SIGINT", signalHandler)
            process.on("SIGTERM", signalHandler)
            process.on("SIGQUIT", signalHandler)

        })
        .catch(async (error: any) => {
            logger.error("Falha ao se conectar com o banco de dados!")
            process.exit(110)
        })