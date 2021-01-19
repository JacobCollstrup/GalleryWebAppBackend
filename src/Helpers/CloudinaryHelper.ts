import { v2 } from "cloudinary";
import { Server } from "http";

let image = "";

export async function uploadImage(picture: string = image) {
  try {
    let result = await v2.uploader.upload(picture);
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

// var cloudinary = require("cloudinary");
// cloudinary.uploader.upload("my_picture.jpg", function (result) {
//   console.log(result);
// });
