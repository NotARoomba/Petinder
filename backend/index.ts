import express, { Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import { connectToDatabase } from "./services/database.service";
import { animalsRouter } from "./routers/animals.router";
import { centersRouter } from "./routers/centers.router";

const app = express();
const port = 3001;

const corsOptions: CorsOptions = {
  origin: [
    "https://petinder.notaroomba.dev",
    "http://petinder.notaroomba.dev",
    "http://localhost:5173",
    "http://localhost",
  ],
};

connectToDatabase()
  .then(() => {
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use("/animals", animalsRouter);
    app.use("/centers", centersRouter);

    app.use("/", async (_req: Request, res: Response) => {
      res.status(200).send("You arent supposed to be here");
    });
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });
