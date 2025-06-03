import { CreateProducerDto } from "@dto/dtoProducer";
import { IGetDashboardControllerProps } from "./dashboardInterface";

export class GetDashboardController  {
  constructor(private props: IGetDashboardControllerProps) {}

  async execute(data: CreateProducerDto) {

    return await this.props.getDashboard.execute();

  }
}
