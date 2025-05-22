const mongoose = require('mongoose');

// Define the product schema
// This schema defines the structure of the product data in the database
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
    });

module.exports = mongoose.model('Product', productSchema);
// This line exports the Product model, which can be used in other parts of the application