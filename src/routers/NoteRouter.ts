import express from "express";
import NoteController from "../Controllers/NoteController";

export let noteRouter = express.Router();

let noteController = new NoteController();

noteRouter.get("/", async (req, res) => noteController.get(req, res));

noteRouter.post("/", async (req, res) => noteController.post(req, res));
