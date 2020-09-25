import express from "express";
import ImageController from "../controllers/ImageController";

export let imageRouter = express.Router();

let imageController = new ImageController();

imageRouter.get("/", async (req, res) => imageController.get(req, res));

imageRouter.post("/", async (req, res) => imageController.post(req, res));
