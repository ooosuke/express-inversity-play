import { User } from "@app/domain/model/User";
import { CreateUserCasePort } from "@app/usecase/user/port/CreateUserPort";

export interface CreateUserUseCase extends UseCase<CreateUserCasePort, User> {}
