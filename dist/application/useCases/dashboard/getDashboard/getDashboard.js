"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDashboard = void 0;
class GetDashboard {
    constructor(props) {
        this.props = props;
    }
    async execute() {
        const farms = await this.props.farmRepository.getAllFarm();
        const { totalFarms, totalHectares, cropsByStateMap } = farms.reduce((acc, farm) => {
            acc.totalFarms++;
            acc.totalHectares += farm.totalArea;
            const state = farm.state;
            if (!acc.cropsByStateMap[state]) {
                acc.cropsByStateMap[state] = new Map();
            }
            const uniqueCrops = new Set((farm.farmCrops || []).map(crop => crop.crop.name));
            uniqueCrops.forEach(cropName => {
                const stateMap = acc.cropsByStateMap[state];
                stateMap.set(cropName, (stateMap.get(cropName) || 0) + 1);
            });
            return acc;
        }, {
            totalFarms: 0,
            totalHectares: 0,
            cropsByStateMap: {}
        });
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
exports.GetDashboard = GetDashboard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcGxpY2F0aW9uL3VzZUNhc2VzL2Rhc2hib2FyZC9nZXREYXNoYm9hcmQvZ2V0RGFzaGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsWUFBWTtJQUN2QixZQUFvQixLQUF5QjtRQUF6QixVQUFLLEdBQUwsS0FBSyxDQUFvQjtJQUFHLENBQUM7SUFFakQsS0FBSyxDQUFDLE9BQU87UUFDWCxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRTNELE1BQU0sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQ2pFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ1osR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2pCLEdBQUcsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUVwQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBRXpCLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMvQixHQUFHLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7YUFDeEM7WUFFRCxNQUFNLFdBQVcsR0FBRyxJQUFJLEdBQUcsQ0FDekIsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQ25ELENBQUM7WUFFRixXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUM3QixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUQsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsRUFDRDtZQUNFLFVBQVUsRUFBRSxDQUFDO1lBQ2IsYUFBYSxFQUFFLENBQUM7WUFDaEIsZUFBZSxFQUFFLEVBQXlDO1NBQzNELENBQ0YsQ0FBQztRQUVGLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDOUUsS0FBSztZQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRSxJQUFJO2dCQUNKLFVBQVU7YUFDWCxDQUFDLENBQUM7U0FDSixDQUFDLENBQUMsQ0FBQztRQUVKLE9BQU87WUFDTCxVQUFVO1lBQ1YsYUFBYTtZQUNiLFlBQVk7U0FDYixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBakRELG9DQWlEQyJ9