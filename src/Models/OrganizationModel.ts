import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class OrganizationModel {
  @PrimaryColumn()
  Id!: number;

  @Column()
  Name!: string;
}
