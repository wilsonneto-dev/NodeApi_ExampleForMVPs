import "reflect-metadata";
import express from "express";
import "express-async-errors";

import { errors as celebrateErrors } from "celebrate";
import errorHandler from "./middlewares/errorHandler";

import routes from "./routes";

import uploadConfig from "./config/upload";

import createConnection from "./database";

createConnection();

const app = express();

app.use(express.json());

app.use("/files", express.static(uploadConfig.directory));

app.use(routes);

app.use(celebrateErrors());
app.use(errorHandler);

app.listen(3333, () => {
  console.log("server started on port 3333");
});
