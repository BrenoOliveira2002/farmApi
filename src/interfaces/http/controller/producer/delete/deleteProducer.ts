import { IDeleteProducerProps } from "./producerInterface";

export class DeleteProducerController {
  constructor(private props: IDeleteProducerProps) {}

  async execute(uuid: string) {

    return await this.props.deleteProducer.execute(uuid);

  }
}
