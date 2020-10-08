import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { UserModel } from "../Models/UserModel";
import { hashPassword } from "../Helpers/PasswordHelper";

export default class LoginController {
  private repository: Repository<UserModel> | undefined;

  getRepo() {
    if (this.repository == null) {
      this.repository = getRepository(UserModel);
    }

    return this.repository;
  }
  // userRepository.find({ select: ["firstName", "lastName"] });
  async post(req: Request, res: Response) {
    try {
      const data = req.body.data;
      const user = await this.getRepo().findOne({ where: { Name: data.name } });
      // @ts-ignore
      let result = await hashPassword(data.password, user.salt);
      // @ts-ignore
      if (result.hash == user.hash) {
        return res.send([{ id: data.Id, OrgID: data.OrgID, name: data.name }]);
      }
      res.sendStatus(401);
    } catch (error) {
      console.error("Post: LoginController", error);
      res.sendStatus(500);
    }
  }
}
