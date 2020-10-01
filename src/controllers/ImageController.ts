import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { ImageModel } from "../Models/ImageModel";

export default class ImageController {
  private repository: Repository<ImageModel> | undefined;

  getRepo() {
    if (this.repository == null) {
      this.repository = getRepository(ImageModel);
    }
    return this.repository;
  }

  async get(req: Request, res: Response) {
    try {
      let id = Number(req.query.id);
      if (isNaN(id)) res.sendStatus(400);
      return;

      const image = await this.getRepo().findOne(id);
      return res.send({ image });
    } catch (error) {
      console.error("Get: ImageController", error);
      res.sendStatus(500);
    }
  }

  async post(req: Request, res: Response) {
    try {
      let image = req.body.image;

      if (!image) return res.sendStatus(400);

      let repo = this.getRepo();
      let result = await repo.save(image);

      return res.send({ image });
    } catch (error) {
      console.error("Post: ImageController", error);
      res.sendStatus(500);
    }
  }
}
