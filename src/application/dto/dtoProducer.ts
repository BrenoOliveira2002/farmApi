import { CreateFarmDto, FarmResponseDto, UpdateFarmDto } from "./dtoFarm";

export interface CreateProducerDto {
  cpf?: string;
  cnpj?: string;
  name: string;
  farms?: CreateFarmDto[];
}
export interface UpdateProducerDto {
  uuid: string;
  cpf?: string;
  cnpj?: string;
  name?: string;
  farms?: UpdateFarmDto[];
}

export interface ProducerResponseDto {
  uuid: string;
  cpf?: string;
  cnpj?: string;
  name: string;
  farms: FarmResponseDto[];
  createdAt: Date;
  updatedAt: Date;
}