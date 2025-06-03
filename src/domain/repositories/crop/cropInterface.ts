import { CropResponseDto } from "@dto/dtoFarmCrop";

export interface ICropRepository {
  findById(uuid: string): Promise<CropResponseDto | null>;
  findByName(name: string): Promise<CropResponseDto | null>;
  findAll(): Promise<CropResponseDto[]>;
}
