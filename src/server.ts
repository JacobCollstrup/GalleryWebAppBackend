import express from "express";
import { galleryRouter } from "./Routers/GalleryRouter";
import { imageRouter } from "./Routers/ImageRouter";
import { organizationRouter } from "./Routers/OrganizationRouter";
import { userRouter } from "./Routers/UserRouter";
import "reflect-metadata";
import { createConnection } from "typeorm";
import bodyParser from "body-parser";


const port = process.env.PORT || 3003;
const app = express();
app.use(bodyParser.json())

async function setUpAll() {
  try {
    await createConnection({
      type: "postgres",
      host: "ec2-46-137-124-19.eu-west-1.compute.amazonaws.com",
      port: 5432,
      username: "otbwxfjdhgmjzy",
      password:
        "5f18dd9693b957f4e7ac54aa41d9f68cffe29e394a6a129d05f256542f01f5fb",
      database: "db5gplctthfe36",
      entities: [__dirname + "/src/Models/*.ts"],
      synchronize: true,
      logging: false,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    });
  } catch (error) {
    console.log('error', error);
  }

  app.use("/gallery", galleryRouter);
  app.use("/image", imageRouter);
  app.use("/organization", organizationRouter);
  app.use("/user", userRouter);

  app.listen(port, () => {
    console.log("Hosting on: " + port);
  });
}

setUpAll();


