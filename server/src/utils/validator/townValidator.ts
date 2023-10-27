import Joi from "joi";
import { IFindQueryParams } from "../../types/townTypes";

export class TownValidator {
  constructor() {}

  public validateFindQuery(query: any): IFindQueryParams {
    const { value, error } = Joi.object<IFindQueryParams>()
      .keys({
        search: Joi.string(),
      })
      .validate(query);

    if (!!error) {
      throw new Error("Wrong format for query params");
    }

    return value;
  }
}
