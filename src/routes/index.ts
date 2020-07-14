import { Router } from "express";
import techsRouter from "./techs.routes";

const routes = Router();

routes.get("/", (request, response) => {
  return response
    .status(200)
    .json({ message: "Hello, everything is ok here..." });
});

routes.use("/techs", techsRouter);

export default routes;
