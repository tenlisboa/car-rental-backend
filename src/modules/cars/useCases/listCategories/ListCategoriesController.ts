import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private createCategoriesUseCase: ListCategoriesUseCase) {}

  async handle(request: Request, response: Response) {
    const categories = await this.createCategoriesUseCase.execute();

    return response.status(200).json(categories);
  }
}

export { ListCategoriesController };
