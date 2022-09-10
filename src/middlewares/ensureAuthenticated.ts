import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new Error("Token missing");
  }

  const token = authorization.split(" ")[1];

  try {
    const { sub: userId } = verify(token, "idfji0f9832qjf982hjf39ghqw0f73gfc9");

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(userId as string);

    if (!user) {
      throw new Error("User does not exists.");
    }

    next();
  } catch (err) {
    throw new Error("Invalid token");
  }
}
