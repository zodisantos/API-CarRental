// adicionar coluna avatar na tabela de users
// refatorar usuário com coluna avatar
// configuração upload multer
// criar regra de negócio do upload
// criar controller

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository"
import { inject, injectable } from "tsyringe"
import { deleteFile } from "../../../../utils/file"

interface IRequest {
  user_id: string
  avatar_file: string
}

@injectable()
class UpdateUserAvatarUseCase {

  constructor(@inject("UsersRepository") private usersRepository: IUsersRepository) {}

  async execute({ user_id, avatar_file }: IRequest): Promise<void> {

    const user = await this.usersRepository.findById(user_id)

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`)
    }
    
    user.avatar = avatar_file

    await this.usersRepository.create(user)
  }
}

export { UpdateUserAvatarUseCase }