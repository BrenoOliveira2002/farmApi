"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProducer = void 0;
const farm_1 = require("../../../../domain/repositories/farm");
const deleteProducer_1 = require("./deleteProducer");
const crop_1 = require("../../../../domain/repositories/crop");
const producer_1 = require("../../../../domain/repositories/producer");
const farmCrop_1 = require("../../../../domain/repositories/farmCrop");
exports.deleteProducer = new deleteProducer_1.DeleteProducer({
    farmRepository: farm_1.farmRepository,
    cropRepository: crop_1.cropRepository,
    producerRepository: producer_1.producerRepository,
    farmCropRepository: farmCrop_1.farmCropRepository
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBwbGljYXRpb24vdXNlQ2FzZXMvcHJvZHVjZXIvZGVsZXRlUHJvZHVjZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQW9EO0FBQ3BELHFEQUFrRDtBQUVsRCw2Q0FBb0Q7QUFDcEQscURBQTREO0FBQzVELHFEQUE0RDtBQUUvQyxRQUFBLGNBQWMsR0FBb0IsSUFBSSwrQkFBYyxDQUFDO0lBQ2hFLGNBQWMsRUFBRSxxQkFBYztJQUM1QixjQUFjLEVBQUUscUJBQWM7SUFDOUIsa0JBQWtCLEVBQUUsNkJBQWtCO0lBQ3RDLGtCQUFrQixFQUFFLDZCQUFrQjtDQUN6QyxDQUFDLENBQUEifQ==