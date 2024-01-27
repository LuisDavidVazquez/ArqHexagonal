import { CreateUserUseCase } from "../application/CreateUserUseCase";
import { GetAllUserUseCase } from "../application/GetAllUsersUseCase";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllUserController } from "./controllers/GetAllUserController";
import { MysqlUserRepository } from "./MysqlUserRepository";

//New imports
import { GetByIdUserUseCase} from "../application/GetByIdUserUseCase";
import { GetByIdUserController } from "./controllers/GetByIdUserController";

export const mysqlUserRepository = new MysqlUserRepository();

export const createUserUseCase = new CreateUserUseCase(
  mysqlUserRepository
);
export const getAllUseCase = new GetAllUserUseCase(
  mysqlUserRepository
);
export const createUserController = new CreateUserController(
  createUserUseCase
);
export const getAllUserController = new GetAllUserController(
  getAllUseCase
);

//New dependecies
export const getByIdUserUseCase = new GetByIdUserUseCase(
  mysqlUserRepository
);
export const getByIdUserController = new GetByIdUserController(
  getByIdUserUseCase
);


