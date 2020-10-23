import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { OrganizationModel } from "./OrganizationModel";
import { NoteModel } from "./NoteModel";
import { GalleryModel } from "./GalleryModel";

@Entity()
export class UserModel {
  @PrimaryGeneratedColumn()
  id!: undefined;

  @ManyToOne((Type) => OrganizationModel)
  @JoinColumn()
  organization!: OrganizationModel;

  @OneToMany((Type) => NoteModel, (note) => note.id)
  @JoinColumn()
  note!: NoteModel[];

  @OneToMany((Type) => GalleryModel, (gallery) => gallery.id)
  @JoinColumn()
  gallery!: GalleryModel[];

  @Column()
  Name!: string;

  @Column()
  salt!: string;

  @Column()
  hash!: string;

  @Column()
  iterations!: number;
}
