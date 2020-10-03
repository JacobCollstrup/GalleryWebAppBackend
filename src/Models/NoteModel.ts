import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class NoteModel {
  @PrimaryColumn()
  Id!: number;

  @Column()
  UserID!: number;

  @Column()
  OrgID!: number;

  @Column()
  ImageID!: number;

  @Column()
  Note!: string;
}
