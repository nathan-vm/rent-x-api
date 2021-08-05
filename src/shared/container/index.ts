import { container } from "tsyringe";

import { ICategoriesReopsitory } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificationRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository";

container.registerSingleton<ICategoriesReopsitory>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);
