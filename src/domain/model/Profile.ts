import { Profile as ProfileModel } from "@prisma/client";
import { Type } from "class-transformer";

export type ProfileValues = {
  title: string;
};

export class Profile implements ProfileModel {
  id: string;

  title: string;

  @Type(() => Date)
  createdAt: Date;

  @Type(() => Date)
  updatedAt: Date;

  userId: string;
}
