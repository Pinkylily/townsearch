import axios from "axios";
import config from "../config/config";
import { IPostalCodeFromService } from "../types/postalCodeTypes";

export class PostalCodeService {
  public async fetchPostalCodeData(): Promise<IPostalCodeFromService[]> {
    const postalCodeUrl = config.get("postalCodeUrl");
    const res = await axios.get<IPostalCodeFromService[]>(postalCodeUrl);
    return res.data;
  }
}
