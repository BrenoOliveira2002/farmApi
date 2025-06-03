import { logger } from "@lib/pino";
import { NextFunction, Request, Response } from "express";


export function entryRequestLog(request: Request, response: Response, next: NextFunction) {
    const start = Date.now();

    if (request.method === "PUT" || request.method === "POST") {
        logger.info(request.body, `Requisição chegou via: ${request.method} em: ${request.url}, segue o body: `);
    }
    if (request.method === "GET" || request.method === "DELETE") {
        logger.info(request.query, `Requisição chegou via: ${request.method} em: ${request.url}, segue os parâmetros da URL:`);
    }

    response.on("finish", () => {
        logger.info(`Fim da requisição em: ${request.url}`);
    });

    next();
}
