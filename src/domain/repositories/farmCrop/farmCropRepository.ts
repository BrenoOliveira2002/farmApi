import { PrismaClient } from '@prisma/client/external';
import { IFarmCropRepository } from './farmCropInterface';
import { FarmCropDomain } from '@entities/farmCrop/farmCrop';

export class FarmCropRepository implements IFarmCropRepository {
  constructor(private prismaRepository: PrismaClient) {}

  async create(data: FarmCropDomain){
    await this.prismaRepository.farmCrop.create({
        data: {
            farmUuid: data.propsData.farmUuid,
            cropUuid: data.propsData.cropUuid
        }
    })
  }

  async delete(farmUUID: string) {
    
      await this.prismaRepository.farmCrop.updateMany({
        where: {
          farmUuid: farmUUID
        },
        data: {
          isDeleted: true
        }
      })
  }
}
