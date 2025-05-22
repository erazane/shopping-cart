import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api'
});

// Products API
export const fetchProducts = () => API.get('/products');
export const fetchProductById = (id) => API.get(`/products/${id}`);

// Cart API
export const fetchCart = (userId) => API.get(`/cart/${userId}`);
export const addToCart = (userId, productId, quantity) => 
  API.post('/cart/add', { userId, productId, quantity });
export const removeFromCart = (userId, productId) => 
  API.delete(`/cart/remove/${userId}/${productId}`);

export default API;