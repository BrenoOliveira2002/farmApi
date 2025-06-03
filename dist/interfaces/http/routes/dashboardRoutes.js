"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardRoutes = void 0;
const getDashboard_1 = require("../../../application/useCases/dashboard/getDashboard");
const express_1 = require("express");
const dashboardRoutes = (0, express_1.Router)();
exports.dashboardRoutes = dashboardRoutes;
dashboardRoutes.get("/", async (request, response) => {
    const data = request.body;
    const dashboard = await getDashboard_1.getDashboard.execute();
    return response.status(201).json({
        status: 200,
        response: dashboard
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkUm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVyZmFjZXMvaHR0cC9yb3V0ZXMvZGFzaGJvYXJkUm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBEQUF1RDtBQUN2RCxxQ0FBb0Q7QUFFcEQsTUFBTSxlQUFlLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUE7QUFhdEIsMENBQWU7QUFYekIsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLE9BQWdCLEVBQUUsUUFBa0IsRUFBRSxFQUFFO0lBQ25FLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUE7SUFFekIsTUFBTSxTQUFTLEdBQUcsTUFBTywyQkFBWSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBRS9DLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0IsTUFBTSxFQUFFLEdBQUc7UUFDWCxRQUFRLEVBQUUsU0FBUztLQUN0QixDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9