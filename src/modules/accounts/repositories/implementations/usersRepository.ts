import { Repository, getRepository } from "typeorm";
import { IUsersRepository } from "../IUsersRepository";
import { User } from "@modules/accounts/entities/user";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUsersDTO";



class UsersRepository implements IUsersRepository {

  private repository: Repository<User> 

  constructor() {
    this.repository = getRepository(User)
  }

  async create({ name, email, driver_license, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password
    })

    await this.repository.save(user)
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email })
    return user
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id)
    return user
  }
}

export { UsersRepository }