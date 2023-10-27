import convict from "convict";

export default convict({
  port: {
    doc: "The port to bind to",
    format: "port",
    default: 3000,
    env: "PORT",
  },
  frontPath: {
    doc: "The path to the front",
    format: String,
    default: "./townsearch-front/src",
  },
});
