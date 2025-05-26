const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from uploads directory (if you're storing uploaded images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// If you want to serve images from frontend/public/images through backend
app.use('/images', express.static(path.join(__dirname, '../frontend/public/images')));

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));