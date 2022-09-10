import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../exceptions/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new AppError("Token missing");
  }

  const token = authorization.split(" ")[1];

  try {
    const { sub: userId } = verify(token, "idfji0f9832qjf982hjf39ghqw0f73gfc9");

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(userId as string);

    if (!user) {
      throw new AppError("User does not exists.");
    }

    next();
  } catch (err) {
    throw new AppError("Invalid token");
  }
}
