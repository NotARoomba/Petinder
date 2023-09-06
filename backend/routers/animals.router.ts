import express, { Request, Response } from "express";
import { collections } from "../services/database.service";
import Animal from "../models/animal";

export const animalsRouter = express.Router();

animalsRouter.use(express.json());

animalsRouter.get("/", async (req: Request, res: Response) => {
  try {
    let animals: Animal[] = [];
    if (collections.animals) {
      animals = (await collections.animals
        .find({})
        .toArray()) as unknown as Animal[];
    }
    res.status(200).send({ animals, error: false, msg: "Animals Exist!" });
  } catch (error) {
    res.status(500).send({ error: true, msg: error });
  }
});