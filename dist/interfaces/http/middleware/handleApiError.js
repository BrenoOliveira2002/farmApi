"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleApiError = void 0;
const external_1 = require("../../../../generated/client");
const pino_1 = require("../../../infrastructure/lib/pino");
async function handleApiError(error, request, response, next) {
    pino_1.logger.error("Ops, algo deu errado, segue a stack do erro: " + error.stack);
    if (error instanceof external_1.Prisma.PrismaClientKnownRequestError) {
        let columnName = undefined;
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
        if (error.code === "P2000") {
            if (error.meta?.column_name) {
                const tableName = error.message.split("Invalid `this.prismaService.")[1]?.split(".")[0];
                if (tableName) {
                    const tableReference = external_1.Prisma.dmmf.datamodel.models.find((value) => value.name === tableName);
                    const fieldDetails = tableReference?.fields.find((value) => value.dbName === error.meta.column_name);
                    columnName = fieldDetails?.name;
                }
            }
            return response.status(400).json({
                status: 400,
                result: columnName ? `O campo ${columnName} possui um valor muito longo para a sua respectiva coluna no banco` : "Um dos valores fornecido possui um valor muito longo para a sua respectiva coluna no banco"
            });
        }
        if (error.code === "P2002") {
            const setOfUniqueFields = [];
            if (error.meta?.target) {
                const tableName = error.message.split("Invalid `this.prismaService.")[1]?.split(".")[0];
                if (tableName) {
                    const tableReference = external_1.Prisma.dmmf.datamodel.models.find((value) => value.name === tableName);
                    const uniqueIndexes = tableReference?.uniqueIndexes.find((value) => value.name === error.meta.target);
                    if (uniqueIndexes) {
                        setOfUniqueFields.push(uniqueIndexes.fields.filter(key => key !== "isDeleted"));
                    }
                }
            }
            return response.status(409).json({
                status: 409,
                result: setOfUniqueFields.length === 1 ? `O(s) campo(s): ${[...setOfUniqueFields]} forma(m) um conjunto de informações únicas já cadastrada :/` : "Ops, parece que alguma informação ou conjunto de duas ou mais informações únicas já esta cadastrada :/"
            });
        }
        if (error.code === "P2003") {
            if (error.meta?.field_name) {
                const tableName = error.message.split("Invalid `this.prismaService.")[1]?.split(".")[0];
                if (tableName) {
                    const tableReference = external_1.Prisma.dmmf.datamodel.models.find((value) => value.name === tableName);
                    const fieldDetails = tableReference?.fields.find((value) => value.dbName === error.meta.field_name || value.name === error.meta.field_name);
                    if (!fieldDetails?.name) {
                        const relationForeignKey = external_1.Prisma.dmmf.datamodel.models.find(model => {
                            return model.fields.find(fields => fields.dbName === error.meta.field_name);
                        });
                        pino_1.logger.warn(`O problema do erro foi na seguinte chave estrangeira: ${relationForeignKey}`);
                    }
                    columnName = fieldDetails?.name;
                }
            }
            return response.status(409).json({
                status: 409,
                result: columnName ? `Erro de chave estrangeira, o valor do campo ${columnName} passado não existe na sua referência obrigatória!` : "Erro de chave estrangeira, o valor de algum campo passado não existe na sua referência obrigatória!"
            });
        }
        if (error.code === "P2010") {
            if (!error.meta) {
                return response.status(400).json({
                    status: 400,
                    result: "Erro ao executar consulta, verifique os nomes dos campos e seus valores"
                });
            }
            const errorMessage = error.meta.message;
            const [isTable, columnName, , ,] = errorMessage.split("'");
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
        if (error.code === "P2022") {
            if (error.meta?.column) {
                const columnNameInDatabase = error.meta.column;
                const tableName = columnNameInDatabase.split(".")[1];
                const tableReference = external_1.Prisma.dmmf.datamodel.models.find((value) => value.name === tableName);
                const fielDetails = tableReference?.fields.find((value) => value.dbName === columnNameInDatabase.split(".")[2]);
                columnName = fielDetails?.name;
            }
            return response.status(409).json({
                status: 409,
                result: columnName ? `Coluna: ${columnName} não encontrada na tabela consultada` : "Algum campo passado não foi encontrado sua referência na tabela consultada"
            });
        }
        if (error.code === "P2025") {
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
    if (error instanceof external_1.Prisma.PrismaClientValidationError) {
        return response.status(400).json({
            status: 400,
            result: "Algum campo enviado possui um tipo de dado inválido, consulte a documentação para enviar a tipagem certa"
        });
    }
    if (error instanceof external_1.Prisma.PrismaClientInitializationError) {
        return response.status(502).json({
            status: 502,
            result: "Falha ao se conectar com o banco de dados!"
        });
    }
    if (error instanceof Error) {
        const converteErroMessageToString = error.message;
        if (converteErroMessageToString.startsWith("4") || converteErroMessageToString.startsWith("5") || converteErroMessageToString.startsWith("2")) {
            const [status, message] = converteErroMessageToString.split("&");
            return response.status(parseInt(status)).json({
                status: parseInt(status),
                result: message
            });
        }
        else {
            if (error.message.startsWith("Unexpected token")) {
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
exports.handleApiError = handleApiError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlQXBpRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJmYWNlcy9odHRwL21pZGRsZXdhcmUvaGFuZGxlQXBpRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esc0RBQWlEO0FBQ2pELG9DQUFtQztBQUc1QixLQUFLLFVBQVUsY0FBYyxDQUFDLEtBQVksRUFBRSxPQUFnQixFQUFFLFFBQWtCLEVBQUUsSUFBa0I7SUFDdkcsYUFBTSxDQUFDLEtBQUssQ0FBQywrQ0FBK0MsR0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFMUUsSUFBSSxLQUFLLFlBQVksaUJBQU0sQ0FBQyw2QkFBNkIsRUFBQztRQUN0RCxJQUFJLFVBQVUsR0FBdUIsU0FBUyxDQUFDO1FBRS9DLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDcEwsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDN0IsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsTUFBTSxFQUFFLDJDQUEyQzthQUN0RCxDQUFDLENBQUM7U0FDTjtRQUVELElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDeEIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDN0IsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsTUFBTSxFQUFFLG9EQUFvRDthQUMvRCxDQUFDLENBQUM7U0FDTjtRQUVELElBQUcs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