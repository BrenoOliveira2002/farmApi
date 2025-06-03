"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const handleApiError_1 = require("./interfaces/http/middleware/handleApiError");
const cors_1 = __importDefault(require("cors"));
const routes = __importStar(require("./interfaces/http/routes/index"));
const entryRequestLog_1 = require("./interfaces/http/middleware/entryRequestLog");
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const server = (0, express_1.default)();
exports.server = server;
server.set("trust proxy", true);
server.use((0, cors_1.default)());
server.use(express_1.default.urlencoded({ extended: true }));
server.use((0, compression_1.default)());
server.use(express_1.default.json());
server.use(body_parser_1.default.urlencoded({ extended: true }));
server.use(entryRequestLog_1.entryRequestLog);
Object.values(routes).forEach(routeFileReference => server.use(routeFileReference));
server.use(handleApiError_1.handleApiError);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdDQUE2QjtBQUM3QixzREFBK0I7QUFDL0IsK0RBQTJEO0FBQzNELGdEQUF1QjtBQUN2QixzREFBdUM7QUFDdkMsaUVBQTZEO0FBQzdELDhEQUFxQztBQUNyQyw4REFBcUM7QUFFckMsTUFBTSxNQUFNLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFZakIsd0JBQU07QUFWZCxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUMvQixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUEsY0FBSSxHQUFFLENBQUMsQ0FBQTtBQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsVUFBVSxDQUFDLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUMvQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUEscUJBQVcsR0FBRSxDQUFDLENBQUE7QUFDekIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7QUFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUE7QUFDbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQ0FBZSxDQUFDLENBQUE7QUFDM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFBO0FBQ25GLE1BQU0sQ0FBQyxHQUFHLENBQUMsK0JBQWMsQ0FBQyxDQUFBIn0=