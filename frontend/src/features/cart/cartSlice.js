import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // [{ product: {}, quantity: 1 }]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.product._id === product._id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ product, quantity });
      }
    },
    // You can add removeItem, clearCart, etc. here later
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
