import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectMongo } from "./config/mongo";
import router from "./modules";
import db from "./config/db";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* Routes */
app.use("/api", router);

/* Test MySQL connection */
db.raw("SELECT 1")
  .then(() => {
    console.log("MySQL connected");
  })
  .catch((err) => {
    console.error("MySQL connection error:", err);
  });

/* Mongo connection */
connectMongo();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
