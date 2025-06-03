import { PrismaClient } from "@prisma/client/external";
import { PrismaProducerRepository } from "./producerRepository";
import { IProducerRepository } from "./producerInterface";

export const producerRepository: IProducerRepository = new PrismaProducerRepository(
    new PrismaClient()
)