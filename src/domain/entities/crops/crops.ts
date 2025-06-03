import { CropProps, ICropDomain } from "./cropsInterface";

export class CropDomain implements ICropDomain {
  private static readonly VALID_CROPS = [
    'Soja', 
    'Milho', 
    'Algodão', 
    'Café', 
    'Cana de Açucar'
  ];

  constructor(private props: CropProps) {
    if (!props.name) throw new Error("Nome da cultura é obrigatório");
    if (!CropDomain.VALID_CROPS.includes(props.name)) {
      throw new Error(`Cultura inválida. Culturas válidas: ${CropDomain.VALID_CROPS.join(', ')}`);
    }
    
    this.props.isDeleted ??= false;
    this.props.createdAt ??= new Date();
    this.props.updatedAt ??= new Date();
  }

  get propsData(): CropProps {
    return this.props;
  }

  updateName(name: string) {
    if (!name) throw new Error("Nome da cultura é obrigatório");
    if (!CropDomain.VALID_CROPS.includes(name)) {
      throw new Error(`Cultura inválida. Culturas válidas: ${CropDomain.VALID_CROPS.join(', ')}`);
    }
    
    this.props.name = name;
    this.props.updatedAt = new Date();
  }

  markAsDeleted() {
    this.props.isDeleted = true;
    this.props.updatedAt = new Date();
  }

  static getValidCrops(): string[] {
    return [...CropDomain.VALID_CROPS];
  }
}