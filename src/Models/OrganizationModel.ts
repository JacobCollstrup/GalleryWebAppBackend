import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { UserModel } from "./UserModel";
import { NoteModel } from "./NoteModel";
import { ImageModel } from "./ImageModel";
import { GalleryModel } from "./GalleryModel";

@Entity()
export class OrganizationModel {
  @PrimaryGeneratedColumn()
  Id!: undefined;

  @Column()
  Name!: string;

  @OneToMany((Type) => UserModel, (user) => user.id)
  user!: UserModel[];

  @OneToMany((Type) => NoteModel, (note) => note.id)
  @JoinColumn()
  note!: NoteModel[];

  @OneToMany((Type) => ImageModel, (image) => image.id)
  image!: ImageModel[];

  @OneToMany((Type) => GalleryModel, (gallery) => gallery.id)
  gallery!: GalleryModel[];
}
