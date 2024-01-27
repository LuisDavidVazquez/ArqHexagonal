import { query } from "../../database/mysql";
import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class MysqlUserRepository implements UserRepository {

  async getAll(): Promise<User[] | null> {
    const sql = "SELECT * FROM user";
    try {
      const [data]: any = await query(sql, []);
      const dataUsers = Object.values(JSON.parse(JSON.stringify(data)));

      return dataUsers.map(
        (user: any) =>
          new User(
            user.id,
            user.name,
            user.email,
            user.password
          )
      );
    } catch (error) {
      return null;
    }
  }


  async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<User | null> {
    const sql =
      "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
    const params: any[] = [name, email, password];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new User(result.insertId, name, email, password);
    } catch (error) {
      return null;
    }
  }

  
  //New method
  async getById( id:number ): Promise<User[] | null> {
    const sql = "SELECT * FROM user where id=?";
    const params: any[] = [id];
    try {
      const [data]: any = await query(sql, params);
      const dataUsers = Object.values(JSON.parse(JSON.stringify(data)));

      return dataUsers.map(
        (user: any) =>
          new User(
            user.id,
            user.name,
            user.email,
            user.password
          )
      );
    } catch (error) {
      return null;
    }
  }
}
