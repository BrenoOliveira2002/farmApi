"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmCropRepository = void 0;
class FarmCropRepository {
    constructor(prismaRepository) {
        this.prismaRepository = prismaRepository;
    }
    async create(data) {
        await this.prismaRepository.farmCrop.create({
            data: {
                farmUuid: data.propsData.farmUuid,
                cropUuid: data.propsData.cropUuid
            }
        });
    }
    async delete(farmUUID) {
        await this.prismaRepository.farmCrop.updateMany({
            where: {
                farmUuid: farmUUID
            },
            data: {
                isDeleted: true
            }
        });
    }
}
exports.FarmCropRepository = FarmCropRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFybUNyb3BSZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi9yZXBvc2l0b3JpZXMvZmFybUNyb3AvZmFybUNyb3BSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLE1BQWEsa0JBQWtCO0lBQzdCLFlBQW9CLGdCQUE4QjtRQUE5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWM7SUFBRyxDQUFDO0lBRXRELEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBb0I7UUFDL0IsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUN4QyxJQUFJLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUTtnQkFDakMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUTthQUNwQztTQUNKLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQWdCO1FBRXpCLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDOUMsS0FBSyxFQUFFO2dCQUNMLFFBQVEsRUFBRSxRQUFRO2FBQ25CO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLFNBQVMsRUFBRSxJQUFJO2FBQ2hCO1NBQ0YsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNGO0FBdkJELGdEQXVCQyJ9