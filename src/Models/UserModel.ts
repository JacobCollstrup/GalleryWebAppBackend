import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class UserModel {
  @PrimaryColumn()
  Id!: number;

  @Column()
  OrgID!: number;

  @Column()
  Name!: string;

  @Column()
  salt!: string;

  @Column()
  hash!: string;
}
