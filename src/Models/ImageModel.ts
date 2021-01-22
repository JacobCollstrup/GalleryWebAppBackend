import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { NoteModel } from "./NoteModel";
import { OrganizationModel } from "./OrganizationModel";
import { GalleryModel } from "./GalleryModel";

@Entity()
export class ImageModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  url!: string;

  // @ManyToOne((Type) => GalleryModel)
  // @JoinColumn()
  // gallery!: GalleryModel;

  @OneToOne((Type) => NoteModel, (note) => note.image, {
    cascade: true,
  })
  note!: NoteModel;

  // @ManyToOne((Type) => OrganizationModel)
  // @JoinColumn()
  // organization!: OrganizationModel;
}
