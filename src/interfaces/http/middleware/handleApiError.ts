import { NextFunction, Request, Response } from "express";
import { Prisma } from "@prisma/client/external";
import { logger } from "@lib/pino";
 

export async function handleApiError(error: Error, request: Request, response: Response, next: NextFunction) {
    logger.error("Ops, algo deu errado, segue a stack do erro: "+error.stack);

    if (error instanceof Prisma.PrismaClientKnownRequestError){
        let columnName: string | undefined = undefined;
 
        if (error.code === "P1000" || error.code === "P1001" || error.code === "P1002" || error.code === "P1003" || error.code === "P1008" || error.code === "P1009" || error.code === "P1010") {
            return response.status(502).json({
                status: 502,
                result: "Falha ao se conectar com o banco de dados"
            });
        }
 
        if (error.code === "P1017") {
            return response.status(502).json({
                status: 502,
                result: "O servidor encerrou a conexão com o banco de dados"
            });
        }
 
        if(error.code === "P2000") {
            if (error.meta?.column_name) {
                const tableName = error.message.split("Invalid `this.prismaService.")[1]?.split(".")[0];
 
                if (tableName) {
                    const tableReference = Prisma.dmmf.datamodel.models.find((value) => value.name === tableName);
                    const fieldDetails = tableReference?.fields.find((value) => value.dbName === error.meta!.column_name);
 
                    columnName = fieldDetails?.name;
                }
            }
            return response.status(400).json({
                status: 400,
                result: columnName ? `O campo ${columnName} possui um valor muito longo para a sua respectiva coluna no banco`: "Um dos valores fornecido possui um valor muito longo para a sua respectiva coluna no banco"
            });
        }
 
        if(error.code === "P2002") {
            const setOfUniqueFields: any = [];
 
            if (error.meta?.target) {
                const tableName = error.message.split("Invalid `this.prismaService.")[1]?.split(".")[0];
 
                if (tableName) {
                    const tableReference = Prisma.dmmf.datamodel.models.find((value) => value.name === tableName);
                    const uniqueIndexes = tableReference?.uniqueIndexes.find((value) => value.name === error.meta!.target);
 
                    if (uniqueIndexes) {
                        setOfUniqueFields.push(uniqueIndexes.fields.filter(key => key !== "isDeleted"));
                    }
                }
            }
 
            return response.status(409).json({
                status: 409,
                result: setOfUniqueFields.length === 1 ? `O(s) campo(s): ${[...setOfUniqueFields]} forma(m) um conjunto de informações únicas já cadastrada :/`: "Ops, parece que alguma informação ou conjunto de duas ou mais informações únicas já esta cadastrada :/"
            });
        }
 
        if(error.code === "P2003") {
            if (error.meta?.field_name) {
                const tableName = error.message.split("Invalid `this.prismaService.")[1]?.split(".")[0];
 
                if (tableName) {
                    const tableReference = Prisma.dmmf.datamodel.models.find((value) => value.name === tableName);
 
                    const fieldDetails = tableReference?.fields.find((value) => value.dbName === error.meta!.field_name || value.name === error.meta!.field_name);
 
                    if (!fieldDetails?.name) {
                        const relationForeignKey = Prisma.dmmf.datamodel.models.find(model => {
                            return model.fields.find(fields => fields.dbName === error.meta!.field_name);
                        });
 
                        logger.warn(`O problema do erro foi na seguinte chave estrangeira: ${relationForeignKey}`);
                    }
 
                    columnName = fieldDetails?.name;
                }
            }
 
            return response.status(409).json({
                status: 409,
                result: columnName ? `Erro de chave estrangeira, o valor do campo ${columnName} passado não existe na sua referência obrigatória!` : "Erro de chave estrangeira, o valor de algum campo passado não existe na sua referência obrigatória!"
            });
        }
 
        if(error.code === "P2010") {
            if(!error.meta) {
                return response.status(400).json({
                    status: 400,
                    result: "Erro ao executar consulta, verifique os nomes dos campos e seus valores"
                });
            }
 
            const errorMessage = error.meta.message as string;
            const [isTable, columnName,,,] = errorMessage.split("'");
 
            if (isTable.includes("Table")) {
                return response.status(400).json({
                    status: 400,
                    result: "Tabela não encontrada para consulta neste banco de dados"
                });
            }
 
            return response.status(400).json({
                status: 400,
                result: `Coluna: ${columnName} não encontrada na tabela relacionada a este endpoint`
            });
        }
 
        if (error.code === "P2021") {
            return response.status(404).json({
                status: 404,
                result: "A tabela consultada nesse endpoint não existe mais no banco de dados. Contate o suporte para correção"
            });
        }
 
        if(error.code === "P2022") {
            if (error.meta?.column) {
                const columnNameInDatabase = error.meta!.column as string;
                const tableName = columnNameInDatabase.split(".")[1];
                const tableReference = Prisma.dmmf.datamodel.models.find((value) => value.name === tableName);
 
                const fielDetails = tableReference?.fields.find((value) => value.dbName === columnNameInDatabase.split(".")[2]);
 
                columnName = fielDetails?.name;
            }
 
            return response.status(409).json({
                status: 409,
                result: columnName ? `Coluna: ${columnName} não encontrada na tabela consultada` : "Algum campo passado não foi encontrado sua referência na tabela consultada"
            });
        }
 
        if(error.code === "P2025") {
            return response.status(404).json({
                status: 404,
                result: "Registro não encontrado para atualização/exclusão!"
            });
        }
 
        return response.status(500).json({
            status: 500,
            result: "Falha na comunicação com o banco, contate o suporte"
        });
 
    }
 
    if(error instanceof Prisma.PrismaClientValidationError) {
 
        return response.status(400).json({
            status: 400,
            result: "Algum campo enviado possui um tipo de dado inválido, consulte a documentação para enviar a tipagem certa"
        });
    }
 
    if(error instanceof Prisma.PrismaClientInitializationError) {
 
        return response.status(502).json({
            status: 502,
            result: "Falha ao se conectar com o banco de dados!"
        });
    }
 
    if(error instanceof Error){
        const converteErroMessageToString = error.message as string;
 
        if(converteErroMessageToString.startsWith("4") || converteErroMessageToString.startsWith("5") || converteErroMessageToString.startsWith("2")){
            const [status, message] = converteErroMessageToString.split("&");
            return response.status(parseInt(status)).json({
                status: parseInt(status),
                result: message
            });
        } else {
            if(error.message.startsWith("Unexpected token")) {
                return response.status(400).json({
                    status: 400,
                    result: error.message
                });
            }
 
            return response.status(500).json({ status: 500, result: "Ops, houve uma falha inesperada :(" });
        }
    }

    return response.status(500).json({
        status: 500,
        result: "Internal server error!"
    });
}
