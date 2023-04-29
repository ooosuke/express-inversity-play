import * as express from "express";
import {
  interfaces,
  controller,
  httpGet,
  httpPost,
  request,
  response,
} from "inversify-express-utils";
import { inject } from "inversify";
import { TYPES } from "@app/lib/inversity/types";
import { GetUserUseCase } from "@app/usecase/user/GetUserUseCase";
import { CreateUserUseCase } from "@app/usecase/user/CreateUserUseCase";
import { UserSerializer } from "@app/presentation/http/serializer/UserSerializer";

@controller("/users")
export class UserController implements interfaces.Controller {
  constructor(
    @inject(TYPES.GetUserUseCase) private getUserUseCase: GetUserUseCase,
    @inject(TYPES.CreateUserUseCase)
    private createUserUseCase: CreateUserUseCase
  ) {}

  @httpGet("/:id")
  private async getUser(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    const id = req.params.id;
    try {
      const user = await this.getUserUseCase.handle({ id });
      res.status(200).send(UserSerializer.serialize(user));
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "getUser fail." });
    }
  }

  @httpPost("/")
  private async createUser(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    try {
      const name = req.body.name;
      const age = req.body.age;
      const user = await this.createUserUseCase.handle({ name, age });
      res.status(200).json(UserSerializer.serialize(user));
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "createUser fail." });
    }
  }
}
