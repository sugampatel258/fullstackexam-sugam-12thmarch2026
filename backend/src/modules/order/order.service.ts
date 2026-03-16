import Cart from "../../models/Cart";
import Order from "../../models/Order";
import OrderItem from "../../models/OrderItem";

const checkout = async (req, res) => {
  const userId = req.user.userId;

  const cart = await Cart.findOne({ userId }).populate("items.productId");

  if (!cart || cart.items.length === 0) {
    return res.status(400).json({
      message: "Cart is empty",
    });
  }

  let total = 0;

  cart.items.forEach((item) => {
    const product = item.productId as any;

    total += item.quantity * product.price;
  });

  const order = await Order.query().insert({
    user_id: userId,
    total_amount: total,
  });

  const orderItems = cart.items.map((item) => {
    const product = item.productId as any;

    return {
      order_id: order.id,
      product_id: product._id.toString(),
      quantity: item.quantity,
      price: product.price,
    };
  });

  await OrderItem.query().insert(orderItems);

  await Cart.deleteOne({ userId });

  res.json({
    message: "Order placed successfully",
    order,
  });
};

const getOrders = async (req, res) => {
  try {
    const userId = req.user.userId;

    const orders = await Order.query()
      .where("user_id", userId)
      .orderBy("created_at", "desc");

    return res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    console.error("Get Orders Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
    });
  }
};

export const orderService = {
  checkout,
  getOrders,
};
