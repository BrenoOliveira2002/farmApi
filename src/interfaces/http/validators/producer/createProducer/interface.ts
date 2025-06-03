import { CreateProducerDto } from "@dto/dtoProducer";

export type ValidateFieldsToCreateProducer = (data: CreateProducerDto) => {
  formattedData: CreateProducerDto;
};
