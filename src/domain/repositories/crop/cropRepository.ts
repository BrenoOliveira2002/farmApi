import { PrismaClient } from '@prisma/client/external';
import { ICropRepository } from './cropInterface';
import { CropResponseDto } from 'application/dto/dtoFarmCrop';


export class CropRepository implements ICropRepository {
  constructor(private prismaRepository: PrismaClient) {}
  async findById(uuid: string): Promise<CropResponseDto | null> {
    const crop = await this.prismaRepository.crop.findUnique({ where: { uuid } });
    if (!crop) return null;

    return {
      uuid: crop.uuid,
      name: crop.name,
      createdAt: crop.createdAt,
      updatedAt: crop.updatedAt
    };
  }

  async findByName(name: string): Promise<CropResponseDto | null> {

    const crop = await this.prismaRepository.crop.findFirst({ where: { name } });
    if (!crop) return null;

    return {
      uuid: crop.uuid,
      name: crop.name,
      createdAt: crop.createdAt,
      updatedAt: crop.updatedAt
    };
  }

  async findAll(): Promise<CropResponseDto[]> {
    const crops = await this.prismaRepository.crop.findMany();
    return crops.map((crop: any) => ({
      uuid: crop.uuid,
      name: crop.name,
      createdAt: crop.createdAt,
      updatedAt: crop.updatedAt
    }));
  }
}
