import { AppError } from "@shared/errors/appError"
import { CategoriersRepositoryInMemory } from "../../repositories/in-memory/categoriesRepositoryInMemory"
import { CreateCategoryUseCase } from "./createCategoryUseCase"

let createCategoryUseCase: CreateCategoryUseCase
let categoriesRepositoryInMemory: CategoriersRepositoryInMemory

describe("Create Category", () => {

  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriersRepositoryInMemory()
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory) 
  })

  it("should be able to create a new category", async () => {
    const category = {
      name: "Category Test",
      description: "Category description Test"
    }

    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description
    })

    const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name)
    
    expect(categoryCreated).toHaveProperty("id")
  })

  it("should not be able to create a new category with name exists", async () => {
    expect(async () => {
      const category = {
        name: "Category Test",
        description: "Category description Test"
      }
  
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description
      })
  
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})