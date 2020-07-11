import { EntityRepository, Repository } from "typeorm";
import Tech from "../models/Tech";

@EntityRepository(Tech)
class TechsRepository extends Repository<Tech> {
  public async findByNameSearch(search: string): Promise<Array<Tech>> {
    const resultTechs = this.createQueryBuilder("tech")
      .where("LOWER(tech.name) LIKE LOWER('%Reac%')", [search])
      .orderBy({ name: "ASC" })
      .getMany();
    return resultTechs;
  }
}

export default TechsRepository;
