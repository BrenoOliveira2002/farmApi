import { Request, Response, Router } from "express";
import { getDashboardController } from "@interfaces/http/controller/dashboard/getDashboard";

const dashboardRoutes = Router()

dashboardRoutes.get("/dashboard", async(request: Request, response: Response) => {
    const data = request.body

    const dashboard = await getDashboardController.execute()

    return response.status(201).json({
        status: 200,
        response: dashboard
    })
})

 export { dashboardRoutes }