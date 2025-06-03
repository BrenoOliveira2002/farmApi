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
        return await this.prismaRepository.farm.findMany({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFybVJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9tYWluL3JlcG9zaXRvcmllcy9mYXJtL2Zhcm1SZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLE1BQWEsY0FBYztJQUN6QixZQUFvQixnQkFBOEI7UUFBOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFjO0lBQUcsQ0FBQztJQUV0RCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQWdCO1FBQzNCLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdEMsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7Z0JBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7Z0JBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7Z0JBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7Z0JBQzNCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVM7Z0JBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVU7Z0JBQ3JDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWM7Z0JBQzdDLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZO2dCQUN6QyxTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7Z0JBQ3JCLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRTthQUNwQjtTQUNKLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsVUFBVTtRQUNkLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFF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