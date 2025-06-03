"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProducerController = void 0;
class DeleteProducerController {
    constructor(props) {
        this.props = props;
    }
    async execute(uuid) {
        return await this.props.deleteProducer.execute(uuid);
    }
}
exports.DeleteProducerController = DeleteProducerController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlUHJvZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW50ZXJmYWNlcy9odHRwL2NvbnRyb2xsZXIvcHJvZHVjZXIvZGVsZXRlL2RlbGV0ZVByb2R1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsd0JBQXdCO0lBQ25DLFlBQW9CLEtBQTJCO1FBQTNCLFVBQUssR0FBTCxLQUFLLENBQXNCO0lBQUcsQ0FBQztJQUVuRCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQVk7UUFFeEIsT0FBTyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV2RCxDQUFDO0NBQ0Y7QUFSRCw0REFRQyJ9