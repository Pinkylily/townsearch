import express from "express";
import { errorHandler } from "./middleware/errorHandler";
import config from "./config/config";
import { townRouter } from "./init";
import cors from "cors";

export const app = express();
const port = config.get("port") || 3000; // Use port 3000 by default if not specified

app.use(express.json());
app.use(cors());

app.use("/", townRouter.router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
