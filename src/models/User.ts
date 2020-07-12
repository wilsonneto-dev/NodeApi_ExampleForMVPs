import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import UserType from "./enums/UserType";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  name: string;

  @Column({
    type: "enum",
    enum: UserType,
    default: UserType.User,
  })
  type: UserType;

  @Column("varchar")
  area: string;

  @Column("varchar")
  title: string;

  @Column("varchar")
  photo: string;

  @Column("varchar")
  intro: string;

  @Column("varchar")
  cv: string;

  @Column("varchar")
  link_linkedin: string;

  @Column("varchar")
  link_site: string;

  @Column("varchar")
  link_github: string;

  @Column("varchar")
  email: string;

  @Column("varchar")
  whatsapp: string;

  @Column("varchar")
  password: string;

  @Column("boolean")
  available: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
