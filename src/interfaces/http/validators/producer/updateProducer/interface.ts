import { UpdateProducerDto } from "@dto/dtoProducer"

export type ValidateFieldsToUpdateProducer = (data: UpdateProducerDto) => {
    formattedData: UpdateProducerDto
}

