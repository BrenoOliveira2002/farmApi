import { PrismaClient } from "@prisma/client/external";
import { FarmCropRepository } from "./farmCropRepository";
import { IFarmCropRepository } from "./farmCropInterface";

export const farmCropRepository: IFarmCropRepository = new FarmCropRepository(
 new PrismaClient()
);
