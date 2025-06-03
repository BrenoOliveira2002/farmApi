import { FarmDomain } from "@entities/farm/farm";
import { UpdateFarmDto, FarmResponseDto } from "../../../application/dto/dtoFarm";

export interface IFarmRepository {
  create(data: FarmDomain): Promise<void>;
  update(uuid: string, data: UpdateFarmDto): Promise<void>;
  delete(producerUUID: string): Promise<void>;
  findById(uuid: string): Promise<FarmResponseDto | null>;
  findByName(name: string): Promise<FarmResponseDto | null>;
  findAllByProducerUuid(producerUuid: string): Promise<FarmResponseDto[]>;
  getAllFarm(): Promise<any>
}
