import { farmRepository } from "@repositories/farm";
import { GetDashboard } from "./getDashboard";
import { IGetDashboard } from "./getDashboardInterface";


export const getDashboard: IGetDashboard = new GetDashboard({
    farmRepository: farmRepository
})