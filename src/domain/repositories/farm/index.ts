import { PrismaClient } from "@prisma/client/external";
import { IFarmRepository } from "./farmInterface";
import { FarmRepository } from "./farmRepository";

export const farmRepository: IFarmRepository = new FarmRepository(
 new PrismaClient()
);
