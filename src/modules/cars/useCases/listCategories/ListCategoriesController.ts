import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  async handle(request: Request, response: Response) {
    const createCategoriesUseCase = container.resolve(ListCategoriesUseCase);
    const categories = await createCategoriesUseCase.execute();

    return response.status(200).json(categories);
  }
}

export { ListCategoriesController };
