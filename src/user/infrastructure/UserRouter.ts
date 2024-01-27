import express from "express";

import { createUserController } from "./dependencies";
import { getAllUserController } from "./dependencies";

//New import
import { getByIdUserController } from "./dependencies";
export const userRouter = express.Router();

userRouter.get(
  "/",
  getAllUserController.run.bind(getAllUserController)
);
userRouter.post(
  "/",
  createUserController.run.bind(createUserController)
);

//New route
userRouter.get(
  "/:id",
  getByIdUserController.run.bind(getByIdUserController)
)
