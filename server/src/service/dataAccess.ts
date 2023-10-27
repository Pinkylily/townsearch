import { Db, MongoClient } from "mongodb";
import config from "../config/config";

export class DataAccess {
  private client: MongoClient | undefined;

  constructor() {}

  public async connectToMongoDB(): Promise<Db | undefined> {
    const uri = config.default("databaseUri");
    this.client = new MongoClient(uri);

    try {
      await this.client.connect();
      const database = this.client.db("townSearch");

      return database;
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }

  public async close() {
    return this.client?.close();
  }
}
