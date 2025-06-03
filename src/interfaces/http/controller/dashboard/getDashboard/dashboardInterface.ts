import { IGetDashboard } from "@dashboard/getDashboard/getDashboardInterface"

export interface IGetDashboardController {
    execute(): Promise<any>
}

export interface IGetDashboardControllerProps {
    getDashboard: IGetDashboard
}