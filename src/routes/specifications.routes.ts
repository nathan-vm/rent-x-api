import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../modules/cars/useCases/listSpecifications/ListSpecificationsController";

const specificarionsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificarionsRoutes.post("/", createSpecificationController.handle);

specificarionsRoutes.get("/", listSpecificationsController.handle);
export { specificarionsRoutes };
