export interface CreateCropDto {
  name: string;
}

export interface UpdateCropDto {
  name?: string;
}

export interface CropResponseDto {
  uuid: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}