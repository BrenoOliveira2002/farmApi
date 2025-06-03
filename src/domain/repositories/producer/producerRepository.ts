import { PrismaClient } from "@prisma/client/external";
import { IProducerRepository } from "./producerInterface";
import { ProducerResponseDto, UpdateProducerDto } from "@dto/dtoProducer";
import { ProducerDomain } from "@entities/producer/producer";

export class PrismaProducerRepository implements IProducerRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: ProducerDomain) {
    await this.prisma.producer.create({
      data: {
        uuid: data.propsData.uuid,
        name: data.propsData.name,
        cpf: data.propsData.cpf,
        cnpj: data.propsData.cnpj,
        isDeleted: data.propsData.isDeleted,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    });
  }

  async update(uuid: string, data: UpdateProducerDto){
    await this.prisma.producer.update({
      where: { uuid },
      data: {
        name: data.name,
        cpf: data.cpf,
        cnpj: data.cnpj,
        updatedAt: new Date(),
      }
    });
  }

  async delete(uuid: string) {
    await this.prisma.producer.update({
      where: { uuid },
      data: {
        isDeleted: true,
        updatedAt: new Date(),
      }
    });
  }

  async findByUUID(uuid: string){
    const producer = await this.prisma.producer.findFirst({
      where: { uuid, isDeleted: false }
    });

    if (!producer) return null;

    return {
      uuid: producer.uuid,
      name: producer.name,
      cpf: producer.cpf ? producer.cpf : undefined,
      cnpj: producer.cnpj ? producer.cnpj : undefined,
      createdAt: producer.createdAt,
      updatedAt: producer.updatedAt,
      farms: []
    };
  }

  async findByCpf(cpf: string){
    const producer = await this.prisma.producer.findFirst({
      where: { cpf, isDeleted: false },
    });

    if (!producer) return null;

    return {
      uuid: producer.uuid,
      name: producer.name,
      cpf: producer.cpf ? producer.cpf : undefined,
      cnpj: producer.cnpj ? producer.cnpj : undefined,
      createdAt: producer.createdAt,
      updatedAt: producer.updatedAt,
      farms: []
    };
  }

  async findByCnpj(cnpj: string){
    const producer = await this.prisma.producer.findFirst({
      where: { cnpj, isDeleted: false }
    });

    if (!producer) return null;

    return {
      uuid: producer.uuid,
      name: producer.name,
      cpf: producer.cpf ? producer.cpf : undefined,
      cnpj: producer.cnpj ? producer.cnpj : undefined,
      createdAt: producer.createdAt,
      updatedAt: producer.updatedAt,
      farms: []
    };
  }
}
