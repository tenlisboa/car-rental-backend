import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    try {
      this.createCategoryUseCase.execute({ name, description });

      return response.status(200).send();
    } catch (err) {
      return response.status(422).json({
        error: true,
        message: (err as Error).message,
      });
    }
  }
}

export { CreateCategoryController };
