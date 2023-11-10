import { DataAccess } from "../service/dataAccess";
import { ITown, ITownDao, ITownDocument } from "../types/townTypes";
import config from "../config/config";
import * as TownMapper from "../utils/mapper/townMapper";

interface ITownRepositoryDependencies {
  dataAccess: DataAccess;
}

export class TownRepository {
  private readonly dataAccess: DataAccess;

  constructor(deps: ITownRepositoryDependencies) {
    this.dataAccess = deps.dataAccess;
  }

  private async close() {
    await this.dataAccess.close();
  }

  public async createTable(): Promise<void> {
    try {
      const queryCreate = `CREATE TABLE IF NOT EXISTS Towns (
        TOWN_ID INTEGER PRIMARY KEY AUTOINCREMENT,
        codePostal VARCHAR(10) NOT NULL,
        codeCommune VARCHAR(100) NOT NULL,
        nomCommune VARCHAR(100) NOT NULL,
        libelleAcheminement VARCHAR(100) NOT NULL
      );`;

      const db = await this.dataAccess.connect();
      db.run(queryCreate, (err) => {
        if (err) {
          throw err;
        }
      });
    } finally {
      this.close();
    }
  }

  public async createAllTowns(towns: ITownDocument[]): Promise<void> {
    try {
      const queryInsert = `INSERT INTO Towns (codePostal, codeCommune, nomCommune, libelleAcheminement ) VALUES ${towns.map(
        ({ codePostal, codeCommune, nomCommune, libelleAcheminement }) =>
          `("${codePostal}", "${codeCommune}", "${nomCommune}", "${libelleAcheminement}")`
      )}`;

      const db = await this.dataAccess.connect();
      db.run(queryInsert, (err) => {
        if (err) {
          throw err;
        }
      });
    } finally {
      this.close();
    }
  }

  public async findTownsByNameOrPostalCode(search: string): Promise<ITown[]> {
    const db = await this.dataAccess.connect();

    const query = `
            SELECT * FROM Towns
            WHERE nomCommune LIKE '%' || ? || '%' OR codePostal LIKE ? || '%'
            ORDER BY nomCommune
            LIMIT ?`;

    return new Promise<ITown[]>((resolve, reject) => {
      db.all<ITownDao>(
        query,
        [search, search, config.get("limitTownList")],
        (err, rows) => {
          this.close();
          if (err) {
            reject(err);
          } else {
            resolve(rows.map(TownMapper.mapTownDaoToTown));
          }
        }
      );
    });
  }

  public async getAllTowns(): Promise<ITown[]> {
    const query = "SELECT * FROM Towns ORDER BY nomCommune LIMIT ?";

    const db = await this.dataAccess.connect();

    return new Promise<ITown[]>((resolve, reject) => {
      db.all<ITownDao>(query, [config.get("limitTownList")], (err, rows) => {
        this.close();
        if (err) {
          reject(err);
        } else {
          resolve(rows.map(TownMapper.mapTownDaoToTown));
        }
      });
    });
  }
}
