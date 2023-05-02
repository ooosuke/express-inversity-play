import { Type, plainToInstance } from "class-transformer";
import { User as UserModel } from "@prisma/client";
import { Profile } from "@app/domain/model/Profile";

export type UserValues = {
  id: string;
  name: string;
  age: number;
};

export class User implements UserModel {
  id: string;

  name: string;

  age: number;

  @Type(() => Date)
  createdAt: Date;

  @Type(() => Date)
  updatedAt: Date;

  @Type(() => Profile)
  profile?: Profile;

  static build(values: UserValues): User {
    return plainToInstance(User, values);
  }
}
