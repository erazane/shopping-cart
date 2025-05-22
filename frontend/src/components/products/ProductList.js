import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import { addToCart } from '../services/api';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

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

  if (loading) return <div>Loading products...</div>;

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products">
        {products.map(product => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} />
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