"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.producerRoutes = void 0;
const express_1 = require("express");
const create_1 = require("../controller/producer/create");
const delete_1 = require("../controller/producer/delete");
const producerRoutes = (0, express_1.Router)();
exports.producerRoutes = producerRoutes;
producerRoutes.post("/", async (request, response) => {
    const data = request.body;
    await create_1.createProducerController.execute(data);
    return response.status(201).json({
        status: 201,
        result: "Produtor criado com sucesso!"
    });
});
producerRoutes.delete("/", async (request, response) => {
    const uuid = request.query.uuid;
    await delete_1.deleteProducerController.execute(uuid);
    return response.status(200).json({
        status: 200,
        result: "Produtor deletado com sucesso!"
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjZXJSb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJmYWNlcy9odHRwL3JvdXRlcy9wcm9kdWNlclJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBb0Q7QUFDcEQsMERBQXlFO0FBQ3pFLDBEQUF5RTtBQUV6RSxNQUFNLGNBQWMsR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQTtBQXFDdEIsd0NBQWM7QUFuQ3ZCLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBQyxPQUFnQixFQUFFLFFBQWtCLEVBQUUsRUFBRTtJQUNuRSxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFBO0lBRXpCLE1BQU0saUNBQXdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBRTVDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0IsTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsOEJBQThCO0tBQ3pDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBO0FBZUYsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLE9BQWdCLEVBQUUsUUFBa0IsRUFBRSxFQUFFO0lBQ3JFLE1BQU8sSUFBSSxHQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBYyxDQUFBO0lBRTNDLE1BQU0saUNBQXdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBRTVDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0IsTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsZ0NBQWdDO0tBQzNDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=