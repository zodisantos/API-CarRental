import { Specification } from "../model/specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findByName(name: string): Specification;
  list(): Specification[];
  create({name, description}: ICreateSpecificationDTO): void;
}

export { ISpecificationsRepository, ICreateSpecificationDTO }