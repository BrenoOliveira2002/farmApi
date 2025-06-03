"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProducerController = void 0;
class UpdateProducerController {
    constructor(props) {
        this.props = props;
    }
    async execute(data) {
        const { formattedData } = this.props.validateFieldsToUpdateProducer(data);
        return await this.props.updateProducer.execute(formattedData);
    }
}
exports.UpdateProducerController = UpdateProducerController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlUHJvZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW50ZXJmYWNlcy9odHRwL2NvbnRyb2xsZXIvcHJvZHVjZXIvdXBkYXRlL3VwZGF0ZVByb2R1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLE1BQWEsd0JBQXdCO0lBQ25DLFlBQW9CLEtBQXFDO1FBQXJDLFVBQUssR0FBTCxLQUFLLENBQWdDO0lBQUcsQ0FBQztJQUU3RCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQXVCO1FBQ25DLE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFFLE9BQU8sTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUNGO0FBUkQsNERBUUMifQ==