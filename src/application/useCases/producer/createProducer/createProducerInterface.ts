import { IFarmRepository } from "@repositories/farm/farmInterface";
import { IProducerRepository } from "@repositories/producer/producerInterface";
import { CreateProducerDto } from "@dto/dtoProducer";
import { ICropRepository } from "domain/repositories/crop/cropInterface";
import { IFarmCropRepository } from "@repositories/farmCrop/farmCropInterface";

export interface ICreateProducer {
  execute(data: CreateProducerDto): Promise<void>;
}

export interface ICreateProducerProps{
    producerRepository: IProducerRepository
    farmRepository: IFarmRepository
    cropRepository: ICropRepository
    farmCropRepository: IFarmCropRepository
}