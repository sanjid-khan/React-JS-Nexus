import { createSlice } from "@reduxjs/toolkit";

const FoodSlicer = createSlice({
  name: "slice2",
  initialState: {
    items: []
  },
  reducers: {
    addItems: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({ ...item, qty: 1 });
      }
    },

    removeItems: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(i => i.id === id);

      if (!existingItem) return;

      if (existingItem.qty > 1) {
        existingItem.qty -= 1;
      } else {
        state.items = state.items.filter(i => i.id !== id);
      }
    }
  }
});

export const { addItems, removeItems } = FoodSlicer.actions;
export default FoodSlicer.reducer;
