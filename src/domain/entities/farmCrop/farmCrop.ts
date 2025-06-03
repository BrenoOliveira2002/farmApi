import { FarmCropProps, IFarmCropDomain } from "./farmCropInterface";

export class FarmCropDomain implements IFarmCropDomain {
  constructor(private props: FarmCropProps) {
    if (!props.farmUuid || !props.cropUuid) {
      throw new Error("Relacionamento inválido: farmUuid e cropUuid são obrigatórios.");
    }
  }

  get propsData(): FarmCropProps {
    return this.props;
  }
}
