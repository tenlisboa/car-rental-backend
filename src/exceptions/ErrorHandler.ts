import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";

export const errorHandler = (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      error: true,
      message: err.message,
    });
  }

  console.error(err);
  return response.status(500).json({
    error: true,
    message: "Internal server error",
  });
};
