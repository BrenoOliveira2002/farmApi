import { farmRepository } from "@repositories/farm";
import { DeleteProducer } from "./deleteProducer";
import { IDeleteProducer } from "./deleteProducerInterface";
import { cropRepository } from "@repositories/crop";
import { producerRepository } from "@repositories/producer";
import { farmCropRepository } from "@repositories/farmCrop";

export const deleteProducer: IDeleteProducer = new DeleteProducer({
  farmRepository: farmRepository,
    cropRepository: cropRepository,
    producerRepository: producerRepository,
    farmCropRepository: farmCropRepository
})