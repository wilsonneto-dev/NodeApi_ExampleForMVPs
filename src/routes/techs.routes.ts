import { Router, Request, Response } from "express";
import { getCustomRepository, Like } from "typeorm";

import TechsRepository from "../repositories/TechsRepository";
import {
  CreateTechValidation,
  DeleteTechValidation,
} from "./validations/TechsValidations";
import CreateTechService from "../services/CreateTechService";

const techsRouter = Router();

techsRouter.get("/", async (request: Request, response: Response) => {
  const search = request.query.search as string;
  const techsRepository = getCustomRepository(TechsRepository);
  let techs = [];
  if (search) {
    techs = await techsRepository.findByNameSearch(search);
  } else {
    techs = await techsRepository.find({ order: { name: "ASC" } });
  }
  return response.json(techs);
});

techsRouter.post(
  "/",
  CreateTechValidation,
  async (request: Request, response: Response) => {
    const { name } = request.body;

    const createTechService = new CreateTechService();
    const createdTech = await createTechService.execute({ name });

    return response.json(createdTech);
  }
);

techsRouter.delete(
  "/:id",
  DeleteTechValidation,
  async (request: Request, response: Response) => {
    const id = request.params.id as string;
    const techsRepository = getCustomRepository(TechsRepository);
    const techsDeleted = await techsRepository.delete(id);
    console.log(techsDeleted);
    if (techsDeleted.affected) return response.status(204).send();
    else return response.status(404).json({ error: "Tech não encontrada" });
  }
);

export default techsRouter;
