import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";
import { INotificationService } from "./services/INotificationService";

export class CreateUserUseCase {
  constructor(readonly userRepository: UserRepository, readonly notifications : INotificationService ) {}

  async run(
    name: string,
    email: string,
    password: string
  ): Promise<User | null> {
    try {
      const user = await this.userRepository.createUser(
        name,
        email,
        password
      );
      this.notifications.sendNotify("Se ha registrado u nuevo usuario")
      return user;
    } catch (error) {
      return null;
    }
  }
}