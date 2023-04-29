import { v4 as uuidV4 } from "uuid";
import { injectable } from "inversify";
import {
  CreateUserData,
  UserRepository,
} from "@app/domain/repository/UserRepository";
import { User } from "@app/domain/model/User";

@injectable()
export class UserInMemoryRepository implements UserRepository {
  private readonly users: Map<string, User> = new Map();

  async create(user: CreateUserData): Promise<User> {
    const id = uuidV4();
    const created = User.build({
      id,
      ...user,
    });

    this.users.set(id, created);

    return created;
  }

  async findById(id: string): Promise<Optional<User>> {
    return this.users.get(id);
  }

  async all(): Promise<User[]> {
    return Array.from(this.users.values());
  }
}
