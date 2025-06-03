import { IGetDashboard, IGetDashboardProps } from "./getDashboardInterface";

export class GetDashboard implements IGetDashboard {
  constructor(private props: IGetDashboardProps) {}

  async execute() {
    const farms = await this.props.farmRepository.getAllFarm();
    
    const { totalFarms, totalHectares, cropsByStateMap } = farms.reduce(
      (acc, farm) => {
        acc.totalFarms++;
        acc.totalHectares += farm.totalArea;

        const state = farm.state;
        
        if (!acc.cropsByStateMap[state]) {
          acc.cropsByStateMap[state] = new Map();
        }

        const validCropNames = (farm.farmCrops || [])
          .map(farmCrop => farmCrop.crop?.name)
          .filter((name): name is string => name !== undefined && name !== null && name.trim() !== '');

        const uniqueCrops = new Set(validCropNames);

        uniqueCrops.forEach(cropName => {
          const stateMap = acc.cropsByStateMap[state];
          stateMap.set(cropName, (stateMap.get(cropName) || 0) + 1);
        });

        return acc;
      },
      {
        totalFarms: 0,
        totalHectares: 0,
        cropsByStateMap: {} as Record<string, Map<string, number>>
      }
    );

    const cropsByState = Object.entries(cropsByStateMap).map(([state, cropMap]) => ({
      state,
      crops: Array.from(cropMap.entries()).map(([name, totalFarms]) => ({ 
        name, 
        totalFarms 
      }))
    }));

    return {
      totalFarms,
      totalHectares,
      cropsByState
    };
  }
}