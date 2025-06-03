import { CropDomain } from "../crops/crops";
import { FarmProps, IFarmDomain } from "./farmInterface";

export class FarmDomain implements IFarmDomain {
  constructor(private props: FarmProps) {
    if (!props.name) throw new Error("Nome da fazenda é obrigatório");
    if (!props.city) throw new Error("Cidade é obrigatória");
    if (!props.state) throw new Error("Estado é obrigatório");
    if (!props.producerUuid) throw new Error("UUID do produtor é obrigatório");
    if (props.totalArea <= 0) throw new Error("Área total deve ser maior que zero");
    if (props.arableArea < 0) throw new Error("Área agricultável não pode ser negativa");
    if (props.vegetationArea < 0) throw new Error("Área de vegetação não pode ser negativa");

    this.validateAreas(props.totalArea, props.arableArea, props.vegetationArea);

    this.props.cropsName ??= [];
    this.props.isDeleted ??= false;
    this.props.createdAt ??= new Date();
    this.props.updatedAt ??= new Date();
  }

  get propsData(): FarmProps {
    return this.props;
  }

  private validateAreas(totalArea: number, arableArea: number, vegetationArea: number): void {
    if ((arableArea + vegetationArea) > totalArea) {
      throw new Error("A soma da área agricultável e vegetação não pode ser maior que a área total");
    }
  }

  updateName(name: string) {
    if (!name) throw new Error("Nome da fazenda é obrigatório");
    this.props.name = name;
    this.props.updatedAt = new Date();
  }

  updateCity(city: string) {
    if (!city) throw new Error("Cidade é obrigatória");
    this.props.city = city;
    this.props.updatedAt = new Date();
  }

  updateState(state: string) {
    if (!state) throw new Error("Estado é obrigatório");
    this.props.state = state;
    this.props.updatedAt = new Date();
  }

  updateAreas(totalArea: number, arableArea: number, vegetationArea: number) {
    if (totalArea <= 0) throw new Error("Área total deve ser maior que zero");
    if (arableArea < 0) throw new Error("Área agricultável não pode ser negativa");
    if (vegetationArea < 0) throw new Error("Área de vegetação não pode ser negativa");

    this.validateAreas(totalArea, arableArea, vegetationArea);

    this.props.totalArea = totalArea;
    this.props.arableArea = arableArea;
    this.props.vegetationArea = vegetationArea;
    this.props.updatedAt = new Date();
  }

  addCrop(crop: CropDomain) {
    if (!crop) throw new Error("Cultura é obrigatória");

    const exists = this.props.cropsName?.some(c => c === crop.propsData.name);
    if (exists) {
      throw new Error("Cultura já existe nesta fazenda");
    }

    this.props.cropsName = this.props.cropsName || [];
    this.props.cropsName.push(crop.propsData.name);
    this.props.updatedAt = new Date();
  }

  removeCrop(cropName: string) {
    if (!cropName) throw new Error("Nome da cultura é obrigatório");

    this.props.cropsName = this.props.cropsName?.filter(
      c => c !== cropName
    ) || [];

    this.props.updatedAt = new Date();
  }

  markAsDeleted() {
    this.props.isDeleted = true;
    this.props.updatedAt = new Date();
  }
}
