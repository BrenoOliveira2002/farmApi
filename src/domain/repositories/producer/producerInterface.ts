import { ProducerDomain } from "@entities/producer/producer";
import { ProducerResponseDto, UpdateProducerDto } from "@dto/dtoProducer";

export interface IProducerRepository {
  create(data: ProducerDomain): Promise<void>;
  update(uuid: string, data: UpdateProducerDto): Promise<void>;
  delete(uuid: string): Promise<void>;
  findByUUID(uuid: string): Promise<ProducerResponseDto | null>;
  findByCpf(cpf: string): Promise<ProducerResponseDto | null>;
  findByCnpj(cnpj: string): Promise<ProducerResponseDto | null>;
}
