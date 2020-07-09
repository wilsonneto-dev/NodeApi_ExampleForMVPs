import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProjects1594297812840 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "projects",
        columns: [
          {
            name: "id",
            type: "uuid",
            isUnique: true,
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "image",
            type: "varchar",
          },
          {
            name: "about",
            type: "text",
          },
          {
            name: "link",
            type: "varchar",
          },
          {
            name: "link_title",
            type: "varchar",
          },
          {
            name: "available",
            type: "boolean",
            default: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("projects");
  }
}
