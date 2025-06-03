import { IGetDashboard, IGetDashboardProps } from "./getDashboardInterface";

export class GetDashboard implements IGetDashboard {
  constructor(private props: IGetDashboardProps) {}

  async execute() {
    const farms = await this.props.farmRepository.getAllFarm();

    let totalFarms = 0;
    let totalHectares = 0;
    const cropsByStateMap: Record<string, Record<string, number>> = {};
    console.log(farms.map((farm: any) => (console.log(farm.farmCrops.map((crop: any) => crop.name)))));
    for (const farm of farms) {
      totalFarms++;
      totalHectares += farm.totalArea;

      const state = farm.state;
      if (!cropsByStateMap[state]) {
        cropsByStateMap[state] = {};
      }

      for (const crop of farm.farmCrops || []) {
        const cropName = crop.name;
        if (!cropsByStateMap[state][cropName]) {
          cropsByStateMap[state][cropName] = 0;
        }
        cropsByStateMap[state][cropName]++;
      }
    }

    const cropsByState = Object.entries(cropsByStateMap).map(([state, crops]) => ({
      state,
      crops: Object.entries(crops).map(([name, totalFarms]) => ({ name, totalFarms }))
    }));

    console.log({totalFarms, totalHectares, cropsByState});
    return {
      totalFarms,
      totalHectares,
      cropsByState
    };
  }
}
