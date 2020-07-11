import { EntityRepository, Repository } from "typeorm";
import Tech from "../models/Tech";

@EntityRepository(Tech)
class TechsRepository extends Repository<Tech> {}

export default TechsRepository;
