import { cropRepository } from "@repositories/crop";
import { producerRepository } from "@repositories/producer"
import { UpdateProducer } from "./updateProducer";
import { IUpdateProducer } from "./updateProducerInterface";
import { farmRepository } from "@repositories/farm";

export const updateProducer: IUpdateProducer = new UpdateProducer({
    farmRepository: farmRepository,
    cropRepository: cropRepository,
    producerRepository: producerRepository    
})