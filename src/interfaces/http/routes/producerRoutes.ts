import { Request, Response, Router } from "express";
import { createProducerController } from "../controller/producer/create";
import { deleteProducerController } from "../controller/producer/delete";

const producerRoutes = Router()

producerRoutes.post("/", async(request: Request, response: Response) => {
    const data = request.body

    await createProducerController.execute(data)

    return response.status(201).json({
        status: 201,
        result: "Produtor criado com sucesso!"
    })
})

// producerRoutes.put("/", async(request: Request, response: Response) => {
//     const data = request.body

//     const producer = await updateProducer.execute(data)

//     return response.status(200).json({
//         status: 200,
//         result: "Produtor atualizado com sucesso!",
//         response: producer
//     })
// })


producerRoutes.delete("/", async(request: Request, response: Response) => {
    const  uuid  = request.query.uuid as string

    await deleteProducerController.execute(uuid)

    return response.status(200).json({
        status: 200,
        result: "Produtor deletado com sucesso!"
    })
})

export { producerRoutes }