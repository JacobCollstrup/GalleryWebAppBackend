import express from "express";
import OrganizationController from "../Controllers/OrganizationController";

export let organizationRouter = express.Router();

let organizationController = new OrganizationController();

organizationRouter.get("/", async (req, res) =>
  organizationController.get(req, res)
);

organizationRouter.post("/", async (req, res) =>
  organizationController.post(req, res)
);
