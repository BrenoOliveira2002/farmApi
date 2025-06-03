"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmDomain = void 0;
class FarmDomain {
    constructor(props) {
        this.props = props;
        if (!props.name)
            throw new Error("Nome da fazenda é obrigatório");
        if (!props.city)
            throw new Error("Cidade é obrigatória");
        if (!props.state)
            throw new Error("Estado é obrigatório");
        if (!props.producerUuid)
            throw new Error("UUID do produtor é obrigatório");
        if (props.totalArea <= 0)
            throw new Error("Área total deve ser maior que zero");
        if (props.arableArea < 0)
            throw new Error("Área agricultável não pode ser negativa");
        if (props.vegetationArea < 0)
            throw new Error("Área de vegetação não pode ser negativa");
        this.validateAreas(props.totalArea, props.arableArea, props.vegetationArea);
        this.props.cropsName ??= [];
        this.props.isDeleted ??= false;
        this.props.createdAt ??= new Date();
        this.props.updatedAt ??= new Date();
    }
    get propsData() {
        return this.props;
    }
    validateAreas(totalArea, arableArea, vegetationArea) {
        if ((arableArea + vegetationArea) > totalArea) {
            throw new Error("A soma da área agricultável e vegetação não pode ser maior que a área total");
        }
    }
    updateName(name) {
        if (!name)
            throw new Error("Nome da fazenda é obrigatório");
        this.props.name = name;
        this.props.updatedAt = new Date();
    }
    updateCity(city) {
        if (!city)
            throw new Error("Cidade é obrigatória");
        this.props.city = city;
        this.props.updatedAt = new Date();
    }
    updateState(state) {
        if (!state)
            throw new Error("Estado é obrigatório");
        this.props.state = state;
        this.props.updatedAt = new Date();
    }
    updateAreas(totalArea, arableArea, vegetationArea) {
        if (totalArea <= 0)
            throw new Error("Área total deve ser maior que zero");
        if (arableArea < 0)
            throw new Error("Área agricultável não pode ser negativa");
        if (vegetationArea < 0)
            throw new Error("Área de vegetação não pode ser negativa");
        this.validateAreas(totalArea, arableArea, vegetationArea);
        this.props.totalArea = totalArea;
        this.props.arableArea = arableArea;
        this.props.vegetationArea = vegetationArea;
        this.props.updatedAt = new Date();
    }
    addCrop(crop) {
        if (!crop)
            throw new Error("Cultura é obrigatória");
        const exists = this.props.cropsName?.some(c => c === crop.propsData.name);
        if (exists) {
            throw new Error("Cultura já existe nesta fazenda");
        }
        this.props.cropsName = this.props.cropsName || [];
        this.props.cropsName.push(crop.propsData.name);
        this.props.updatedAt = new Date();
    }
    removeCrop(cropName) {
        if (!cropName)
            throw new Error("Nome da cultura é obrigatório");
        this.props.cropsName = this.props.cropsName?.filter(c => c !== cropName) || [];
        this.props.updatedAt = new Date();
    }
    markAsDeleted() {
        this.props.isDeleted = true;
        this.props.updatedAt = new Date();
    }
}
exports.FarmDomain = FarmDomain;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb21haW4vZW50aXRpZXMvZmFybS9mYXJtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLE1BQWEsVUFBVTtJQUNyQixZQUFvQixLQUFnQjtRQUFoQixVQUFLLEdBQUwsS0FBSyxDQUFXO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUMzRSxJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksQ0FBQztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUNoRixJQUFJLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUNyRixJQUFJLEtBQUssQ0FBQyxjQUFjLEdBQUcsQ0FBQztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUV6RixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFNUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQztR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