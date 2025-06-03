"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProducer = void 0;
const crop_1 = require("../../../../domain/repositories/crop");
const createProducer_1 = require("./createProducer");
const producer_1 = require("../../../../domain/repositories/producer");
const farm_1 = require("../../../../domain/repositories/farm");
const farmCrop_1 = require("../../../../domain/repositories/farmCrop");
exports.createProducer = new createProducer_1.CreateProducer({
    producerRepository: producer_1.producerRepository,
    cropRepository: crop_1.cropRepository,
    farmRepository: farm_1.farmRepository,
    farmCropRepository: farmCrop_1.farmCropRepository
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBwbGljYXRpb24vdXNlQ2FzZXMvcHJvZHVjZXIvY3JlYXRlUHJvZHVjZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQW9EO0FBQ3BELHFEQUFrRDtBQUVsRCxxREFBNEQ7QUFDNUQsNkNBQW9EO0FBQ3BELHFEQUE0RDtBQUUvQyxRQUFBLGNBQWMsR0FBb0IsSUFBSSwrQkFBYyxDQUFDO0lBQzlELGtCQUFrQixFQUFFLDZCQUFrQjtJQUN0QyxjQUFjLEVBQUUscUJBQWM7SUFDOUIsY0FBYyxFQUFFLHFCQUFjO0lBQzlCLGtCQUFrQixFQUFFLDZCQUFrQjtDQUN6QyxDQUFDLENBQUEifQ==