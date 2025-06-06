import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/api';
import { addToCart } from '../../services/api';
import { addItem } from '../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const ProductList = ({ userId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetchProducts();
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading products:', error);
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      // Add to backend
      const response = await addToCart(userId, productId, 1);
      // Update Redux store
      const product = products.find(p => p._id === productId);
      dispatch(addItem({ product, quantity: 1 }));
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  // Helper function to get correct image path
  const getImageSrc = (product) => {
    // Use the transformed 'image' property from backend
    const imageUrl = product.image || product.imageUrl;
    
    if (!imageUrl) {
      return `${process.env.PUBLIC_URL}/images/default-product.jpg`;
    }
    
    // If it's a full URL, use it directly
    if (imageUrl.startsWith('http')) {
      return imageUrl;
    }
    
    // Clean up the path and construct the full URL
    const cleanPath = imageUrl.replace('./', '').replace(/^\/+/, '');
    return `${process.env.PUBLIC_URL}/images/${cleanPath}`;
  };

  if (loading) return <div>Loading products...</div>;

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products">
        {products.map(product => (
          <div key={product._id} className="product-card">
            <img 
              src={getImageSrc(product)} 
              alt={product.name}
              onError={(e) => {
                e.target.src = `${process.env.PUBLIC_URL}/images/default-product.jpg`;
                e.target.onerror = null;
              }}
            />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(product._id)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;