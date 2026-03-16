import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
    },

    stock: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

/* Index for search performance */
ProductSchema.index({ name: "text", category: "text" });

export default mongoose.model("Product", ProductSchema);
