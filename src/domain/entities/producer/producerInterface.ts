import { FarmDomain } from "../farm/farm";

export interface ProducerProps {
  id?: number;
  uuid: string;
  cpf?: string;
  cnpj?: string;
  name: string;
  farms?: FarmDomain[];
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IProducerDomain {
  readonly propsData: ProducerProps;
  updateName(name: string): void;
  updateCpf(cpf: string): void;
  updateCnpj(cnpj: string): void;
  addFarm(farm: FarmDomain): void;
  removeFarm(farmUuid: string): void;
  markAsDeleted(): void;
}