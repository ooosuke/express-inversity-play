import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from "@app/lib/inversity/inversify.config";
import * as express from "express";

import "@app/presentation/http/controller/index";

const server = new InversifyExpressServer(container);

const port = process.env.PORT || 3000;

const app = server
  .setConfig((app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  })
  .build();

app.listen(port, () => {
  console.log(`express-inversity-play running! http://localhost:${port}`);
});
