import { Collection } from "mongodb";
import { DataAccess } from "../service/dataAccess";
import { ITown } from "../types/townTypes";
import config from "../config/config";
import * as TownMapper from "../utils/mapper/townMapper";

interface ITownRepositoryDependencies {
  dataAccess: DataAccess;
}

export class TownRepository {
  private readonly COLLECTION_NAME = "towns";
  private readonly dataAccess: DataAccess;
  private townsCollection: Collection<ITown> | undefined;

  constructor(deps: ITownRepositoryDependencies) {
    this.dataAccess = deps.dataAccess;
  }

  private async getCollection(): Promise<Collection<ITown>> {
    if (this.townsCollection) {
      return this.townsCollection;
    }

    const dbConnection = await this.dataAccess.connectToMongoDB();

    if (!dbConnection) {
      throw new Error("Cannot connect to database");
    }

    this.townsCollection = dbConnection.collection(this.COLLECTION_NAME);

    return this.townsCollection;
  }

  private async close() {
    this.townsCollection = undefined;
    await this.dataAccess.close();
  }

  private async hasDataAlreadyInCollection(): Promise<boolean> {
    const townsCollection = await this.getCollection();
    const count = await townsCollection.estimatedDocumentCount();
    return count > 0;
  }

  public async createAllTowns(towns: ITown[]): Promise<void> {
    try {
      const hasDataAlreadyInCollection =
        await this.hasDataAlreadyInCollection();

      if (hasDataAlreadyInCollection) return;

      const townsCollection = await this.getCollection();

      await townsCollection.insertMany(towns);
    } finally {
      this.close();
    }
  }

  public async findTownsByNameOrPostalCode(search: string): Promise<ITown[]> {
    try {
      const query = {
        $or: [
          { nomCommune: { $regex: search, $options: "i" } },
          { codePostal: { $regex: search } },
        ],
      };

      const townsCollection = await this.getCollection();

      const towns = await townsCollection
        .find(query)
        .limit(config.get("limitTownList"))
        .toArray();
      const townsWithoutId = towns.map(TownMapper.mapTownDaoToTown);

      return townsWithoutId;
    } finally {
      this.close();
    }
  }

  public async getAllTowns(): Promise<ITown[]> {
    try {
      const townsCollection = await this.getCollection();

      const towns = await townsCollection
        .find({})
        .limit(config.get("limitTownList"))
        .toArray();
      const townsWithoutId = towns.map(TownMapper.mapTownDaoToTown);

      return townsWithoutId;
    } finally {
      this.close();
    }
  }
}
