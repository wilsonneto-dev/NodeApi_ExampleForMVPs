import { Router } from "express";

const routes = Router();

routes.use("/", (request, response) => {
  return response.status(200).send("Hello!");
});

export default routes;
