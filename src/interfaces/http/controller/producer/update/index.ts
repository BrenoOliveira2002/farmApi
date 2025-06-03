import { validateFieldsToUpdateProducer } from "@interfaces/http/validators/producer/updateProducer/validationUpdateProducer"
import { IUpdateProducer } from "@producer/updateProducer/updateProducerInterface"
import { UpdateProducerController } from "./updateProducer"
import { updateProducer } from "@producer/updateProducer/index"



export const updateProducerController: IUpdateProducer = new UpdateProducerController({
    validateFieldsToUpdateProducer,
    updateProducer
})
