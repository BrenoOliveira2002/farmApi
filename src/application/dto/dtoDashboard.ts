export interface CropSummaryDto {
  name: string;
  totalFarms: number;
}

export interface CropsByStateDto {
  state: string;
  crops: CropSummaryDto[];
}

export interface DashboardDto {
  totalFarms: number;
  totalHectares: number;
  cropsByState: CropsByStateDto[];
}


interface ICrop {
  id: number;
  uuid: string;
  name: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface IFarmCrop {
  id: number;
  isDeleted: boolean;
  farmUuid: string;
  cropUuid: string;
  crop: ICrop; 
}

export interface IFarmReponseDTO {
  id: number;
  uuid: string;
  name: string; 
  totalArea: number; 
  state: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  farmCrops: IFarmCrop[];
}