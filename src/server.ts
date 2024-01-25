import express from "express";
import { Signale } from "signale";

import { userRouter } from "./user/infrastructure/UserRouter";
import { productRouter } from "./product/infrastructure/ProductRouter";

const app = express();

const signale = new Signale();

app.use(express.json());
app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(3000, () => {
  signale.success("Server online in port 3000");
});
