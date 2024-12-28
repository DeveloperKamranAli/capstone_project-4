import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, title: "Product 1", description: "Description 1", price: 100, image: "image1.jpg" },
    { id: 2, title: "Product 2", description: "Description 2", price: 200, image: "image2.jpg" },
    { id: 3, title: "Product 3", description: "Description 3", price: 300, image: "image3.jpg" },
  ],
  selectedProduct: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectProduct: (state, action) => {
      state.selectedProduct = state.products.find(p => p.id === action.payload);
    },
  },
});

export const { selectProduct } = productSlice.actions;
export default productSlice.reducer;
