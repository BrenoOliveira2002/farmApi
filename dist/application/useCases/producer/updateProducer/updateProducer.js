"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProducer = void 0;
class UpdateProducer {
    constructor(props) {
        this.props = props;
    }
    async execute(data) {
        const { producerRepository, cropRepository } = this.props;
        const existingProducer = await producerRepository.findByUUID(data.uuid);
        if (!existingProducer)
            throw new Error('Produtor não encontrado');
        if (data.cpf && data.cpf !== existingProducer.cpf) {
            const exists = await producerRepository.findByCpf(data.cpf);
            if (exists)
                throw new Error('Já existe um produtor com esse CPF');
        }
        if (data.cnpj && data.cnpj !== existingProducer.cnpj) {
            const exists = await producerRepository.findByCnpj(data.cnpj);
            if (exists)
                throw new Error('Já existe um produtor com esse CNPJ');
        }
        return await producerRepository.update("123", existingProducer);
    }
}
exports.UpdateProducer = UpdateProducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlUHJvZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBwbGljYXRpb24vdXNlQ2FzZXMvcHJvZHVjZXIvdXBkYXRlUHJvZHVjZXIvdXBkYXRlUHJvZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsTUFBYSxjQUFjO0lBQ3pCLFlBQW9CLEtBQTJCO1FBQTNCLFVBQUssR0FBTCxLQUFLLENBQXNCO0lBQUcsQ0FBQztJQUVuRCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQXVCO1FBQ25DLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBRXpELE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZFLElBQUksQ0FBQyxnQkFBZ0I7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUE7UUFFakUsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssZ0JBQWdCLENBQUMsR0FBRyxFQUFFO1lBQ2pELE1BQU0sTUFBTSxHQUFHLE1BQU0sa0JBQWtCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUMzRCxJQUFJLE1BQU07Z0JBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFBO1NBQ2xFO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLENBQUMsSUFBSSxFQUFFO1lBQ3BELE1BQU0sTUFBTSxHQUFHLE1BQU0sa0JBQWtCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUM3RCxJQUFJLE1BQU07Z0JBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBO1NBQ25FO1FBNkNELE9BQU8sTUFBTSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUE7SUFDakUsQ0FBQztDQUNGO0FBaEVELHdDQWdFQyJ9