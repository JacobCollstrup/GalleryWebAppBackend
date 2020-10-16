import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrganizationModel {
  @PrimaryGeneratedColumn()
  Id!: undefined;

  @Column()
  Name!: string;
}
