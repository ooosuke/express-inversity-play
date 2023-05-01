import { plainToInstance } from "class-transformer";
import { User as UserModel } from "@prisma/client";

export type UserValues = {
  id: string;
  name: string;
  age: number;
};

export class User implements UserModel {
  id: string;
  name: string;
  age: number;
  createdAt: Date;
  updatedAt: Date;

  static build(values: UserValues): User {
    return plainToInstance(User, values);
  }
}
