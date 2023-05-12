import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  
  // poderia fazer direto como: 
  //constructor(private categoriesRepository: ICategoriesRepository) {}
  private categoriesRepository: ICategoriesRepository;
  
  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute({name, description}: IRequest): void {
    const categoryAlreadyExist = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExist) {
      throw new Error("Category already exists!");
    }
  
    this.categoriesRepository.create({name, description});
  }
}

export { CreateCategoryUseCase }