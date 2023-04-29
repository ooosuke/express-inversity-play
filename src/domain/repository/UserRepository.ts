import { User } from "../model/User";

export type CreateUserData = {
  name: string
  age: number
}

export interface UserRepository {
  create(user: CreateUserData): Promise<User>
  findById(id: string): Promise<Optional<User>>
  all(): Promise<User[]>
  // etc update, delete...
}