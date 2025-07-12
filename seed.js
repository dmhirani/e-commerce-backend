const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/productModel");

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    seedData();
  })
  .catch((err) => console.log(err));

async function seedData() {
  try {
    await Product.deleteMany(); // Clear old data

    const sampleProducts = [
      {
        name: "Silver Bracelet",
        price: 799,
        description: "Elegant handmade silver bracelet",
        category: "Bracelet",
        image: "/images/bracelet.jpg",     // ✅ added
        stock: 10,                          // ✅ added
      },
      {
        name: "Silver Payal",
        price: 1499,
        description: "Traditional silver anklet (payal)",
        category: "Anklet",
        image: "/images/payal.jpg",        // ✅ added
        stock: 15                          // ✅ added
      }
    ];

    await Product.insertMany(sampleProducts);
    console.log("Sample products added ✅");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
