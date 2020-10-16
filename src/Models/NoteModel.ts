import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NoteModel {
  @PrimaryGeneratedColumn()
  Id!: undefined;

  @Column()
  UserID!: number;

  @Column()
  OrgID!: number;

  @Column()
  ImageID!: number;

  @Column()
  Note!: string;
}
