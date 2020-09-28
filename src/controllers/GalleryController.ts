import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { GalleryModel } from "../Models/GalleryModel";

export default class GalleryController {
  async get(req: Request, res: Response) {
    try {
      const GalleryModelRepository = getRepository(GalleryModel);
      let id = Number(req.query.id);
      if (isNaN(id)) {
        res.sendStatus(400);
        return;
      }
      const gallery = await GalleryModelRepository.findOne(id);
      return res.send({ gallery });
    } catch (error) {
      console.log("Something went wrong, we dunno we just work here...");
      res.sendStatus(500);
    }
  }

  async post(req: Request, res: Response) {
    try {
      req.body;
      const gallery = await GalleryModelRepository.findOne(id);
      return res.send({ gallery });
    } catch (error) {
      console.log("Something went wrong, we dunno we just work here...");
      res.sendStatus(500);
    }
  }
}
