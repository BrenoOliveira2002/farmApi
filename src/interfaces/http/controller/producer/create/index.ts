import { IProducerController } from "./producerInterface"
import { CreateProducerController } from "./createProducer"
import { validateFieldsToCreateProducer } from "@interfaces/http/validators/producer/createProducer/validationCreateProducer"
import { createProducer } from "@producer/createProducer"

export const createProducerController: IProducerController = new CreateProducerController({
validateFieldsToCreateProducer,
createProducer
})
