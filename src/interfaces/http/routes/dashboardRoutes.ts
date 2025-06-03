import { getDashboard } from "@dashboard/getDashboard";
import { Request, Response, Router } from "express";

const dashboardRoutes = Router()

dashboardRoutes.get("/", async(request: Request, response: Response) => {
    const data = request.body

    const dashboard = await  getDashboard.execute()

    return response.status(201).json({
        status: 200,
        response: dashboard
    })
})

 export { dashboardRoutes }