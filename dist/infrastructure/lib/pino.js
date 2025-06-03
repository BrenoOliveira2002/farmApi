"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const pino_1 = __importDefault(require("pino"));
const log = (0, pino_1.default)({
    enabled: true,
    transport: {
        target: "pino-pretty",
        options: {
            colorize: true,
            translateTime: "UTC:dd-mm-yyyy HH:MM:ss"
        }
    }
});
exports.logger = log;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9saWIvcGluby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnREFBd0I7QUFFeEIsTUFBTSxHQUFHLEdBQUcsSUFBQSxjQUFJLEVBQUM7SUFDZCxPQUFPLEVBQUUsSUFBSTtJQUNiLFNBQVMsRUFBRTtRQUNWLE1BQU0sRUFBRSxhQUFhO1FBQ3JCLE9BQU8sRUFBRTtZQUNMLFFBQVEsRUFBRSxJQUFJO1lBQ2QsYUFBYSxFQUFFLHlCQUF5QjtTQUMzQztLQUNEO0NBQ0gsQ0FBQyxDQUFBO0FBRVcsUUFBQSxNQUFNLEdBQUcsR0FBRyxDQUFBIn0=