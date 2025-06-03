"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProducer = void 0;
const crop_1 = require("../../../../domain/repositories/crop");
const producer_1 = require("../../../../domain/repositories/producer");
const updateProducer_1 = require("./updateProducer");
const farm_1 = require("../../../../domain/repositories/farm");
exports.updateProducer = new updateProducer_1.UpdateProducer({
    farmRepository: farm_1.farmRepository,
    cropRepository: crop_1.cropRepository,
    producerRepository: producer_1.producerRepository
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBwbGljYXRpb24vdXNlQ2FzZXMvcHJvZHVjZXIvdXBkYXRlUHJvZHVjZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQW9EO0FBQ3BELHFEQUEyRDtBQUMzRCxxREFBa0Q7QUFFbEQsNkNBQW9EO0FBRXZDLFFBQUEsY0FBYyxHQUFvQixJQUFJLCtCQUFjLENBQUM7SUFDOUQsY0FBYyxFQUFFLHFCQUFjO0lBQzlCLGNBQWMsRUFBRSxxQkFBYztJQUM5QixrQkFBa0IsRUFBRSw2QkFBa0I7Q0FDekMsQ0FBQyxDQUFBIn0=