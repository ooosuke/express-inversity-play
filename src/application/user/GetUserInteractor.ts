import { User } from "@app/domain/model/User";
import { UserRepository } from "@app/domain/repository/UserRepository";
import { TYPES } from "@app/lib/inversity/types";
import { GetUserUseCase } from "@app/usecase/user/GetUserUseCase";
import { GetUserPort } from "@app/usecase/user/port/GetUserPort";
import { inject, injectable } from "inversify";

@injectable()
export class GetUserInteractor implements GetUserUseCase {
  constructor(
    @inject(TYPES.UserRepository) private userRepository: UserRepository
  ) {}

  async handle(port: GetUserPort): Promise<User> {
    return await this.userRepository.findById(port.id);
  }
}
