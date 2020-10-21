import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { UserModel } from "./UserModel";

@Entity()
export class OrganizationModel {
  @PrimaryGeneratedColumn()
  Id!: undefined;

  @Column()
  Name!: string;

  @OneToMany((Type) => UserModel, (user) => user.Id)
  user!: UserModel[];
}
