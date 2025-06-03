import { CreateProducerDto } from "application/dto/dtoProducer"
import { IGetDashboard } from "@dashboard/getDashboard/getDashboardInterface"

export interface IGetDashboardController {
    execute(data: CreateProducerDto): Promise<any>
}

export interface IGetDashboardControllerProps {
    getDashboard: IGetDashboard
}