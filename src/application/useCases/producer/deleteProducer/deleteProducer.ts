import { IDeleteProducer, IDeleteProducerProps } from "./deleteProducerInterface";

export class DeleteProducer implements IDeleteProducer {
  constructor(private props: IDeleteProducerProps) {}

  async execute(uuid: string){
    const producer = await this.props.producerRepository.findByUUID(uuid);
    console.log(producer)
    console.log(uuid)
    if (!producer) {
      throw new Error("400& Produtor não encontrado.");
    }

    const farms = await this.props.farmRepository.findAllByProducerUuid(uuid);

    if(farms.length) {
      await this.props.farmRepository.delete(uuid);
      for (const farm of farms) {
      await this.props.farmCropRepository.delete(farm.uuid);
      }
    }

    await this.props.producerRepository.delete(uuid);
  }
}
