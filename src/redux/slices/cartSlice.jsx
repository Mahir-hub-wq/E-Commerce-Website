import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
const initialState = {
  cartItems: [],
};

const CartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    AddToCart: (state, action) => {
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    INCREAMENT: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.id === action.payload,
      );
      console.log(product)

      if (product) {
        product.quantity += 1;
      }
    },
    DECREAMENT: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.id === action.payload,
      );
      console.log(product);
      
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },

  },
});
export const { AddToCart, INCREAMENT, DECREAMENT } = CartSlice.actions;
export default CartSlice.reducer;
