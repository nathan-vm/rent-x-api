import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export default (): ImportCategoryController => {
  const categoriesRepository = new CategoriesRepository();
  const imporCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
  const importCategoryContoller = new ImportCategoryController(
    imporCategoryUseCase
  );

  return importCategoryContoller;
};
