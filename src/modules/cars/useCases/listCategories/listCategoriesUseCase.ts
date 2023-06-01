import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { Category } from "../../entities/category";
import { inject, injectable } from "tsyringe";


@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list()
    return categories
  }
}

export { ListCategoriesUseCase }