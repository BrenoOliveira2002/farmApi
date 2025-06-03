import { getDashboard } from "@dashboard/getDashboard/index";
import { IGetDashboardController } from "./dashboardInterface";
import { GetDashboardController } from "./getDashboard";


export const getDashboardController: IGetDashboardController = new GetDashboardController({
    getDashboard: getDashboard
})
