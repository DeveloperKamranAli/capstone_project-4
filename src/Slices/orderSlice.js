import { createSlice } from "@reduxjs/toolkit";

// Load initial orders from localStorage
const initialOrders = JSON.parse(localStorage.getItem("orders")) || [];

const orderSlice = createSlice({
  name: "orders",
  initialState: { orders: initialOrders },
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
