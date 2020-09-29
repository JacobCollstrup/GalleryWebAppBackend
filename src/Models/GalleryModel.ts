import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GalleryModel {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  OrgID!: number;

  @Column()
  Name!: string;

  @Column()
  UserID!: number;
}
