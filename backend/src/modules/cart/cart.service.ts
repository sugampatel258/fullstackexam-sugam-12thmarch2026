import Cart from "../../models/Cart";

const addToCart = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { productId, quantity } = req.body;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [{ productId, quantity }],
      });
    } else {
      const existingItem = cart.items.find(
        (item) => item.productId.toString() === productId
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }

      await cart.save();
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getCart = async (req, res) => {
  const userId = req.user.userId;

  const cart = await Cart.findOne({ userId }).populate("items.productId");

  res.json(cart);
};

const removeCartItem = async (req, res) => {
  const userId = req.user.userId;
  const { productId } = req.body;

  const cart = await Cart.findOne({ userId });

  if (!cart) {
    return res.status(404).json({ message: "Cart not found" });
  }

  cart.items.pull({ productId });

  await cart.save();

  res.json(cart);
};

export const cartService = {
  addToCart,
  getCart,
  removeCartItem,
};
