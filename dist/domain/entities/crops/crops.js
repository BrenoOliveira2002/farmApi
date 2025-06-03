"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CropDomain = void 0;
class CropDomain {
    constructor(props) {
        this.props = props;
        if (!props.name)
            throw new Error("Nome da cultura é obrigatório");
        if (!CropDomain.VALID_CROPS.includes(props.name)) {
            throw new Error(`Cultura inválida. Culturas válidas: ${CropDomain.VALID_CROPS.join(', ')}`);
        }
        this.props.isDeleted ??= false;
        this.props.createdAt ??= new Date();
        this.props.updatedAt ??= new Date();
    }
    get propsData() {
        return this.props;
    }
    updateName(name) {
        if (!name)
            throw new Error("Nome da cultura é obrigatório");
        if (!CropDomain.VALID_CROPS.includes(name)) {
            throw new Error(`Cultura inválida. Culturas válidas: ${CropDomain.VALID_CROPS.join(', ')}`);
        }
        this.props.name = name;
        this.props.updatedAt = new Date();
    }
    markAsDeleted() {
        this.props.isDeleted = true;
        this.props.updatedAt = new Date();
    }
    static getValidCrops() {
        return [...CropDomain.VALID_CROPS];
    }
}
exports.CropDomain = CropDomain;
CropDomain.VALID_CROPS = [
    'Soja',
    'Milho',
    'Algodão',
    'Café',
    'Cana de Açucar'
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JvcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9tYWluL2VudGl0aWVzL2Nyb3BzL2Nyb3BzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsVUFBVTtJQVNyQixZQUFvQixLQUFnQjtRQUFoQixVQUFLLEdBQUwsS0FBSyxDQUFXO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hELE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM3RjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLElBQUksSUFBSSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsVUFBVSxDQUFDLElBQVk7UUFDckIsSUFBSSxDQUFDLElBQUk7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFDLE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM3RjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxhQUFhO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDOztBQXpDSCxnQ0EwQ0M7QUF6Q3lCLHNCQUFXLEdBQUc7SUFDcEMsTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTO0lBQ1QsTUFBTTtJQUNOLGdCQUFnQjtDQUNqQixDQUFDIn0=