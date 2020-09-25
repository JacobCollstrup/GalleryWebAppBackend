import { Request, Response } from "express";

export default class UserController {
  async get(req: Request, res: Response) {
    res.send("Responded");
  }

  async post(req: Request, res: Response) {
    res.send("Posted the User");
  }
}
