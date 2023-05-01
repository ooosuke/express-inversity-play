import { Container } from "inversify";
import { UserRepository } from "@app/domain/repository/UserRepository";
import { TYPES } from "@app/lib/inversity/types";
import { CreateUserUseCase } from "@app/usecase/user/CreateUserUseCase";
import { CreateUserInteractor } from "@app/application/user/CreateUserInteractor";
import { GetUserUseCase } from "@app/usecase/user/GetUserUseCase";
import { GetUserInteractor } from "@app/application/user/GetUserInteractor";
import { UserMysqlRepository } from "@app/infrastructure/user/UserMysqlRepository";

const container = new Container();
container
  .bind<UserRepository>(TYPES.UserRepository)
  .to(UserMysqlRepository)
  .inSingletonScope();
container
  .bind<CreateUserUseCase>(TYPES.CreateUserUseCase)
  .to(CreateUserInteractor)
  .inSingletonScope();
container
  .bind<GetUserUseCase>(TYPES.GetUserUseCase)
  .to(GetUserInteractor)
  .inSingletonScope();

export { container };
