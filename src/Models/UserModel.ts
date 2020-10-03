import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { OrganizationModel } from "./OrganizationModel";

@Entity()
export class UserModel {
  @PrimaryColumn()
  Id!: number;

  @Column()
  OrgID!: number;

  @OneToOne((Type) => OrganizationModel)
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
