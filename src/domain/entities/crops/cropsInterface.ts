export interface CropProps {
  id?: number;
  uuid: string;
  name: string;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICropDomain {
  readonly propsData: CropProps;
  updateName(name: string): void;
  markAsDeleted(): void;
}