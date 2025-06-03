"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaService = void 0;
const external_1 = require("../../../../generated/client");
const initialConfig = process.env.S_INTERNAL_LOG_TYPES ? process.env.S_INTERNAL_LOG_TYPES.split(",") : ["error"];
const prismaService = new external_1.PrismaClient({
    log: initialConfig
});
exports.prismaService = prismaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcmZhY2VzL2RhdGFiYXNlL3ByaXNtYS9jb25uZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUF1RDtBQUl2RCxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFpQixDQUFBO0FBRWhKLE1BQU0sYUFBYSxHQUFHLElBQUksdUJBQVksQ0FBQztJQUNuQyxHQUFHLEVBQUUsYUFBYTtDQUNyQixDQUFDLENBQUE7QUFFTSxzQ0FBYSJ9