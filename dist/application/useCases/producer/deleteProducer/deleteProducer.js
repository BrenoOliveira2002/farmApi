"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProducer = void 0;
class DeleteProducer {
    constructor(props) {
        this.props = props;
    }
    async execute(uuid) {
        const producer = await this.props.producerRepository.findByUUID(uuid);
        console.log(producer);
        console.log(uuid);
        if (!producer) {
            throw new Error("400& Produtor não encontrado.");
        }
        const farms = await this.props.farmRepository.findAllByProducerUuid(uuid);
        if (farms.length) {
            await this.props.farmRepository.delete(uuid);
            for (const farm of farms) {
                await this.props.farmCropRepository.delete(farm.uuid);
            }
        }
        await this.props.producerRepository.delete(uuid);
    }
}
exports.DeleteProducer = DeleteProducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlUHJvZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBwbGljYXRpb24vdXNlQ2FzZXMvcHJvZHVjZXIvZGVsZXRlUHJvZHVjZXIvZGVsZXRlUHJvZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxjQUFjO0lBQ3pCLFlBQW9CLEtBQTJCO1FBQTNCLFVBQUssR0FBTCxLQUFLLENBQXNCO0lBQUcsQ0FBQztJQUVuRCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQVk7UUFDeEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUNsRDtRQUVELE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUUsSUFBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2YsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0MsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7Z0JBQzFCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JEO1NBQ0Y7UUFFRCxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRjtBQXRCRCx3Q0FzQkMifQ==