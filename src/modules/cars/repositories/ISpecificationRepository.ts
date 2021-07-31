import { Specification } from "../entities/Specification";

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationRepository {
  list(): Specification[];
  create({ name, description }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}
