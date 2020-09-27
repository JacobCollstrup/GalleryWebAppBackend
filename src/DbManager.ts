import "reflect-metadata";
import { createConnection } from "typeorm";
import { GalleryModel } from "./Models/GalleryModel";
import { ImageModel } from "./Models/ImageModel";
import { NoteModel } from "./Models/NoteModel";
import { OrganizationModel } from "./Models/OrganizationModel";
import { UserModel } from "./Models/UserModel";

export class DbManager {
  constructor() {
    createConnection({
      type: "postgres",
      host: "ec2-46-137-124-19.eu-west-1.compute.amazonaws.com",
      port: 5432,
      username: "otbwxfjdhgmjzy",
      password:
        "5f18dd9693b957f4e7ac54aa41d9f68cffe29e394a6a129d05f256542f01f5fb",
      database: "db5gplctthfe36",
      entities: [__dirname + "/Models/*.ts"],
      synchronize: true,
      logging: false,
    })
      .then((connection) => {
        // here you can start to work with your entities
      })
      .catch((error) => console.log(error));
  }
}
