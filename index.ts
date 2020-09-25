import express from "express";
import { galleryRouter } from "./src/routers/GalleryRouter";
import { imageRouter } from "./src/routers/ImageRouter";
import { organizationRouter } from "./src/routers/OrganizationRouter";
import { userRouter } from "./src/routers/UserRouter";
// const express = require('express')
const app = express();

//app.get("/", function (req, res) {
//  res.send("Hello World");
//});

app.use("/gallery", galleryRouter);
app.use("/image", imageRouter);
app.use("/organization", organizationRouter);
app.use("/user", userRouter);

app.listen(3003, () => {
  console.log("Hosting on 3003");
});
