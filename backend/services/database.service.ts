import * as mongoDB from "mongodb";
import * as dotenv from "ts-dotenv";

const env = dotenv.load({
  MONGODB: String,
  ANIMAL_DB_NAME: String,
  ANIMAL_COLLECTION: String,
  CENTER_DB_NAME: String,
  CENTER_COLLECTION: String,
});

export const collections: {
  animals?: mongoDB.Collection;
  centers?: mongoDB.Collection;
} = {};

export async function connectToDatabase() {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(env.MONGODB);
  await client.connect();

  const animalDB: mongoDB.Db = client.db(env.ANIMAL_DB_NAME);
  const animalsCollection: mongoDB.Collection = animalDB.collection(
    env.ANIMAL_COLLECTION,
  );
  collections.animals = animalsCollection;

  const centerDB: mongoDB.Db = client.db(env.CENTER_DB_NAME);
  const centersCollection: mongoDB.Collection = centerDB.collection(
    env.CENTER_COLLECTION,
  );
  collections.centers = centersCollection;

  console.log("Successfully connected to database!");
}
