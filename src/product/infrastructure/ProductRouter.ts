import express from "express";

import { createProductController } from "./dependencies";
import { getAllProductController } from "./dependencies";

//New import
import { getByIdProductController } from "./dependencies";

export const productRouter = express.Router();

productRouter.get(
  "/",
  getAllProductController.run.bind(getAllProductController)
);
productRouter.post(
  "/",
  createProductController.run.bind(createProductController)
);


//New route
productRouter.get(
  "/:id",
  getByIdProductController.run.bind(getByIdProductController)
);
