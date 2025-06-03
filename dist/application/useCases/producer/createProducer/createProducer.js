"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProducer = void 0;
const crypto_1 = require("crypto");
const producer_1 = require("../../../../domain/entities/producer/producer");
const farm_1 = require("../../../../domain/entities/farm/farm");
const farmCrop_1 = require("../../../../domain/entities/farmCrop/farmCrop");
class CreateProducer {
    constructor(props) {
        this.props = props;
    }
    async execute(data) {
        const { producerRepository, farmRepository, cropRepository, farmCropRepository } = this.props;
        if (data.cpf) {
            const exists = await producerRepository.findByCpf(data.cpf);
            if (exists)
                throw new Error('400& Já existe um produtor com esse CPF');
        }
        else if (data.cnpj) {
            const exists = await producerRepository.findByCnpj(data.cnpj);
            if (exists)
                throw new Error('400& Já existe um produtor com esse CNPJ');
        }
        const producer = new producer_1.ProducerDomain({
            uuid: (0, crypto_1.randomUUID)(),
            name: data.name,
            cpf: data.cpf,
            cnpj: data.cnpj,
            isDeleted: false,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        await producerRepository.create(producer);
        if (data.farms?.length) {
            for (const farmData of data.farms) {
                const { totalArea, arableArea, vegetationArea } = farmData;
                if (arableArea + vegetationArea > totalArea) {
                    throw new Error(`400& A soma da área agricultável e vegetação não pode ser maior que a área total da fazenda "${farmData.name}"`);
                }
                const farm = new farm_1.FarmDomain({
                    uuid: (0, crypto_1.randomUUID)(),
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
                });
                await farmRepository.create(farm);
                if (farmData.cropName?.length) {
                    for (const cropName of farmData.cropName) {
                        const crop = await cropRepository.findByName(cropName);
                        if (!crop)
                            throw new Error(`400& Cultura "${cropName}" não encontrada`);
                        const farmCrop = new farmCrop_1.FarmCropDomain({
                            farmUuid: farm.propsData.uuid,
                            cropUuid: crop.uuid
                        });
                        await farmCropRepository.create(farmCrop);
                    }
                }
            }
        }
        return;
    }
}
exports.CreateProducer = CreateProducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBwbGljYXRpb24vdXNlQ2FzZXMvcHJvZHVjZXIvY3JlYXRlUHJvZHVjZXIvY3JlYXRlUHJvZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsbUNBQW1DO0FBQ25DLDBEQUE0RDtBQUM1RCw4Q0FBZ0Q7QUFDaEQsMERBQTREO0FBRTVELE1BQWEsY0FBYztJQUN6QixZQUFvQixLQUEyQjtRQUEzQixVQUFLLEdBQUwsS0FBSyxDQUFzQjtJQUFHLENBQUM7SUFFbkQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUF1QjtRQUNuQyxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFFN0YsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osTUFBTSxNQUFNLEdBQUcsTUFBTSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzNELElBQUksTUFBTTtnQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUE7U0FDdkU7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDcEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzdELElBQUksTUFBTTtnQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUE7U0FDeEU7UUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLHlCQUFjLENBQUM7WUFDbEMsSUFBSSxFQUFFLElBQUEsbUJBQVUsR0FBRTtZQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDckIsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFO1NBQ3RCLENBQUMsQ0FBQTtRQUNGLE1BQU0sa0JBQWtCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRXpDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7WUFDdEIsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNqQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsR0FBRyxRQUFRLENBQUE7Z0JBQzFELElBQUksVUFBVSxHQUFHLGNBQWMsR0FBRyxTQUFTLEVBQUU7b0JBQzNDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0dBQWdHLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO2lCQUNsSTtnQkFFRCxNQUFNLElBQUksR0FBRyxJQUFJLGlCQUFVLENBQUM7b0JBQzFCLElBQUksRUFBRSxJQUFBLG1CQUFVLEdBQUU7b0JBQ2xCLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtvQkFDbkIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO29CQUNuQixLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUs7b0JBQ3JCLFNBQVM7b0JBQ1QsVUFBVTtvQkFDVixjQUFjO29CQUNkLFNBQVMsRUFBRSxLQUFLO29CQUNoQixTQUFTLEVBQUUsUUFBUSxDQUFDLFFBQVE7b0JBQzVCLFlBQVksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUk7b0JBQ3JDLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRTtvQkFDckIsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFO2lCQUN0QixDQUFDLENBQUE7Z0JBQ0YsTUFBTSxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUVqQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFO29CQUM3QixLQUFLLE1BQU0sUUFBUSxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUU7d0JBQ3hDLE1BQU0sSUFBSSxHQUFHLE1BQU0sY0FBYyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTt3QkFDdEQsSUFBSSxDQUFDLElBQUk7NEJBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsUUFBUSxrQkFBa0IsQ0FBQyxDQUFBO3dCQUV2RSxNQUFNLFFBQVEsR0FBRyxJQUFJLHlCQUFjLENBQUM7NEJBQ2xDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7NEJBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSTt5QkFDcEIsQ0FBQyxDQUFBO3dCQUNGLE1BQU0sa0JBQWtCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO3FCQUMxQztpQkFDRjthQUNGO1NBQ0Y7UUFDRCxPQUFNO0lBQ1IsQ0FBQztDQUNGO0FBaEVELHdDQWdFQyJ9