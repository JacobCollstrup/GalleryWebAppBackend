import express from "express";
import GalleryController from "../Controllers/GalleryController";

export let galleryRouter = express.Router();

let galleryController = new GalleryController();

galleryRouter.get("/", async (req, res) => galleryController.get(req, res));

galleryRouter.post("/", async (req, res) => galleryController.post(req, res));
