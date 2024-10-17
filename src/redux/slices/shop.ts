import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface shopItems {
  id: string;
  Name: string;
  Quantity: number;
  Unit: string;
  Purchased: boolean;
}

export interface ShopState {
  shopList: shopItems[];
}

const initialState: ShopState = {
  shopList: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.shopList = action.payload;
    },
    deleteItems: (state, action) => {
      const updateDeleteItems = state.shopList.filter(
        (item) => item.id !== action.payload
      );
      state.shopList = updateDeleteItems;
    },
    editItems: (state, action) => {
      const index = state.shopList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.shopList[index].Name = action.payload.name;
      }
    },
    togglePurchaseds: (state, action) => {
      const item = state.shopList.find((item) => item.id === action.payload);
      if (item) {
        item.Purchased = !item.Purchased;
      }
    },
  },
});

export const { addItems, deleteItems, editItems, togglePurchaseds } =
  shopSlice.actions;
export default shopSlice.reducer;
