import { CreateProducerDto } from "@dto/dtoProducer"
import { ICreateProducer, ICreateProducerProps } from "./createProducerInterface"
import { randomUUID } from "crypto"
import { ProducerDomain } from "@entities/producer/producer"
import { FarmDomain } from "@entities/farm/farm"
import { FarmCropDomain } from "@entities/farmCrop/farmCrop"

export class CreateProducer implements ICreateProducer {
  constructor(private props: ICreateProducerProps) {}

  async execute(data: CreateProducerDto) {
    const { producerRepository, farmRepository, cropRepository, farmCropRepository } = this.props

    if (data.cpf) {
      const exists = await producerRepository.findByCpf(data.cpf)
      if (exists) throw new Error('400& Já existe um produtor com esse CPF')
    } else if (data.cnpj) {
      const exists = await producerRepository.findByCnpj(data.cnpj)
      if (exists) throw new Error('400& Já existe um produtor com esse CNPJ')
    }

    const producer = new ProducerDomain({
      uuid: randomUUID(),
      name: data.name,
      cpf: data.cpf,
      cnpj: data.cnpj,
      isDeleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    await producerRepository.create(producer)

    if (data.farms?.length) {
      for (const farmData of data.farms) {
        const { totalArea, arableArea, vegetationArea } = farmData
        if (arableArea + vegetationArea > totalArea) {
          throw new Error(`400& A soma da área agricultável e vegetação não pode ser maior que a área total da fazenda "${farmData.name}"`)
        }

        const farm = new FarmDomain({
          uuid: randomUUID(),
          name: farmData.name,
          city: farmData.city,
          state: farmData.state,
          totalArea,
          arableArea,
          vegetationArea,
          isDeleted: false,
          cropsName: farmData.cropName, 
          producerUuid: producer.propsData.uuid,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        await farmRepository.create(farm)

        if (farmData.cropName?.length) {
          for (const cropName of farmData.cropName) {
            const crop = await cropRepository.findByName(cropName)
            if (!crop) throw new Error(`400& Cultura "${cropName}" não encontrada`)

            const farmCrop = new FarmCropDomain({
              farmUuid: farm.propsData.uuid,
              cropUuid: crop.uuid
            })
            await farmCropRepository.create(farmCrop)
          }
        }
      }
    }
    return
  }
}