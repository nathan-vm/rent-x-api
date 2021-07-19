import { Category } from "../../model/Category";
import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";

export class ListSpecificationsUseCase {
  constructor(private specificationRepository: SpecificationRepository) {}

  execute(): Category[] {
    const specifications = this.specificationRepository.list();

    return specifications;
  }
}
