import { Database, verbose } from "sqlite3";
import path from "path";

export class DataAccess {
  private database: Database | undefined;
  constructor() {}

  public async connect(): Promise<Database> {
    const sqlite3 = verbose();
    const db_name = path.join(process.cwd(), "data", "town.db");

    this.database = new sqlite3.Database(db_name, (err) => {
      if (err) {
        return console.error(err.message);
      }
    });
    return this.database;
  }

  public async close() {
    this.database?.close();
  }
}
