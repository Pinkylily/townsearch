import convict from "convict";

export default convict({
  port: {
    doc: "The port to bind to",
    format: "port",
    default: 3000,
    env: "PORT",
  },
  postalCodeUrl: {
    doc: "url to list of town and postal code",
    format: String,
    default: "https://unpkg.com/codes-postaux@4.0.0/codes-postaux.json",
  },
  databaseUri: {
    doc: "uri to database",
    format: String,
    default: "mongodb://localhost:27017",
  },
  limitTownList: {
    doc: "limitation to number of element on town list",
    format: Number,
    default: 100,
  },
});
