import { IGetDashboardController, IGetDashboardControllerProps } from "./dashboardInterface";

export class GetDashboardController implements IGetDashboardController  {
  constructor(private props: IGetDashboardControllerProps) {}

  async execute() {

    return await this.props.getDashboard.execute();

  }
}
