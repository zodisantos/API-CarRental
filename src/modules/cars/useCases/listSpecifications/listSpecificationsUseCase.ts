import { Specification } from "../../model/specification"
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository"


class ListSpecificationsUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    const specifications = this.specificationRepository.list()
    return specifications
  }
}

export { ListSpecificationsUseCase }