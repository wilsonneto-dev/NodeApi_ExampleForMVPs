import { MigrationInterface, QueryRunner, Table } from "typeorm";
import UserType, { UserTypeMigrationArray } from "../../models/enums/UserType";

export class CreateUser1594334063036 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
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
          isNullable: false,
        },
        {
          name: "type",
          type: "enum",
          enum: UserTypeMigrationArray,
          default: UserType.User,
          isNullable: false,
        },
        {
          name: "area",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "title",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "photo",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "intro",
          type: "text",
          isNullable: false,
        },
        {
          name: "cv",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "link_linkedin",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "link_site",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "link_github",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "email",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "whatsapp",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "password",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "available",
          type: "boolean",
          isNullable: false,
        },
        {
          name: "created_at",
          type: "boolean",
          isNullable: false,
        },
        {
          name: "available",
          type: "boolean",
          isNullable: false,
        },
        {
          name: "created_at",
          type: "timestamp",
          isNullable: false,
        },
        {
          name: "updated_at",
          type: "timestamp",
          isNullable: false,
        },
      ],
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
