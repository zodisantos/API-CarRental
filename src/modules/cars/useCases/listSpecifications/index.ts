import { SpecificationsRepository } from "../../repositories/implementations/specificationsRepository";
import { ListSpecificationController } from "./listSpecificationsController";
import { ListSpecificationsUseCase } from "./listSpecificationsUseCase";



const specificationsRepository = SpecificationsRepository.getInstance()
const listSpecificationUseCase = new ListSpecificationsUseCase(specificationsRepository)
const listSpecificationController = new ListSpecificationController(listSpecificationUseCase)

export { listSpecificationController }