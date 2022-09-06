import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private SpecificationsRepository: ISpecificationsRepository
  ) {}
  async execute({ name, description }: IRequest): Promise<void> {
    const specificationExists = await this.SpecificationsRepository.findByName(
      name
    );

    if (specificationExists) {
      throw new Error("Specification already exists!");
    }

    this.SpecificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
