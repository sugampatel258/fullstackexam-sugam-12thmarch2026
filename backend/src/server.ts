import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectMongo } from "./config/mongo";

// import authRoutes from "./routes/authRoutes";
// import productRoutes from "./routes/productRoutes";
// import cartRoutes from "./routes/cartRoutes";
// import orderRoutes from "./routes/orderRoutes";
// import reportRoutes from "./routes/reportRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* Routes */
// app.use("/auth", authRoutes);
// app.use("/products", productRoutes);
// app.use("/cart", cartRoutes);
// app.use("/orders", orderRoutes);
// app.use("/reports", reportRoutes);

/* Mongo connection */
connectMongo();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
