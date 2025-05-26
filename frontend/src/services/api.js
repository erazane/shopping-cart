import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000, // Add timeout
});

// Enhanced Products API
export const fetchProducts = () => API.get('/products');
export const fetchProductById = (id) => API.get(`/products/${id}`);
export const createProduct = (productData) => API.post('/products', productData);

// Cart API (unchanged)
export const fetchCart = (userId) => API.get(`/cart/${userId}`);
export const addToCart = (userId, productId, quantity) => 
  API.post('/cart/add', { userId, productId, quantity });
export const removeFromCart = (userId, productId) => 
  API.delete(`/cart/remove/${userId}/${productId}`);

// Image Upload API (add if needed)
export const uploadImage = (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  return API.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

// Error handling interceptor
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('API Error:', error.response.data);
    } else {
      console.error('Network Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default API;