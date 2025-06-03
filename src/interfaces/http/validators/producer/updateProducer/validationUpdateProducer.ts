import { ValidateFieldsToUpdateProducer } from "./interface";

export const validateFieldsToUpdateProducer: ValidateFieldsToUpdateProducer = (data) => {

  if (data.uuid !== undefined && !isValidUUID(data.uuid)) {
    throw new Error(`400&UUID do produtor inválido`);
  }

  if (data.cpf !== undefined) {
    if (typeof data.cpf !== 'string' || !isValidCPF(data.cpf)) {
      throw new Error(`400&CPF inválido`);
    }
  }

  if (data.cnpj !== undefined) {
    if (typeof data.cnpj !== 'string' || !isValidCNPJ(data.cnpj)) {
      throw new Error(`400&CNPJ inválido`);
    }
  }

  if (data.name !== undefined) {
    if (typeof data.name !== 'string' || data.name.trim().length === 0) {
      throw new Error(`400&Nome do produtor inválido`);
    }
  }

  const validatedFarms = [];
  if (data.farms !== undefined) {
    if (!Array.isArray(data.farms)) {
      throw new Error(`400&Fazendas devem ser um array`);
    }

    for (let i = 0; i < data.farms.length; i++) {
      const farm = data.farms[i];
      validatedFarms.push(validateFarmData(farm, i));
    }
  }

  return {
    formattedData: {
      ...data,
      name: data.name?.trim(),
      farms: validatedFarms.length > 0 ? validatedFarms : undefined,
    }
  };
};

function validateFarmData(farm: any, index: number) {
  const farmPrefix = `Fazenda ${index + 1}:`;

  if (!farm.uuid || !isValidUUID(farm.uuid)) {
    throw new Error(`400&${farmPrefix} UUID da fazenda é obrigatório e deve ser válido`);
  }

  if (!farm.name || typeof farm.name !== 'string') {
    throw new Error(`400&${farmPrefix} Nome da fazenda é obrigatório`);
  }

  if (!farm.city || typeof farm.city !== 'string') {
    throw new Error(`400&${farmPrefix} Cidade é obrigatória`);
  }

  if (!farm.state || typeof farm.state !== 'string' || farm.state.length !== 2) {
    throw new Error(`400&${farmPrefix} Estado deve ter 2 caracteres`);
  }

  if (typeof farm.totalArea !== 'number' || farm.totalArea <= 0) {
    throw new Error(`400&${farmPrefix} Área total deve ser um número positivo`);
  }

  if (typeof farm.arableArea !== 'number' || farm.arableArea < 0) {
    throw new Error(`400&${farmPrefix} Área agricultável deve ser um número não negativo`);
  }

  if (typeof farm.vegetationArea !== 'number' || farm.vegetationArea < 0) {
    throw new Error(`400&${farmPrefix} Área de vegetação deve ser um número não negativo`);
  }

  if (farm.arableArea + farm.vegetationArea > farm.totalArea) {
    throw new Error(`400&${farmPrefix} Soma da área agricultável e vegetação não pode ser maior que a área total`);
  }

  if (farm.crops !== undefined) {
    if (!Array.isArray(farm.crops)) {
      throw new Error(`400&${farmPrefix} Culturas devem ser um array`);
    }

    farm.crops.forEach((crop: any, idx: number) => {
      if (!crop.uuid || !isValidUUID(crop.uuid)) {
        throw new Error(`400&${farmPrefix} Cultura ${idx + 1}: UUID obrigatório e válido`);
      }
      if (!crop.name || typeof crop.name !== 'string') {
        throw new Error(`400&${farmPrefix} Cultura ${idx + 1}: Nome obrigatório`);
      }
    });
  }

  return {
    uuid: farm.uuid,
    name: farm.name.trim(),
    city: farm.city.trim(),
    state: farm.state.toUpperCase(),
    totalArea: farm.totalArea,
    arableArea: farm.arableArea,
    vegetationArea: farm.vegetationArea,
    crops: farm.crops || [],
  };
}

function isValidUUID(uuid: string): boolean {
  const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return regex.test(uuid);
}

function isValidCPF(cpf: string): boolean {
  cpf = cpf.replace(/[^\d]/g, '');
  if (cpf.length !== 11) return false;
  return true;
}

function isValidCNPJ(cnpj: string): boolean {
  cnpj = cnpj.replace(/[^\d]/g, '');
  if (cnpj.length !== 14) return false;
  return true;
}
