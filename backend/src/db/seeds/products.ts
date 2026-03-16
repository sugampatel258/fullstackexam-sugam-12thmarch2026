import Product from "../../models/Product";

export const seedProducts = async () => {
  const products = [
    {
      name: "Gaming Laptop",
      category: "Electronics",
      price: 1200,
      description: "High performance gaming laptop",
      stock: 10,
    },
    {
      name: "Wireless Mouse",
      category: "Electronics",
      price: 25,
      description: "Ergonomic wireless mouse",
      stock: 100,
    },
    {
      name: "Mechanical Keyboard",
      category: "Electronics",
      price: 80,
      description: "RGB mechanical keyboard",
      stock: 50,
    },
    {
      name: "Bluetooth Headphones",
      category: "Electronics",
      price: 150,
      description: "Noise cancelling headphones",
      stock: 40,
    },
    {
      name: "Smart Watch",
      category: "Wearables",
      price: 200,
      description: "Fitness tracking smartwatch",
      stock: 35,
    },
    {
      name: "Running Shoes",
      category: "Fashion",
      price: 90,
      description: "Comfortable running shoes",
      stock: 70,
    },
    {
      name: "Backpack",
      category: "Accessories",
      price: 60,
      description: "Travel backpack",
      stock: 45,
    },
    {
      name: "USB-C Charger",
      category: "Electronics",
      price: 35,
      description: "Fast charging USB-C adapter",
      stock: 120,
    },
    {
      name: "Desk Lamp",
      category: "Home",
      price: 40,
      description: "LED desk lamp",
      stock: 60,
    },
    {
      name: "Office Chair",
      category: "Furniture",
      price: 250,
      description: "Ergonomic office chair",
      stock: 20,
    },
    {
      name: "Portable SSD",
      category: "Electronics",
      price: 180,
      description: "1TB high speed SSD",
      stock: 25,
    },
    {
      name: "Yoga Mat",
      category: "Fitness",
      price: 30,
      description: "Non-slip yoga mat",
      stock: 90,
    },
  ];

  await Product.deleteMany();
  await Product.insertMany(products);

  console.log("Products seeded");
};
