import { User } from "@app/domain/model/User";
import { GetUserPort } from "@app/usecase/user/port/GetUserPort";

export type GetUserUseCase = UseCase<GetUserPort, User>;
