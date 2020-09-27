import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class ImageModel {
  @PrimaryColumn()
  id!: number;

  @Column()
  url!: string;

  @Column()
  galleryID!: number;

  @Column()
  OrgID!: number;
}
