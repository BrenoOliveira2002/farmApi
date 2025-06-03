"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDashboard = void 0;
class GetDashboard {
    constructor(props) {
        this.props = props;
    }
    async execute() {
        const farms = await this.props.farmRepository.getAllFarm();
        let totalFarms = 0;
        let totalHectares = 0;
        const cropsByStateMap = {};
        console.log(farms.map((farm) => (console.log(farm.farmCrops.map((crop) => crop.name)))));
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
        console.log({ totalFarms, totalHectares, cropsByState });
        return {
            totalFarms,
            totalHectares,
            cropsByState
        };
    }
}
exports.GetDashboard = GetDashboard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcGxpY2F0aW9uL3VzZUNhc2VzL2Rhc2hib2FyZC9nZXREYXNoYm9hcmQvZ2V0RGFzaGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsWUFBWTtJQUN2QixZQUFvQixLQUF5QjtRQUF6QixVQUFLLEdBQUwsS0FBSyxDQUFvQjtJQUFHLENBQUM7SUFFakQsS0FBSyxDQUFDLE9BQU87UUFDWCxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRTNELElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdEIsTUFBTSxlQUFlLEdBQTJDLEVBQUUsQ0FBQztRQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkcsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDeEIsVUFBVSxFQUFFLENBQUM7WUFDYixhQUFhLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUVoQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzNCLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDN0I7WUFFRCxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxFQUFFO2dCQUN2QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNyQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN0QztnQkFDRCxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQzthQUNwQztTQUNGO1FBRUQsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM1RSxLQUFLO1lBQ0wsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUNqRixDQUFDLENBQUMsQ0FBQztRQUVKLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBQyxDQUFDLENBQUM7UUFDdkQsT0FBTztZQUNMLFVBQVU7WUFDVixhQUFhO1lBQ2IsWUFBWTtTQUNiLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUF4Q0Qsb0NBd0NDIn0=