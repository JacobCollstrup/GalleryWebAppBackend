import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class GalleryModel {
  @PrimaryColumn()
  id!: number;

  @Column()
  OrgID!: number;

  @Column()
  Name!: string;

  @Column()
  UserID!: number;
}
