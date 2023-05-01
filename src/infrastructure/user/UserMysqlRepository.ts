import { injectable } from "inversify";
import {
  CreateUserData,
  UserRepository,
} from "@app/domain/repository/UserRepository";
import { User } from "@app/domain/model/User";
import { db } from "@app/lib/prisma/client";

@injectable()
export class UserMysqlRepository implements UserRepository {
  async create(user: CreateUserData): Promise<User> {
    const created = await db.user.create({
      data: {
        ...user,
      },
    });

    return User.build(created);
  }

  async findById(id: string): Promise<Optional<User>> {
    const user = await db.user.findUnique({ where: { id } });

    return user ? User.build(user) : null;
  }

  async all(): Promise<User[]> {
    const users = await db.user.findMany();

    return users.map((user) => User.build(user));
  }
}
