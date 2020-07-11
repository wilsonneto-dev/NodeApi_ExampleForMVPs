import { MigrationInterface, QueryRunner, Table } from "typeorm";
import UserType, { UserTypeMigrationArray } from "../../models/enums/UserType";

export class CreateUser1594334063036 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
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
          name: "type",
          type: "enum",
          enum: UserTypeMigrationArray,
          default: UserType.User,
        },
        {
          name: "area",
          type: "varchar",
        },
        {
          name: "title",
          type: "varchar",
        },
        {
          name: "photo",
          type: "varchar",
        },
        {
          name: "intro",
          type: "text",
        },
        {
          name: "cv",
          type: "varchar",
        },
        {
          name: "link_linkedin",
          type: "varchar",
        },
        {
          name: "link_site",
          type: "varchar",
        },
        {
          name: "link_github",
          type: "varchar",
        },
        {
          name: "email",
          type: "varchar",
          isUnique: true
        },
        {
          name: "whatsapp",
          type: "varchar",
        },
        {
          name: "password",
          type: "varchar",
        },
        {
          name: "available",
          type: "boolean",
        },
        {
          name: "created_at",
          type: "timestamp",
        },
        {
          name: "updated_at",
          type: "timestamp",
        },
      ],
    })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
