import express from "express";
import LoginController from "../Controllers/LoginController";

export let loginRouter = express.Router();

let loginController = new LoginController();

loginRouter.post("/", async (req, res) => loginController.post(req, res));
