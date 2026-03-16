import mongoose from "mongoose";
import dotenv from "dotenv";

import { seedProducts } from "./products.seed";

dotenv.config();

const runSeeds = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);

    console.log("MongoDB connected");

    await seedProducts();

    console.log("All seeds executed successfully");

    process.exit();
  } catch (error) {
    console.error("Seed error:", error);

    process.exit(1);
  }
};

runSeeds();
