import { PrismaClient } from "@prisma/client/external";
import { CropRepository } from "./cropRepository";
import { ICropRepository } from "./cropInterface";

export const cropRepository: ICropRepository = new CropRepository(new PrismaClient());
