import { cropRepository } from "@repositories/crop";
import { CreateProducer } from "./createProducer";
import { ICreateProducer,  } from "./createProducerInterface";
import { producerRepository } from "@repositories/producer";
import { farmRepository } from "@repositories/farm";
import { farmCropRepository } from "@repositories/farmCrop";

export const createProducer: ICreateProducer = new CreateProducer({
    producerRepository: producerRepository,
    cropRepository: cropRepository,
    farmRepository: farmRepository,
    farmCropRepository: farmCropRepository
})