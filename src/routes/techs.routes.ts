import { Router, Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import TechsRepository from "../repositories/TechsRepository";
import { CreateTechValidation } from "./validations/TechsValidations";

const techsRouter = Router();

techsRouter.get("/", async (request: Request, response: Response) => {
  const techsRepository = getCustomRepository(TechsRepository);
  const techs = await techsRepository.find();
  response.json(techs);
});

techsRouter.post(
  "/",
  CreateTechValidation,
  async (request: Request, response: Response) => {
    const { name } = request.body;
    const techsRepository = getCustomRepository(TechsRepository);
    const createdTech = await techsRepository.save({ name });
    response.json(createdTech);
  }
);

export default techsRouter;
