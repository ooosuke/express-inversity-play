import { User } from "@app/domain/model/User";
import { UserRepository } from "@app/domain/repository/UserRepository";
import { TYPES } from "@app/lib/inversity/types";
import { CreateUserUseCase } from "@app/usecase/user/CreateUserUseCase";
import { CreateUserCasePort } from "@app/usecase/user/port/CreateUserPort";
import { inject, injectable } from "inversify";

@injectable()
export class CreateUserInteractor implements CreateUserUseCase {
  constructor(
    @inject(TYPES.UserRepository) private userRepository: UserRepository
  ) {}

  async handle(port: CreateUserCasePort): Promise<User> {
    return await this.userRepository.create(port);
  }
}
