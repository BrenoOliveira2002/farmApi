"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmRepository = void 0;
class FarmRepository {
    constructor(prismaRepository) {
        this.prismaRepository = prismaRepository;
    }
    async create(data) {
        await this.prismaRepository.farm.create({
            data: {
                uuid: data.propsData.uuid,
                name: data.propsData.name,
                city: data.propsData.city,
                state: data.propsData.state,
                totalArea: data.propsData.totalArea,
                arableArea: data.propsData.arableArea,
                vegetationArea: data.propsData.vegetationArea,
                isDeleted: false,
                producerUUID: data.propsData.producerUuid,
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        });
    }
    async getAllFarm() {
        const a = await this.prismaRepository.farm.findMany({
            where: { isDeleted: false },
            include: {
                farmCrops: {
                    include: {
                        crop: true
                    }
                }
            }
        });
    }
    async update(uuid, data) {
        await this.prismaRepository.farm.update({
            where: { uuid },
            data: {
                name: data.name,
                city: data.city,
                state: data.state,
                totalArea: data.totalArea,
                arableArea: data.arableArea,
                vegetationArea: data.vegetationArea,
                updatedAt: new Date()
            }
        });
    }
    async delete(producerUUID) {
        await this.prismaRepository.farm.updateMany({
            where: { producerUUID },
            data: {
                isDeleted: true,
                updatedAt: new Date()
            }
        });
    }
    async findById(uuid) {
        const farm = await this.prismaRepository.farm.findUnique({
            where: { uuid, },
            include: {
                farmCrops: true,
            }
        });
        if (!farm || farm.isDeleted)
            return null;
        return {
            uuid: farm.uuid,
            name: farm.name,
            city: farm.city,
            state: farm.state,
            totalArea: farm.totalArea,
            arableArea: farm.arableArea,
            vegetationArea: farm.vegetationArea,
            createdAt: farm.createdAt,
            updatedAt: farm.updatedAt,
            crops: []
        };
    }
    async findByName(name) {
        const farm = await this.prismaRepository.farm.findFirst({
            where: { name, isDeleted: false }
        });
        if (!farm)
            return null;
        return {
            uuid: farm.uuid,
            name: farm.name,
            city: farm.city,
            state: farm.state,
            totalArea: farm.totalArea,
            arableArea: farm.arableArea,
            vegetationArea: farm.vegetationArea,
            createdAt: farm.createdAt,
            updatedAt: farm.updatedAt,
            crops: []
        };
    }
    async findAllByProducerUuid(producerUuid) {
        const farms = await this.prismaRepository.farm.findMany({
            where: { producerUUID: producerUuid, isDeleted: false },
            include: {
                farmCrops: true,
            }
        });
        return farms.map((farm) => ({
            uuid: farm.uuid,
            name: farm.name,
            city: farm.city,
            state: farm.state,
            totalArea: farm.totalArea,
            arableArea: farm.arableArea,
            vegetationArea: farm.vegetationArea,
            createdAt: farm.createdAt,
            updatedAt: farm.updatedAt,
            crops: []
        }));
    }
}
exports.FarmRepository = FarmRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFybVJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9tYWluL3JlcG9zaXRvcmllcy9mYXJtL2Zhcm1SZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLE1BQWEsY0FBYztJQUN6QixZQUFvQixnQkFBOEI7UUFBOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFjO0lBQUcsQ0FBQztJQUV0RCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQWdCO1FBQzNCLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdEMsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7Z0JBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7Z0JBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7Z0JBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7Z0JBQzNCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVM7Z0JBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVU7Z0JBQ3JDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWM7Z0JBQzdDLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZO2dCQUN6QyxTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7Z0JBQ3JCLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRTthQUNwQjtTQUNKLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsVUFBVTtRQUNkLE1BQU0sQ0FBQyxHQUFJLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbkQsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFF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