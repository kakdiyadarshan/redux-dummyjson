import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartitems: [],
  total: 0,
  price: 0,
  dis: 0,
  amt: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addcart: (state, actions) => {
      actions.payload.qty = 1;
      state.price = state.price + (actions.payload.price * actions.payload.qty);
      state.cartitems.push(actions.payload);
      state.amt = state.price;
    },
    decrement: (state, actions) => {
      const id = actions.payload;
      // const item = state.cartitems.find((item) => item.id === id);
      // console.log("i", item);
      //if (item) {
      //if (ele.qty > 1) {
      //     item.qty--;
      //     state.total = item.price * item.qty
      //     state.price = state.price + (actions.payload.price * actions.payload.qty);
      //     state.dis = (item.price * item.discountPercentage / 100) * item.qty;
      //     state.amt = state.price;
      //   }
      //}
      state.cartitems.map((ele) => {
        if (ele.qty > 1) {
          if (ele.id === id) {
            state.price = state.price - ele.price;
            state.discountPercaentage = state.discountPercaentage - ele.discountPercaentage;
            return ele.qty = ele.qty - 1;
          }
        }
      })
      state.amt = state.price;
    },
    increment: (state, actions) => {
      const id = actions.payload;
      // const item = state.cartitems.find(item => item.id === id);
      // if (item) {
      //   item.qty++;
      //   state.total = item.price * item.qty
      //   state.price = state.price + (actions.payload.price * actions.payload.qty);
      //   state.dis = (item.price * item.discountPercentage / 100) * item.qty;
      //   state.amt = state.price;
      // }
      state.cartitems.map((ele) => {
        if (ele.id === id) {
          state.price = state.price + ele.price;
          state.discountPercaentage = state.discountPercaentage + ele.discountPercaentage;
          return ele.qty = ele.qty + 1;
        }
      })
      state.amt = state.price;
    },
    remove: (state, actions) => {
      const id = actions.payload;
      const removed = state.cartitems.find(item => item.id === id);
      console.log("id", id)
      if (removed) {
        state.price -= removed.price * removed.qty;
        state.discount -= removed.discountPercaentage * removed.qty;
        state.cartitems = state.cartitems.filter(item => item.id !== id);
        state.amt = state.price
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addcart, decrement, increment, remove } = cartSlice.actions

export default cartSlice.reducer