
import { UpdateProducerDto } from 'application/dto/dtoProducer'
import { IUpdateProducer, IUpdateProducerProps } from './updateProducerInterface'

export class UpdateProducer implements IUpdateProducer {
  constructor(private props: IUpdateProducerProps) {}

  async execute(data: UpdateProducerDto) {
    const { producerRepository, cropRepository } = this.props

    const existingProducer = await producerRepository.findByUUID(data.uuid)
    if (!existingProducer) throw new Error('Produtor não encontrado')

    if (data.cpf && data.cpf !== existingProducer.cpf) {
      const exists = await producerRepository.findByCpf(data.cpf)
      if (exists) throw new Error('Já existe um produtor com esse CPF')
    }

    if (data.cnpj && data.cnpj !== existingProducer.cnpj) {
      const exists = await producerRepository.findByCnpj(data.cnpj)
      if (exists) throw new Error('Já existe um produtor com esse CNPJ')
    }

    //existingProducer.name = data.name ? data.name 
    //existingProducer.cpf = data.cpf
    //existingProducer.cnpj = data.cnpj
    // existingProducer.updatedAt = new Date()

    // existingProducer.farms = []

    // for (const farmData of data.farms) {
    //   const { totalArea, arableArea, vegetationArea } = farmData
    //   if (arableArea + vegetationArea > totalArea) {
    //     throw new Error(`A soma da área agricultável e vegetação não pode ser maior que a área total da fazenda "${farmData.name}"`)
    //   }

    //   const farm = new Farm({
    //     uuid: farmData.uuid || randomUUID(),
    //     name: farmData.name,
    //     city: farmData.city,
    //     state: farmData.state,
    //     totalArea,
    //     arableArea,
    //     vegetationArea,
    //     isDeleted: false,
    //     producerId: existingProducer.id,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //     farmCrops: []
    //   })

    //   for (const cropName of farmData.crops) {
    //     const crop = await cropRepository.findByName(cropName)
    //     if (!crop) throw new Error(`Cultura "${cropName}" não encontrada`)

    //     const farmCrop = new FarmCrop({
    //       farmUuid: farm.uuid,
    //       cropUuid: crop.uuid
    //     })

    //     farm.farmCrops.push(farmCrop)
    //   }

    //   existingProducer.farms.push(farm)
    // }

    return await producerRepository.update("123", existingProducer)
  }
}
