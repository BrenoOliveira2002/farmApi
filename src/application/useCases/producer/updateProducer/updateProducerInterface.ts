import { IProducerRepository } from "@repositories/producer/producerInterface";
import { ICropRepository } from "@repositories/crop/cropInterface";
import { IFarmRepository } from "@repositories/farm/farmInterface";
import { UpdateProducerDto } from "@dto/dtoProducer";

export interface IUpdateProducer {
  execute(data: UpdateProducerDto): Promise<void>;
}

export interface IUpdateProducerProps {
  producerRepository: IProducerRepository;
  farmRepository: IFarmRepository;
  cropRepository: ICropRepository;
}
