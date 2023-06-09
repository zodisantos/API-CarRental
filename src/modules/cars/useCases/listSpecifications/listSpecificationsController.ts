import { container } from "tsyringe"
import { ListSpecificationsUseCase } from "./listSpecificationsUseCase"
import { Request, Response } from "express"



class ListSpecificationController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const listSpecificationsUseCase = container.resolve(ListSpecificationsUseCase)

    const all = await listSpecificationsUseCase.execute()

    return response.json(all)
  }
}

export { ListSpecificationController }