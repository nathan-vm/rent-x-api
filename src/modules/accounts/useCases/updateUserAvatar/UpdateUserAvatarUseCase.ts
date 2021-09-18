import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IAddUserAvatarDTO } from "../../dtos/IAddUserAvatarDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute({ avatarFile, userId }: IAddUserAvatarDTO): Promise<void> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new AppError("User not exist", 404);
    }

    user.avatar = avatarFile;
    await this.userRepository.create(user);
  }
}
