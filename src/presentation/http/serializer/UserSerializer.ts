import { User } from "@app/domain/model/User";

export class UserSerializer {
  static serialize(user: User) {
    if (!user) {
      return null;
    }
    return {
      ...user,
    };
  }
}
