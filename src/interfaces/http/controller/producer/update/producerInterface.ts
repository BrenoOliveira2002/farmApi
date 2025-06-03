import { UpdateProducerDto } from "@dto/dtoProducer";
import { IUpdateProducer } from "@producer/updateProducer/updateProducerInterface";
import { ValidateFieldsToUpdateProducer } from "@interfaces/http/validators/producer/updateProducer/interface";

export interface IUpdateProducerController {
  execute(uuid: string, data: UpdateProducerDto): Promise<void>;
}

export interface IUpdateProducerControllerProps {
  updateProducer: IUpdateProducer;
  validateFieldsToUpdateProducer: ValidateFieldsToUpdateProducer;
}
