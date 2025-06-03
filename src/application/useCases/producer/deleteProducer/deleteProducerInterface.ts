import { IProducerRepository } from "@repositories/producer/producerInterface";
import { IFarmRepository } from "@repositories/farm/farmInterface";
import { ICropRepository } from "@repositories/crop/cropInterface";
import { IFarmCropRepository } from "@repositories/farmCrop/farmCropInterface";

export interface IDeleteProducer {
  execute(uuid: string): Promise<void>;
}

export interface IDeleteProducerProps {
    producerRepository: IProducerRepository
    farmRepository: IFarmRepository
    cropRepository: ICropRepository
    farmCropRepository: IFarmCropRepository
}
