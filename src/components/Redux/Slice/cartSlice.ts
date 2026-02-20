import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* ================================
   Types
================================ */

export type CartItem = {
  productId: number;
  name: string;
  image?: string;
  variantId: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
};

/* ================================
   Initial State
================================ */

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

/* ================================
   Helper Function
================================ */

const calculateTotals = (state: CartState) => {
  let totalQty = 0;
  let totalAmt = 0;

  state.items.forEach((item) => {
    totalQty += item.quantity;
    totalAmt += item.price * item.quantity;
  });

  state.totalQuantity = totalQty;
  state.totalAmount = totalAmt;
};

/* ================================
   Slice
================================ */

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /* ================================
       Add To Cart
    ================================= */
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) =>
          item.productId === newItem.productId &&
          item.variantId === newItem.variantId
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity || 1;
      } else {
        state.items.push({
          ...newItem,
          quantity: newItem.quantity || 1,
        });
      }

      calculateTotals(state);
    },

    /* ================================
       Remove From Cart
    ================================= */
    removeFromCart: (
      state,
      action: PayloadAction<{ productId: number; variantId: string }>
    ) => {
      const { productId, variantId } = action.payload;

      state.items = state.items.filter(
        (item) =>
          !(
            item.productId === productId &&
            item.variantId === variantId
          )
      );

      calculateTotals(state);
    },

    /* ================================
       Update Quantity
    ================================= */
    updateQuantity: (
      state,
      action: PayloadAction<{
        productId: number;
        variantId: string;
        quantity: number;
      }>
    ) => {
      const { productId, variantId, quantity } = action.payload;

      const existingItem = state.items.find(
        (item) =>
          item.productId === productId &&
          item.variantId === variantId
      );

      if (existingItem && quantity > 0) {
        existingItem.quantity = quantity;
      }

      calculateTotals(state);
    },

    /* ================================
       Clear Cart
    ================================= */
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

/* ================================
   Exports
================================ */

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;