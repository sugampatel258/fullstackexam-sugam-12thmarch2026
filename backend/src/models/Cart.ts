import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },

  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: Number,
    },
  ],
});

export default mongoose.model("Cart", CartSchema);
