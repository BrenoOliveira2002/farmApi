import { CreateFarmDto } from "@dto/dtoFarm";
import { ValidateFieldsToCreateProducer } from "./interface";

const allowedCrops = ['Soja', 'Milho', 'Algodão', 'Café', 'Cana de Açucar'];
const allowedStates = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

export const validateFieldsToCreateProducer: ValidateFieldsToCreateProducer = (data) => {
    if (!data.cpf && !data.cnpj) {
        throw new Error(`400&CPF ou CNPJ é obrigatório`);
    }

    if (data.cpf && (typeof data.cpf !== 'string' || !isValidCPF(data.cpf))) {
        throw new Error(`400&CPF inválido`);
    }

    if (data.cnpj && (typeof data.cnpj !== 'string' || !isValidCNPJ(data.cnpj))) {
        throw new Error(`400&CNPJ inválido`);
    }

    if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
        throw new Error(`400&Nome do produtor é obrigatório`);
    }

    const validatedFarms = [];
    if (data.farms && Array.isArray(data.farms)) {
        for (let i = 0; i < data.farms.length; i++) {
            const farm = data.farms[i];
            console.log(farm)
            const validatedFarm = validateFarmData(farm, i);
            validatedFarms.push(validatedFarm);
        }
    }

    return {
        formattedData: {
            cpf: data.cpf,
            cnpj: data.cnpj,
            name: data.name.trim(),
            farms: validatedFarms.length > 0 ? validatedFarms : undefined
        }
    };
}

function validateFarmData(farm: CreateFarmDto, index: number) {
    const farmPrefix = `Fazenda ${index + 1}:`;

    if (!farm.name || typeof farm.name !== 'string') {
        throw new Error(`400&${farmPrefix} Nome da fazenda é obrigatório`);
    }

    if (!farm.city || typeof farm.city !== 'string') {
        throw new Error(`400&${farmPrefix} Cidade é obrigatória`);
    }

    if (!farm.state || typeof farm.state !== 'string' || farm.state.length !== 2 || !allowedStates.includes(farm.state.toUpperCase()))  {
            throw new Error(`400&${farmPrefix} Estado "${farm.state}" não é permitido. Permitidos: ${allowedStates.join(', ')}`);
    }

    if (!farm.totalArea || typeof farm.totalArea !== 'number' || farm.totalArea <= 0) {
        throw new Error(`400&${farmPrefix} Área total deve ser um número positivo`);
    }

    if (farm.arableArea === undefined || typeof farm.arableArea !== 'number' || farm.arableArea < 0) {
        throw new Error(`400&${farmPrefix} Área agricultável deve ser um número não negativo`);
    }

    if (farm.vegetationArea === undefined || typeof farm.vegetationArea !== 'number' || farm.vegetationArea < 0) {
        throw new Error(`400&${farmPrefix} Área de vegetação deve ser um número não negativo`);
    }

    if (farm.arableArea + farm.vegetationArea > farm.totalArea) {
        throw new Error(`400&${farmPrefix} Soma da área agricultável e vegetação não pode ser maior que a área total`);
    }

    if (!Array.isArray(farm.cropName)) {
        throw new Error(`400&${farmPrefix} Culturas (cropName) são obrigatórias e devem ser uma lista`);
    }

    for (const cropName of farm.cropName) {
        if (!allowedCrops.includes(cropName)) {
            throw new Error(`400&${farmPrefix} Cultura "${cropName}" não é permitida. Permitidas: ${allowedCrops.join(', ')}`);
        }
    }

    return {
        name: farm.name.trim(),
        city: farm.city.trim(),
        state: farm.state.toUpperCase(),
        totalArea: farm.totalArea,
        arableArea: farm.arableArea,
        vegetationArea: farm.vegetationArea,
        cropName: farm.cropName
    };
}

function isValidCPF(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let sum = 0, remainder;

    for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    return remainder === parseInt(cpf.substring(10, 11));
}

function isValidCNPJ(cnpj: string): boolean {
    cnpj = cnpj.replace(/[^\d]/g, '');
    if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;

    let length = cnpj.length - 2;
    let numbers = cnpj.substring(0, length);
    let digits = cnpj.substring(length);
    let sum = 0, pos = length - 7;

    for (let i = length; i >= 1; i--) {
        sum += parseInt(numbers.charAt(length - i)) * pos--;
        if (pos < 2) pos = 9;
    }

    let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(digits.charAt(0))) return false;

    length += 1;
    numbers = cnpj.substring(0, length);
    sum = 0;
    pos = length - 7;

    for (let i = length; i >= 1; i--) {
        sum += parseInt(numbers.charAt(length - i)) * pos--;
        if (pos < 2) pos = 9;
    }

    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    return result === parseInt(digits.charAt(1));
}
