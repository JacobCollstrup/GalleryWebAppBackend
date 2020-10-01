import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { OrganizationModel } from "../Models/OrganizationModel";

export default class OrganizationController {
  private repository: Repository<OrganizationModel> | undefined;

  getRepo() {
    if (this.repository == null) {
      this.repository = getRepository(OrganizationModel);
    }
    return this.repository;
  }

  async get(req: Request, res: Response) {
    try {
      let id = Number(req.query.id);
      if (isNaN(id)) {
        res.sendStatus(400);
        return;

        const organization = await this.getRepo().findOne(id);
        return res.send({ organization });
      }
    } catch (error) {
      console.error("Get: OrganizationController", error);
      res.sendStatus(500);
    }
  }

  async post(req: Request, res: Response) {
    try {
      let organization = req.body.organization;

      if (!organization) {
        return res.sendStatus(400);

        let repo = this.getRepo();
        let result = await repo.save(organization);

        return res.send({ organization });
      }
    } catch (error) {
      console.error("Post: OrganizationController", error);
      res.sendStatus(500);
    }
  }
}
