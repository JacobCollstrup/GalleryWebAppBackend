import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { GalleryModel } from "../Models/GalleryModel";

export default class GalleryController {
  private repository: Repository<GalleryModel> | undefined;
  
  getRepository(){
    if( this.repository == null) {
      this.repository = getRepository(GalleryModel);
    }
    return this.repository;
  }
  
  async get(req: Request, res: Response) {
    try {
      let id = Number(req.query.id);
      if (isNaN(id)) {
        res.sendStatus(400);
        return;
      }
      const gallery = await this.getRepository().findOne(id);
      return res.send({ gallery });
    } catch (error) {
      console.error("GET: GalleryController", error);
      res.sendStatus(500);
    }
  }

  async post(req: Request, res: Response) {
    try {
      let gallery = req.body.gallery;
      if (!gallery) return res.sendStatus(400);

      let result = await this.getRepository().save(gallery);

      return res.send({ gallery });
    } catch (error) {
      console.error("POST: GalleryController", error);
      res.sendStatus(500);
    }
  }
}
