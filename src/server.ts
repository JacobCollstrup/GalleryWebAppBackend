import express, { Express } from "express";
import { galleryRouter } from "./Routers/GalleryRouter";
import { imageRouter } from "./Routers/ImageRouter";
import { organizationRouter } from "./Routers/OrganizationRouter";
import { userRouter } from "./Routers/UserRouter";
import { loginRouter } from "./Routers/LoginRouter";
import { uploadImage } from "./Helpers/CloudinaryHelper";
import CloudinaryConfig from "./Config/CloudinaryConfig.json";
import { v2 } from "cloudinary";
import "reflect-metadata";
import { createConnection } from "typeorm";
import bodyParser from "body-parser";
import path from "path";
import ImageController from "./Controllers/ImageController";

const port = process.env.PORT || 3003;
const app = express();
app.use(bodyParser.json());

async function setUpAll(app: Express) {
  try {
    let modelPath = path.join(__dirname, "/Models/*.ts");
    console.log("myPath", modelPath);
    await createConnection({
      type: "postgres",
      host: "ec2-46-137-124-19.eu-west-1.compute.amazonaws.com",
      port: 5432,
      username: "otbwxfjdhgmjzy",
      password:
        "5f18dd9693b957f4e7ac54aa41d9f68cffe29e394a6a129d05f256542f01f5fb",
      database: "db5gplctthfe36",
      entities: [modelPath],
      synchronize: true,
      logging: true,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    });

    app.listen(port, () => {
      console.log("Hosting on: " + port);
    });
  } catch (error) {
    console.log("error", error);
  }

  app.use("/gallery", galleryRouter);
  app.use("/image", imageRouter);
  app.use("/organization", organizationRouter);
  app.use("/user", userRouter);
  app.use("/login", loginRouter);
}
v2.config(CloudinaryConfig);

setUpAll(app);
