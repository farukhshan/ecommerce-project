import { createSlice } from '@reduxjs/toolkit'
import type { Action, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  items: Array<any>;
  totalAmount: number;
  totalQuantity:number;
}

const initialState: CounterState = {
  items: [],
  totalAmount: 0,
  totalQuantity:0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtoCart: (state,actions:PayloadAction<any>) => {
      state.totalQuantity+=actions.payload.quantity;
    
    },
    removeFromCart: (state,actions:PayloadAction<any>)  => {
      state.totalQuantity-=actions.payload.quantity;
    },
    clrearCart: (state, actions: PayloadAction<number>) => {
      state=initialState;
    },
  },
})

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions

export default cartSlice.reducer