import Product from "../../models/Product";

const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const search = req.query.search || "";

    const filter = search ? { $text: { $search: search } } : {};

    const products = await Product.find(filter)
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Product.countDocuments(filter);

    res.json({
      page,
      total,
      products,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.json({
      message: "Product deleted",
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const productCategorySummary = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          totalProducts: { $sum: 1 },
          avgPrice: { $avg: "$price" },
        },
      },
      {
        $sort: { totalProducts: -1 },
      },
    ]);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Product Category Summary Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch product category summary",
    });
  }
};

export const productService = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  productCategorySummary,
};
