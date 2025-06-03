import { CreateProducerDto } from "@dto/dtoProducer";
import { ICreateProducerProps } from "./producerInterface";

export class CreateProducerController {
  constructor(private props: ICreateProducerProps) {}

  async execute(data: CreateProducerDto) {

    const { formattedData } = this.props.validateFieldsToCreateProducer(data);

    return await this.props.createProducer.execute(formattedData);

  }
}
