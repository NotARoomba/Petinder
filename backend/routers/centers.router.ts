import express, { Request, Response } from "express";
import { collections } from "../services/database.service";
import Center from "../models/center";

export const centersRouter = express.Router();

centersRouter.use(express.json());

centersRouter.get("/", async (req: Request, res: Response) => {
  try {
    let scores: Center[] = [];
    if (collections.centers) {
      scores = (await collections.centers
        .find({})
        .toArray()) as unknown as Center[];
    }
    res.status(200).send({ scores, error: false, msg: "Centers Exist!" });
  } catch (error) {
    res.status(500).send({ error: true, msg: error });
  }
});