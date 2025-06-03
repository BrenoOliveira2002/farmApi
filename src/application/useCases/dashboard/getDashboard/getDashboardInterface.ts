import { IFarmRepository } from "@repositories/farm/farmInterface";

export interface IGetDashboard {
  execute(): Promise<any>;
}

export interface IGetDashboardProps{
    farmRepository: IFarmRepository  
}