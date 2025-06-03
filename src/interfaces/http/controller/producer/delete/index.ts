import { deleteProducer } from "@producer/deleteProducer/index";
import { IProducerController } from "./producerInterface";
import { DeleteProducerController } from "./deleteProducer";


export const deleteProducerController: IProducerController = new DeleteProducerController({
    deleteProducer   
})
