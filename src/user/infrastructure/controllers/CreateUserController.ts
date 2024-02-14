import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/CreateUserUseCase";
import { EncryptServiceHelpers } from "../helpers/EncryptServiceHelpers";

export class CreateUserController {
  constructor(readonly createUserUseCase: CreateUserUseCase, readonly encryptService : EncryptServiceHelpers ) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    
    const passCrypted = this.encryptService.encryptService(
      data.password
    );
    try {
      const user = await this.createUserUseCase.run(
        data.name,
        data.email,
        passCrypted 
      );

      if (user)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            password : passCrypted
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
