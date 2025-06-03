import pino from "pino";

const log = pino({
   enabled: true,
   transport: {
    target: "pino-pretty",
    options: {
        colorize: true,
        translateTime: "UTC:dd-mm-yyyy HH:MM:ss"
    }
   } 
})

export const logger = log