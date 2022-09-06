import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    try {
      const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
      createCategoryUseCase.execute({ name, description });

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
