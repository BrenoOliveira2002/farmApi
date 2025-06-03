import { CropResponseDto } from "./dtoFarmCrop";

export interface CreateFarmDto {
  name: string;
  city: string;
  state: string;
  totalArea: number;
  arableArea: number;
  vegetationArea: number;
  cropName: string[];
}

export interface UpdateFarmDto {
  uuid?: string; 
  name?: string;
  city?: string;
  state?: string;
  totalArea?: number;
  arableArea?: number;
  vegetationArea?: number;
  cropName?: string[];
}

export interface FarmResponseDto {
  uuid: string;
  name: string;
  city: string;
  state: string;
  totalArea: number;
  arableArea: number;
  vegetationArea: number;
  crops: CropResponseDto[];
  createdAt: Date;
  updatedAt: Date;
}