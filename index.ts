import express from "express";
import { galleryRouter } from "./src/Routers/GalleryRouter";
import { imageRouter } from "./src/Routers/ImageRouter";
import { organizationRouter } from "./src/Routers/OrganizationRouter";
import { userRouter } from "./src/Routers/UserRouter";
import { DbManager } from "./src/dbmanager";
import "reflect-metadata";
// const express = require('express')
const app = express();
const port = process.env.PORT || 3003;
//app.get("/", function (req, res) {
//  res.send("Hello World");
//});
let db = new DbManager();

app.use("/gallery", galleryRouter);
app.use("/image", imageRouter);
app.use("/organization", organizationRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log("Hosting on: " + port);
});
