import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { UserModel } from "../Models/UserModel";

export default class UserController {
  private repository: Repository<UserModel> | undefined;

  getRepo() {
    if (this.repository == null) {
      this.repository = getRepository(UserModel);
    }
    return this.repository;
  }

  async get(req: Request, res: Response) {
    try {
      let id = Number(req.query.id);
      if (isNaN(id)) res.sendStatus(400);
      return;

      const user = await this.getRepo().findOne(id);
      return res.send({ user });
    } catch (error) {
      console.error("Get: UserController", error);
      res.sendStatus(500);
    }
  }

  async post(req: Request, res: Response) {
    try {
      let user = req.body.user;

      if (!user) return res.sendStatus(400);

      let repo = this.getRepo();
      let result = await repo.save(user);

      return res.send({ user });
    } catch (error) {
      console.error("Post: UserController", error);
      res.sendStatus(500);
    }
  }
}
