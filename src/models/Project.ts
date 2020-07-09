import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("projects")
class Project {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  name: string;

  @Column("varchar")
  image: string;

  @Column("text")
  about: string;

  @Column("varchar")
  techs: string;

  @Column("varchar")
  link: string;

  @Column("varchar")
  link_title: string;

  @Column("boolean")
  available: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Project;
