import { CropDomain } from "../crops/crops";

export interface FarmProps {
  id?: number;
  uuid: string;
  name: string;
  city: string;
  state: string;
  totalArea: number;
  arableArea: number;
  vegetationArea: number;
  cropsName: string[];
  producerUuid: string;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IFarmDomain {
  readonly propsData: FarmProps;
  updateName(name: string): void;
  updateCity(city: string): void;
  updateState(state: string): void;
  updateAreas(totalArea: number, arableArea: number, vegetationArea: number): void;
  addCrop(crop: CropDomain): void;
  removeCrop(cropUuid: string): void;
  markAsDeleted(): void;
}