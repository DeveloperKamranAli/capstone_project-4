import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: [], // Array to hold multiple products
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.selectedProducts.push(action.payload); // Add product to the array
    },
    removeProductFromCart: (state, action) => {
      state.selectedProducts = state.selectedProducts.filter(
        (product) => product.id !== action.payload // Remove product by ID
      );
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
