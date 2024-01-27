import { CreateProductUseCase } from "../application/CreateProductUseCase";
import { GetAllProductUseCase } from "../application/GetAllProductUseCase";
import { CreateProductController } from "./controllers/CreateProductController";
import { GetAllProductController } from "./controllers/GetAllProductController";
import { MysqlProductRepository } from "./MysqlProductRepository";

//New import
import { GetByIdProductUseCase } from "../application/GetByIdProductUseCase";
import { GetByIdProductController } from "./controllers/GetByIdProductController";


export const mysqlProductRepository = new MysqlProductRepository();

export const createProductUseCase = new CreateProductUseCase(
  mysqlProductRepository
);
export const getAllUseCase = new GetAllProductUseCase(
  mysqlProductRepository
);
export const createProductController = new CreateProductController(
  createProductUseCase
);
export const getAllProductController = new GetAllProductController(
  getAllUseCase
);


//New dependencies
export const getByIdProductUseCase = new GetByIdProductUseCase(
  mysqlProductRepository
);
export const getByIdProductController = new GetByIdProductController(
  getByIdProductUseCase
)


