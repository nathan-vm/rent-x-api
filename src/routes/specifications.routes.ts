import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificarionsRoutes = Router();

specificarionsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificarionsRoutes.get("/", (request, response) => {
  return listSpecificationsController.handle(request, response);
});
export { specificarionsRoutes };
