import { container } from "tsyringe"
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository"
import { CategoriesRepository } from "@modules/cars/repositories/implementations/categoriesRepository"
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository"
import { SpecificationsRepository } from "@modules/cars/repositories/implementations/specificationsRepository"
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository"
import { UsersRepository } from "@modules/accounts/repositories/implementations/usersRepository"

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
