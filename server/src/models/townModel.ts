import { TownDao } from "../dao/townDao";

interface ITownModelDependencies {
  townDao: TownDao;
}
export class TownModel {
  private readonly townDao: TownDao;

  constructor(deps: ITownModelDependencies) {
    this.townDao = deps.townDao;
  }
}
