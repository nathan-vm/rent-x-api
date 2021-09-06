import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IAuthUserDTO } from "../../dtos/IAuthUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IResponse {
  user: {
    name: string;
    email: string;
    isAdmin: boolean;
  };
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IAuthUserDTO): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect");
    }

    const token = sign(
      {
        name: user.name,
        email: user.email,
        admin: user.isAdmin,
      },
      "259be1b92e6be32ba44818f33aa83154",
      { expiresIn: "1d", subject: user.id }
    );

    return {
      user: {
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
      },
      token,
    };
  }
}
