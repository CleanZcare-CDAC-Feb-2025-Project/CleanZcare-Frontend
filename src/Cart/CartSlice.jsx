import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  subtotal: 0,
  deliveryCharge: 50,
  taxRate: 0.18,
  tax: 0,
  isAvoidCollin: false,
  discountamt: 0,
  discount: {
    coupan_id: 1,
    code: "",
    minAmt: 0,
    flatAmt: 0,
    isApplied: false,
  },
  total: 0,
  tip: 0,
  customerId: 1,
  slot: {
    time: "",
    date: "",
  },
};

function recalculateDiscount(state) {
  const minAmt = state.discount.minAmt || 0;
  const flatAmt = state.discount.flatAmt || 0;

  if (state.subtotal >= minAmt) {
    state.discountamt = parseInt(state.subtotal) - parseInt(flatAmt);
  } else {
    state.discountamt = parseInt(state.subtotal); // No discount
  }
}
function recalculateTotal(state) {
  const tax = state.discountamt * state.taxRate;
  state.tax = parseFloat(tax.toFixed(2)); // Optional: store tax separately
  state.total = parseFloat(
    (state.discountamt + state.deliveryCharge + tax).toFixed(2)
  );
}

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const exists = state.items.find((item) => item.id === action.payload.id);

      if (exists) {
        exists.quantity += 1;
        state.subtotal += parseInt(exists.price);
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        state.subtotal =
          parseInt(state.subtotal) + parseInt(action.payload.price);
      }

      // recalculate discount if already applied
      recalculateDiscount(state);
    },

    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        state.subtotal = parseInt(state.subtotal) + parseInt(item.price);
        recalculateDiscount(state);
        recalculateTotal(state);
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.subtotal = parseInt(state.subtotal) - parseInt(item.price);
        } else {
          state.subtotal = parseInt(state.subtotal) - parseInt(item.price);
          state.items = state.items.filter((i) => i.id !== item.id);
        }
        if (state.items.length <= 0) {
          state.discount.flatAmt = 0;
          state.discount.minAmt = 0;
        }
        recalculateDiscount(state);
        recalculateTotal(state);
      }
    },

    applyDiscount: (state, action) => {
      state.discount.flatAmt = action.payload.discamt;
      state.discount.minAmt = action.payload.minamt;
      state.discount.id = action.payload.id;
      state.discount.code = action.payload.code;
      recalculateDiscount(state);
      state.discount.isApplied = true;
    },
    removeDiscount: (state) => {
      state.discount.flatAmt = 0;
      state.discount.minAmt = 0;
      state.discount.code = "";
      recalculateDiscount(state);
      state.discount.isApplied = false;
    },
    update: (state, action) => {
      const { id, title, price, quantity } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], title, price, quantity };
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
      (state.subtotal = 0),
        (state.deliveryCharge = 50),
        (state.taxRate = 0.18),
        (state.tax = 0),
        (state.isAvoidCollin = false),
        (state.discountamt = 0),
        (state.discount = {
          coupan_id: 1,
          code: "",
          minAmt: 0,
          flatAmt: 0,
          isApplied: false,
        }),
        (state.total = 0),
        (state.tip = 0),
        (state.customerId = 1),
        (state.slot = {
          time: "",
          date: "",
        });
    },
    calculateTotal: (state) => {
      recalculateTotal(state);
    },
    avoidColling(state) {
      state.isAvoidCollin = !state.isAvoidCollin;
    },
    applyTip(state, action) {
      state.tip = action.payload;
    },
    addSlot(state, action) {
      (state.slot.date = action.payload.date),
        (state.slot.time = action.payload.time);
      console.log(action.payload);
    },
  },
});
export const {
  addSlot,
  applyTip,
  avoidColling,
  addItem,
  updateItem,
  deleteItem,
  clearCart,
  incrementQuantity,
  decrementQuantity,
  applyDiscount,
  removeDiscount,
  calculateTotal,
} = CartSlice.actions;

export default CartSlice.reducer;
