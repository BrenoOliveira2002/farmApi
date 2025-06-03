"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmCropDomain = void 0;
class FarmCropDomain {
    constructor(props) {
        this.props = props;
        if (!props.farmUuid || !props.cropUuid) {
            throw new Error("Relacionamento inválido: farmUuid e cropUuid são obrigatórios.");
        }
    }
    get propsData() {
        return this.props;
    }
}
exports.FarmCropDomain = FarmCropDomain;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFybUNyb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9tYWluL2VudGl0aWVzL2Zhcm1Dcm9wL2Zhcm1Dcm9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsY0FBYztJQUN6QixZQUFvQixLQUFvQjtRQUFwQixVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUN0QyxNQUFNLElBQUksS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7U0FDbkY7SUFDSCxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Q0FDRjtBQVZELHdDQVVDIn0=