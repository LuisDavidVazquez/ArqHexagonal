import { User } from "./User";

export interface UserRepository {
  getAll(): Promise<User[] | null>;

  createUser(
    name: string,
    email: string,
    password: string
  ): Promise<User | null>;
  
  //New repository
  getById(id : number) : Promise <User[] | null>;
  
}
