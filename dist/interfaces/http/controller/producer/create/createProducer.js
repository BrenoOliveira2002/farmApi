"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProducerController = void 0;
class CreateProducerController {
    constructor(props) {
        this.props = props;
    }
    async execute(data) {
        const { formattedData } = this.props.validateFieldsToCreateProducer(data);
        return await this.props.createProducer.execute(formattedData);
    }
}
exports.CreateProducerController = CreateProducerController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW50ZXJmYWNlcy9odHRwL2NvbnRyb2xsZXIvcHJvZHVjZXIvY3JlYXRlL2NyZWF0ZVByb2R1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLE1BQWEsd0JBQXdCO0lBQ25DLFlBQW9CLEtBQTJCO1FBQTNCLFVBQUssR0FBTCxLQUFLLENBQXNCO0lBQUcsQ0FBQztJQUVuRCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQXVCO1FBRW5DLE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFFLE9BQU8sTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFaEUsQ0FBQztDQUNGO0FBVkQsNERBVUMifQ==