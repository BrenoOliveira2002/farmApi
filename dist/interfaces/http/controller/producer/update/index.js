"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProducerController = void 0;
const validationUpdateProducer_1 = require("../../../validators/producer/updateProducer/validationUpdateProducer");
const updateProducer_1 = require("./updateProducer");
const index_1 = require("../../../../../application/useCases/producer/updateProducer/index");
exports.updateProducerController = new updateProducer_1.UpdateProducerController({
    validateFieldsToUpdateProducer: validationUpdateProducer_1.validateFieldsToUpdateProducer,
    updateProducer: index_1.updateProducer
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW50ZXJmYWNlcy9odHRwL2NvbnRyb2xsZXIvcHJvZHVjZXIvdXBkYXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJIQUE2SDtBQUU3SCxxREFBMkQ7QUFDM0QsMERBQStEO0FBSWxELFFBQUEsd0JBQXdCLEdBQW9CLElBQUkseUNBQXdCLENBQUM7SUFDbEYsOEJBQThCLEVBQTlCLHlEQUE4QjtJQUM5QixjQUFjLEVBQWQsc0JBQWM7Q0FDakIsQ0FBQyxDQUFBIn0=