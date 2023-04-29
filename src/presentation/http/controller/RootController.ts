import * as express from "express";
import {
  interfaces,
  controller,
  httpGet,
  request,
  response,
} from "inversify-express-utils";

@controller("/")
export class RootController implements interfaces.Controller {
  @httpGet("/")
  private index(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    res.status(200).send({ message: "index!" });
  }
}
