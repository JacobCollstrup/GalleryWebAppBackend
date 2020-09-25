import { Request, Response } from "express";

export default class GalleryController {
  async get(req: Request, res: Response) {
    res.send("Responded");
  }

  async post(req: Request, res: Response) {
    res.send("Posted the Gallery");
  }
}
