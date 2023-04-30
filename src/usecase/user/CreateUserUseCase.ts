import { User } from "@app/domain/model/User";
import { CreateUserCasePort } from "@app/usecase/user/port/CreateUserPort";

export type CreateUserUseCase = UseCase<CreateUserCasePort, User>;
