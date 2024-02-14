import { CreateUserUseCase } from "../application/CreateUserUseCase";
import { GetAllUserUseCase } from "../application/GetAllUsersUseCase";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllUserController } from "./controllers/GetAllUserController";
import { MysqlUserRepository } from "./MysqlUserRepository";
import { EncryptServiceHelpers } from "./helpers/EncryptServiceHelpers";
import { GetByIdUserUseCase} from "../application/GetByIdUserUseCase";
import { GetByIdUserController } from "./controllers/GetByIdUserController";
import { NotificationHelpers } from "./helpers/NotificationHelper";

export const mysqlUserRepository = new MysqlUserRepository();

export const notificationsHelpers = new NotificationHelpers();

notificationsHelpers.inicializar(); 

export const createUserUseCase = new CreateUserUseCase(
  mysqlUserRepository, notificationsHelpers
);
export const getAllUseCase = new GetAllUserUseCase(
  mysqlUserRepository
);
export const encryptService = new EncryptServiceHelpers();

export const createUserController = new CreateUserController(
  createUserUseCase, encryptService
);
export const getAllUserController = new GetAllUserController(
  getAllUseCase
);
export const getByIdUserUseCase = new GetByIdUserUseCase(
  mysqlUserRepository
);
export const getByIdUserController = new GetByIdUserController(
  getByIdUserUseCase
);


