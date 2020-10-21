import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { OrganizationModel } from "./OrganizationModel";

@Entity()
export class UserModel {
  @PrimaryGeneratedColumn()
  Id!: undefined;

  @ManyToOne((Type) => OrganizationModel)
  @JoinColumn()
  organization!: OrganizationModel;

  @Column()
  Name!: string;

  @Column()
  salt!: string;

  @Column()
  hash!: string;

  @Column()
  iterations!: number;
}
