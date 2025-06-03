"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entryRequestLog = void 0;
const pino_1 = require("../../../infrastructure/lib/pino");
function entryRequestLog(request, response, next) {
    const start = Date.now();
    if (request.method === "PUT" || request.method === "POST") {
        pino_1.logger.info(request.body, `Requisição chegou via: ${request.method} em: ${request.url}, segue o body: `);
    }
    if (request.method === "GET" || request.method === "DELETE") {
        pino_1.logger.info(request.query, `Requisição chegou via: ${request.method} em: ${request.url}, segue os parâmetros da URL:`);
    }
    response.on("finish", () => {
        pino_1.logger.info(`Fim da requisição em: ${request.url}`);
    });
    next();
}
exports.entryRequestLog = entryRequestLog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnlSZXF1ZXN0TG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVyZmFjZXMvaHR0cC9taWRkbGV3YXJlL2VudHJ5UmVxdWVzdExvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvQ0FBbUM7QUFJbkMsU0FBZ0IsZUFBZSxDQUFDLE9BQWdCLEVBQUUsUUFBa0IsRUFBRSxJQUFrQjtJQUNwRixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFekIsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLEtBQUssSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN2RCxhQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsMEJBQTBCLE9BQU8sQ0FBQyxNQUFNLFFBQVEsT0FBTyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQztLQUM1RztJQUNELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxLQUFLLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDekQsYUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLDBCQUEwQixPQUFPLENBQUMsTUFBTSxRQUFRLE9BQU8sQ0FBQyxHQUFHLCtCQUErQixDQUFDLENBQUM7S0FDMUg7SUFFRCxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7UUFDdkIsYUFBTSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLEVBQUUsQ0FBQztBQUNYLENBQUM7QUFmRCwwQ0FlQyJ9