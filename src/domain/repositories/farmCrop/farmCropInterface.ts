import { FarmCropDomain } from "@entities/farmCrop/farmCrop";

export interface IFarmCropRepository {
  create(data: FarmCropDomain): Promise<void>;
  delete(farmUUID: string): Promise<void>;
}
