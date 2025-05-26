const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const sampleProducts = [
  {
    name: "Chocolate Cake",
    description: "Rich and moist chocolate cake",
    price: 25.99,
    imageUrl: "cake1.jpg",
    category: "Cakes",
    stock: 10
  },
  {
    name: "Vanilla Cake",
    description: "Classic vanilla sponge cake",
    price: 22.99,
    imageUrl: "cake2.jpg",
    category: "Cakes", 
    stock: 15
  },
  {
    name: "Red Velvet Cake",
    description: "Smooth red velvet with cream cheese frosting",
    price: 28.99,
    imageUrl: "cake3.jpg",
    category: "Cakes",
    stock: 8
  }
];

async function seedProducts() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    console.log('Connected to MongoDB');
    
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    const result = await Product.insertMany(sampleProducts);
    console.log(`Added ${result.length} products:`);
    
    result.forEach(product => {
      console.log(`- ${product.name}: $${product.price} (${product.imageUrl})`);
    });
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

seedProducts();