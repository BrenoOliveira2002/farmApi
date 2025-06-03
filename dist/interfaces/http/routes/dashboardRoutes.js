"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardRoutes = void 0;
const express_1 = require("express");
const getDashboard_1 = require("../controller/dashboard/getDashboard");
const dashboardRoutes = (0, express_1.Router)();
exports.dashboardRoutes = dashboardRoutes;
dashboardRoutes.get("/", async (request, response) => {
    const data = request.body;
    const dashboard = await getDashboard_1.getDashboardController.execute();
    return response.status(201).json({
        status: 200,
        response: dashboard
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkUm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVyZmFjZXMvaHR0cC9yb3V0ZXMvZGFzaGJvYXJkUm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFvRDtBQUNwRCxxRkFBNEY7QUFFNUYsTUFBTSxlQUFlLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUE7QUFhdEIsMENBQWU7QUFYekIsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLE9BQWdCLEVBQUUsUUFBa0IsRUFBRSxFQUFFO0lBQ25FLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUE7SUFFekIsTUFBTSxTQUFTLEdBQUcsTUFBTSxxQ0FBc0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUV4RCxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdCLE1BQU0sRUFBRSxHQUFHO1FBQ1gsUUFBUSxFQUFFLFNBQVM7S0FDdEIsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==