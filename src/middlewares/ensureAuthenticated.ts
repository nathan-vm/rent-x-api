import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface ITokenPayLoad {
  iat: number;
  exp: number;
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT Token is missing", 401);
  }
  const [, token] = authHeader.split(" ");

  try {
    const { sub: id } = verify(
      token,
      "259be1b92e6be32ba44818f33aa83154"
    ) as ITokenPayLoad;

    const userRepository = new UsersRepository();
    const user = await userRepository.findById(id);

    console.log(user);

    if (!user) {
      throw new AppError("unknown user", 401);
    }

    return next();
  } catch {
    throw new AppError("Invalid JWT Token", 401);
  }
}
