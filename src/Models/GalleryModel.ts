import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { UserModel } from "./UserModel";
import { OrganizationModel } from "./OrganizationModel";

@Entity()
export class GalleryModel {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @ManyToOne((Type) => OrganizationModel)
  @JoinColumn()
  organization!: OrganizationModel;

  @Column()
  Name!: string;

  @ManyToOne((Type) => UserModel)
  @JoinColumn()
  user!: UserModel;
}
