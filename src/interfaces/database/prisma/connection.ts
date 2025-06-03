import { PrismaClient } from "@prisma/client/external";

type ILogsTypes = "info" | "error" | "warn" | "query"

const initialConfig = process.env.S_INTERNAL_LOG_TYPES ? process.env.S_INTERNAL_LOG_TYPES.split(",") as ILogsTypes[] : ["error"] as ILogsTypes[]

const prismaService = new PrismaClient({
    log: initialConfig
})

export {prismaService}