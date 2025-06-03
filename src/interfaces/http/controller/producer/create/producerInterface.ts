import { CreateProducerDto } from "@dto/dtoProducer"
import { ICreateProducer } from "@producer/createProducer/createProducerInterface"
import { ValidateFieldsToCreateProducer } from "@interfaces/http/validators/producer/createProducer/interface"

export interface IProducerController {
    execute(data: CreateProducerDto): Promise<void>
}

export interface ICreateProducerProps {
    createProducer: ICreateProducer
    validateFieldsToCreateProducer: ValidateFieldsToCreateProducer
}