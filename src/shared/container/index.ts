import { container } from "tsyringe"
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository"
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/categoriesRepository"
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository"
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/specificationsRepository"
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository"
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/usersRepository"


container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository 
)

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository 
)

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)
