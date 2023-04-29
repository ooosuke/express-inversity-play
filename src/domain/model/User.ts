import { plainToInstance } from "class-transformer";

export type UserValues = {
  id: string;
  name: string;
  age: number;
};

export class User {
  id: string;
  name: string;
  age: number;

  static build(values: UserValues): User {
    return plainToInstance(User, values);
  }

  hasUnder(): boolean {
    return this.age < 20;
  }
}
