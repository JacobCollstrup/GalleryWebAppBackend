import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { UserModel } from "./UserModel";
import { OrganizationModel } from "./OrganizationModel";
import { ImageModel } from "./ImageModel";

@Entity()
export class NoteModel {
  @PrimaryGeneratedColumn()
  id!: number;

  // @ManyToOne((Type) => UserModel)
  // @JoinColumn()
  // user!: UserModel;

  // @ManyToOne((Type) => OrganizationModel)
  // @JoinColumn()
  // organization!: OrganizationModel;

  @OneToOne((Type) => ImageModel)
  @JoinColumn()
  image!: ImageModel;

  @Column()
  Note!: string;
}
