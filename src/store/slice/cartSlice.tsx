import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CounterState {
  items: CartItem[];
  totalAmount: number;
  totalQuantity: number;
}

const initialState: CounterState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, actions: PayloadAction<CartItem>) => {
      state.totalQuantity += actions.payload.quantity;
      state.items.push(actions.payload); // Add the item to the cart
    },
    removeFromCart: (state, actions: PayloadAction<CartItem>) => {
      state.totalQuantity -= actions.payload.quantity;
      state.items = state.items.filter(item => item.id !== actions.payload.id);
    },
    clearCart: (state) => {
      return initialState;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
