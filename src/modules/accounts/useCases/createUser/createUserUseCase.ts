import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUsersDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt"
import { AppError } from "@errors/appError";


@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  

  async execute({name, email, driver_license, password}: ICreateUserDTO): Promise<void> {

    const userAlreadyExistis = await this.usersRepository.findByEmail(email)

    if(userAlreadyExistis) {
      throw new AppError("User already exists")
    }

    const passwordHash = await hash(password, 8)

    await this.usersRepository.create({
      name,
      email,
      driver_license,
      password: passwordHash
    })
  }
}

export { CreateUserUseCase }