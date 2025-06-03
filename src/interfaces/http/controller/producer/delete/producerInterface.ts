import { IDeleteProducer } from "@producer/deleteProducer/deleteProducerInterface"

export interface IProducerController {
    execute(uuid: string): Promise<void>
}

export interface IDeleteProducerProps {
    deleteProducer: IDeleteProducer
}