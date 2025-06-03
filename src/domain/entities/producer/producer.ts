import { FarmDomain } from "../farm/farm";
import { IProducerDomain, ProducerProps } from "./producerInterface";

export class ProducerDomain implements IProducerDomain {
  constructor(private props: ProducerProps) {
    if (!props.name) throw new Error("Nome do produtor é obrigatório");
    if (!props.cpf && !props.cnpj) throw new Error("CPF ou CNPJ é obrigatório");
    if (props.cpf && props.cnpj) throw new Error("Deve informar apenas CPF ou CNPJ, não ambos");
    if (props.cpf) this.validateCpf(props.cpf);
    if (props.cnpj) this.validateCnpj(props.cnpj);
    
    
    this.props.farms ??= [];
    this.props.isDeleted ??= false;
    this.props.createdAt ??= new Date();
    this.props.updatedAt ??= new Date();
  }

  get propsData(): ProducerProps {
    return this.props;
  }

  private validateCpf(cpf: string): void {
    const cleanCpf = cpf.replace(/\D/g, '');
    
    if (cleanCpf.length !== 11) {
      throw new Error("CPF deve ter 11 dígitos");
    }
    
    if (/^(\d)\1{10}$/.test(cleanCpf)) {
      throw new Error("CPF inválido");
    }
    
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cleanCpf.charAt(i)) * (10 - i);
    }
    let remainder = 11 - (sum % 11);
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cleanCpf.charAt(9))) {
      throw new Error("CPF inválido");
    }
    
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cleanCpf.charAt(i)) * (11 - i);
    }
    remainder = 11 - (sum % 11);
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cleanCpf.charAt(10))) {
      throw new Error("CPF inválido");
    }
  }

  private validateCnpj(cnpj: string): void {
    const cleanCnpj = cnpj.replace(/\D/g, '');
    
    if (cleanCnpj.length !== 14) {
      throw new Error("CNPJ deve ter 14 dígitos");
    }
    
    if (/^(\d)\1{13}$/.test(cleanCnpj)) {
      throw new Error("CNPJ inválido");
    }
    
    let length = cleanCnpj.length - 2;
    let numbers = cleanCnpj.substring(0, length);
    let digits = cleanCnpj.substring(length);
    let sum = 0;
    let pos = length - 7;
    
    for (let i = length; i >= 1; i--) {
      sum += parseInt(numbers.charAt(length - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    
    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== parseInt(digits.charAt(0))) {
      throw new Error("CNPJ inválido");
    }
    
    length = length + 1;
    numbers = cleanCnpj.substring(0, length);
    sum = 0;
    pos = length - 7;
    
    for (let i = length; i >= 1; i--) {
      sum += parseInt(numbers.charAt(length - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== parseInt(digits.charAt(1))) {
      throw new Error("CNPJ inválido");
    }
  }

  updateName(name: string) {
    if (!name) throw new Error("Nome do produtor é obrigatório");
    this.props.name = name;
    this.props.updatedAt = new Date();
  }

  updateCpf(cpf: string) {
    if (this.props.cnpj) {
      throw new Error("Não é possível alterar para CPF quando já possui CNPJ. Remova o CNPJ primeiro");
    }
    
    this.validateCpf(cpf);
    this.props.cpf = cpf;
    this.props.updatedAt = new Date();
  }

  updateCnpj(cnpj: string) {
    if (this.props.cpf) {
      throw new Error("Não é possível alterar para CNPJ quando já possui CPF. Remova o CPF primeiro");
    }
    
    this.validateCnpj(cnpj);
    this.props.cnpj = cnpj;
    this.props.updatedAt = new Date();
  }

  addFarm(farm: FarmDomain) {
    if (!farm) throw new Error("Fazenda é obrigatória");
    
    const existingFarm = this.props.farms?.find(f => f.propsData.uuid === farm.propsData.uuid);
    if (existingFarm) {
      throw new Error("Fazenda já existe para este produtor");
    }
    
    this.props.farms = this.props.farms || [];
    this.props.farms.push(farm);
    this.props.updatedAt = new Date();
  }

  removeFarm(farmUuid: string) {
    if (!farmUuid) throw new Error("UUID da fazenda é obrigatório");
    
    this.props.farms = this.props.farms?.filter(f => f.propsData.uuid !== farmUuid) || [];
    this.props.updatedAt = new Date();
  }

  markAsDeleted() {
    this.props.isDeleted = true;
    this.props.updatedAt = new Date();
  }
}