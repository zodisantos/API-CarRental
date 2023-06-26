import { IUsersRepository } from "../../repositories/IUsersRepository"
import { inject, injectable } from "tsyringe"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { AppError } from "@shared/errors/appError"



interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
  }
  token: string
}

@injectable()
class AutheinticateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {

    // User exist
    const user = await this.usersRepository.findByEmail(email)

    if(!user) {
      throw new AppError("Email or password incorrect!")
    }
    
    // Password is correct
    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {
      throw new AppError("Email or password incorrect!")
    }

    // generate jsonwebtoken
    const token = sign({}, "0ed430d59a2c1dd96f192f3126bd9978", {
      subject: user.id,
      expiresIn: "1d"
    })

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email
      }
    }

    return tokenReturn
  }

}

export { AutheinticateUserUseCase }