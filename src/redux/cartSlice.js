import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    // adding / increasing quantity
    addtoCart: (state, action) => {
      const itemIndex = state.carts.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        let newEntry = { ...action.payload, qnty: 1 };
        state.carts.push(newEntry);
      }
    },

    // removing one by one item from cart
    removeFromCart: (state, action) => {
      const itemIndex = state.carts.findIndex(item => item.id === action.payload);

      if (itemIndex >= 0 && state.carts[itemIndex].qnty > 1) {
        state.carts[itemIndex].qnty -= 1;
      } else if (itemIndex >= 0 && state.carts[itemIndex].qnty === 1) {
        state.carts.splice(itemIndex, 1);
      }
    },

    // emptying the entire cart
    emptyCart: (state, action) => {
      const itemIndex = state.carts.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.carts.splice(itemIndex, 1);
      }
    },
  },
});

export const { addtoCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
