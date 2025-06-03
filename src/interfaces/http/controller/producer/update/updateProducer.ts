import { UpdateProducerDto } from "@dto/dtoProducer";
import { IUpdateProducerControllerProps } from "./producerInterface";

export class UpdateProducerController {
  constructor(private props: IUpdateProducerControllerProps) {}

  async execute(data: UpdateProducerDto) {
    const { formattedData } = this.props.validateFieldsToUpdateProducer(data);

    return await this.props.updateProducer.execute(formattedData);
  }
}
