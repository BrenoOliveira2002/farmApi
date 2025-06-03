"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFieldsToUpdateProducer = void 0;
const validateFieldsToUpdateProducer = (data) => {
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
exports.validateFieldsToUpdateProducer = validateFieldsToUpdateProducer;
function validateFarmData(farm, index) {
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
        farm.crops.forEach((crop, idx) => {
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
function isValidUUID(uuid) {
    const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return regex.test(uuid);
}
function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');
    if (cpf.length !== 11)
        return false;
    return true;
}
function isValidCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]/g, '');
    if (cnpj.length !== 14)
        return false;
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvblVwZGF0ZUZhcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW50ZXJmYWNlcy9odHRwL3ZhbGlkYXRvcnMvcHJvZHVjZXIvdXBkYXRlRmFybS92YWxpZGF0aW9uVXBkYXRlRmFybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHTyxNQUFNLDhCQUE4QixHQUFtQyxDQUFDLElBQUksRUFBRSxFQUFFO0lBRXJGLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3RELE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztLQUNsRDtJQUVELElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUU7UUFDMUIsSUFBSSxPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssUUFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6RCxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDckM7S0FDRjtJQUVELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7UUFDM0IsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1RCxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDdEM7S0FDRjtJQUVELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7UUFDM0IsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNsRSxNQUFNLElBQUksS0FBSyxDQUFDLCtCQUEr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