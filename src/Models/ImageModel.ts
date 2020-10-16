import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ImageModel {
  @PrimaryGeneratedColumn()
  id!: undefined;

  @Column()
  url!: string;

  @Column()
  galleryID!: number;

  @Column()
  OrgID!: number;
}
