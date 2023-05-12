import { ListSpecificationsUseCase } from "./listSpecificationsUseCase"
import { Request, Response } from "express"



class ListSpecificationController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listSpecificationsUseCase.execute()
    return response.json(all)
  }
}

export { ListSpecificationController }