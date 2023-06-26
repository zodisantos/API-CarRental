import { Router } from "express";
import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/createSpecificationController";
import { ListSpecificationController } from "@modules/cars/useCases/listSpecifications/listSpecificationsController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const specificationsRoutes = Router()

const createSpecificationController = new CreateSpecificationController()
const listSpecificationController = new ListSpecificationController()

specificationsRoutes.use(ensureAuthenticated)
specificationsRoutes.post("/", createSpecificationController.handle)

specificationsRoutes.get("/", listSpecificationController.handle)

export { specificationsRoutes }