import { CategoriesRepository } from "../../repositories/implementations/categoriesRepository";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";


const categoriesRepository = CategoriesRepository.getInstance()
const listCateegoriesUseCase = new ListCategoriesUseCase(categoriesRepository)
const listCategoriesController = new ListCategoriesController(listCateegoriesUseCase)

export { listCategoriesController }