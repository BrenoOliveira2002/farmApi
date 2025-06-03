import { PrismaClient } from '@prisma/client/external';
import { FarmResponseDto, UpdateFarmDto } from '@dto/dtoFarm';
import { IFarmRepository } from '../farm/farmInterface';
import { FarmDomain } from '@entities/farm/farm';

export class FarmRepository implements IFarmRepository {
  constructor(private prismaRepository: PrismaClient) {}

  async create(data: FarmDomain): Promise<void> {
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

  async getAllFarm(){ 
    const a =  await this.prismaRepository.farm.findMany({
      where: { isDeleted: false },
      include: {
        farmCrops: { 
          include: {
            crop: true
          }
        }
      }
    })
  }

  async update(uuid: string, data: UpdateFarmDto){
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

  async delete(producerUUID: string): Promise<void> {
    await this.prismaRepository.farm.updateMany({
      where: { producerUUID },
      data: {
        isDeleted: true,
        updatedAt: new Date()
      }
    });
  }

  async findById(uuid: string): Promise<FarmResponseDto | null> {
    const farm = await this.prismaRepository.farm.findUnique({
      where: { uuid, },
      include: {
        farmCrops: true,  
      }
    });
    if (!farm || farm.isDeleted) return null;

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

  async findByName(name: string): Promise<FarmResponseDto | null> {
    const farm = await this.prismaRepository.farm.findFirst({
      where: { name, isDeleted: false }
    });
    if (!farm) return null;
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

  async findAllByProducerUuid(producerUuid: string): Promise<FarmResponseDto[]> {
    const farms = await this.prismaRepository.farm.findMany({
      where: { producerUUID: producerUuid, isDeleted: false },
      include: {
        farmCrops: true,
      }
    });

    return farms.map((farm: any) => ({
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
