import express from "express";
import UserController from "../controllers/UserController";

export let userRouter = express.Router();

let userController = new UserController();

userRouter.get("/", async (req, res) => userController.get(req, res));

userRouter.post("/", async (req, res) => userController.post(req, res));
