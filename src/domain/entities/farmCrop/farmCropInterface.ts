export interface FarmCropProps {
  id?: number;
  farmUuid: string;
  cropUuid: string;
}

export interface IFarmCropDomain {
  readonly propsData: FarmCropProps;
}
