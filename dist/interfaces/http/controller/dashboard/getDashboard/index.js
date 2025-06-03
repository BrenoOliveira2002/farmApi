"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardController = void 0;
const index_1 = require("../../../../../application/useCases/dashboard/getDashboard/index");
const getDashboard_1 = require("./getDashboard");
exports.getDashboardController = new getDashboard_1.GetDashboardController({
    getDashboard: index_1.getDashboard
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW50ZXJmYWNlcy9odHRwL2NvbnRyb2xsZXIvZGFzaGJvYXJkL2dldERhc2hib2FyZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5REFBNkQ7QUFFN0QsaURBQXdEO0FBRzNDLFFBQUEsc0JBQXNCLEdBQTRCLElBQUkscUNBQXNCLENBQUM7SUFDdEYsWUFBWSxFQUFFLG9CQUFZO0NBQzdCLENBQUMsQ0FBQSJ9