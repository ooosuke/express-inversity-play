import { User } from "@app/domain/model/User";
import { UserRepository } from "@app/domain/repository/UserRepository";
import { TYPES } from "@app/lib/inversity/types";
import { GetAllUserUseCase } from "@app/usecase/user/GetAllUserUseCase";
import { inject, injectable } from "inversify";

@injectable()
export class GetAllUserInteractor implements GetAllUserUseCase {
  constructor(
    @inject(TYPES.UserRepository) private userRepository: UserRepository
  ) {}

  handle(): Promise<User[]> {
    return this.userRepository.all();
  }
}
