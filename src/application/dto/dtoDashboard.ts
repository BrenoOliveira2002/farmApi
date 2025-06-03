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
