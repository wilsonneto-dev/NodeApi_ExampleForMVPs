import Tech from "models/Tech";
import { getCustomRepository } from "typeorm";
import TechsRepository from "../repositories/TechsRepository";
import AppError from "../errors/AppError";

interface Request {
  name: string;
}

class CreateTechService {
  public async execute({ name }: Request): Promise<Tech> {
    const techsRepository = getCustomRepository(TechsRepository);

    const checkIfTechExists = await techsRepository.findOne({
      where: { name },
    });
    if (checkIfTechExists) throw new AppError("Tech já cadastrada", 409);

    const createdTech = await techsRepository.save({ name });
    return createdTech;
  }
}

export default CreateTechService;
