import { User } from "@app/domain/model/User";
import { GetUserPort } from "@app/usecase/user/port/GetUserPort";

export interface GetUserUseCase extends UseCase<GetUserPort, User> {}
