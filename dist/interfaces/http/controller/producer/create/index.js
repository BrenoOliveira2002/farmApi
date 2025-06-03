"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProducerController = void 0;
const createProducer_1 = require("./createProducer");
const validationCreateProducer_1 = require("../../../validators/producer/createProducer/validationCreateProducer");
const createProducer_2 = require("../../../../../application/useCases/producer/createProducer");
exports.createProducerController = new createProducer_1.CreateProducerController({
    validateFieldsToCreateProducer: validationCreateProducer_1.validateFieldsToCreateProducer,
    createProducer: createProducer_2.createProducer
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW50ZXJmYWNlcy9odHRwL2NvbnRyb2xsZXIvcHJvZHVjZXIvY3JlYXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFEQUEyRDtBQUMzRCwySEFBNkg7QUFDN0gsNkRBQXlEO0FBRTVDLFFBQUEsd0JBQXdCLEdBQXdCLElBQUkseUNBQXdCLENBQUM7SUFDMUYsOEJBQThCLEVBQTlCLHlEQUE4QjtJQUM5QixjQUFjLEVBQWQsK0JBQWM7Q0FDYixDQUFDLENBQUEifQ==