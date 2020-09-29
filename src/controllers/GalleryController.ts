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
      console.log('1');
      
      let gallery = req.body.gallery;
      console.log('2');
      
      if (!gallery) return res.sendStatus(400);
      console.log('3');
      
      let repo = this.getRepository();
      console.log('4');
      console.log('gallery', gallery);
      let result = await repo.save(gallery);
      console.log('result', result);

      return res.send({ gallery });
    } catch (error) {
      console.error("POST: GalleryController", error);
      res.sendStatus(500);
    }
  }
}
