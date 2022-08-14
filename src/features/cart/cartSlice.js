import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const findItemInCart = (allData, data, increase) => {
  const quantityArray = allData.filter((e) => e.id === data.id);
  let finalResult = [];
  if (quantityArray.length > 0) {
    const result = allData.map((e) => {
      if (e.id === data.id) {
        if (increase) {
          e.qnty++;
        } else {
          e.qnty--;
        }
      }
      return e;
    });

    return result;
  } else {
    finalResult = [...allData, data];
  }

  return finalResult;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      if (state.data.length === 0) {
        state.data.push(actions.payload);
      } else {
        state.data = findItemInCart(state.data, actions.payload, true);
      }
    },
    removeFromCart: (state, actions) => {
      state.data = findItemInCart(state.data, actions.payload, false);
    },
  },
});

const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export { cartActions, cartReducer };
