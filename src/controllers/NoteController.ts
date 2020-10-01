import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { NoteModel } from "../Models/NoteModel";

export default class NoteController {
  private repository: Repository<NoteModel> | undefined;

  getRepo() {
    if (this.repository == null) {
      this.repository = getRepository(NoteModel);
    }
    return this.repository;
  }

  async get(req: Request, res: Response) {
    try {
      let id = Number(req.query.id);
      if (isNaN(id)) res.sendStatus(400);
      return;

      const note = await this.getRepo().findOne(id);
      return res.send({ note });
    } catch (error) {
      console.error("Get: NoteController", error);
      res.sendStatus(500);
    }
  }
  async post(req: Request, res: Response) {
    try {
      let note = req.body.note;

      if (!note) return res.sendStatus(400);

      let repo = this.getRepo();
      let result = await repo.save(note);

      return res.send({ note });
    } catch (error) {
      console.error("Post: NoteController", error);
      res.sendStatus(500);
    }
  }
}
