import express, { Router } from "express";
import { TownController } from "../controllers/townController";

interface ITownRouterDependencies {
  townController: TownController;
}

export class TownRouter {
  private readonly townController: TownController;
  public router: Router;

  constructor(deps: ITownRouterDependencies) {
    this.townController = deps.townController;
    this.router = express.Router();

    this.initRoutes();
  }

  private initRoutes() {
    this.router.get("/towns", this.townController.findTownsCategoriesByName);
  }
}
