import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "redux-mock-store";
import ShopScreen from "../src/screens/Shop/Shop";
import {
  addItems,
  deleteItems,
  editItems,
  togglePurchaseds,
} from "../src/redux/slices/shop";

const mockStore = configureStore([]);
const initialState = {
  shop: {
    shopList: [
      { id: "1", Name: "Apples", Quantity: 5, Unit: "pcs", Purchased: false },
    ],
  },
};

describe("ShopScreen", () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn(); // Mock the dispatch function
  });

  it("renders correctly", () => {
    const { getByPlaceholderText, getByText } = render(
      <ReduxProvider store={store}>
        <ShopScreen />
      </ReduxProvider>
    );

    expect(getByPlaceholderText("Item Name")).toBeTruthy();
    expect(getByText("Add Items")).toBeTruthy();
  });

  it("adds a new item", async () => {
    const { getByPlaceholderText, getByText } = render(
      <ReduxProvider store={store}>
        <ShopScreen />
      </ReduxProvider>
    );

    const nameInput = getByPlaceholderText("Item Name");
    const quantityInput = getByPlaceholderText("Quantity");
    const unitInput = getByPlaceholderText("Unit (e.g., kg, liters, pieces)");

    // Fill inputs
    fireEvent.changeText(nameInput, "Bananas");
    fireEvent.changeText(quantityInput, "3");
    fireEvent.changeText(unitInput, "pcs");

    // Press Add Items button
    const addButton = getByText("Add Items");
    fireEvent.press(addButton);

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(
        addItems([
          ...initialState.shop.shopList,
          {
            id: expect.any(String), // UUID will be generated
            Name: "Bananas",
            Quantity: 3,
            Unit: "pcs",
            Purchased: false,
          },
        ])
      );
    });
  });

  it("edits an existing item", async () => {
    const { getByText, getByPlaceholderText } = render(
      <ReduxProvider store={store}>
        <ShopScreen />
      </ReduxProvider>
    );

    // Press the pencil icon to edit
    const editButton = getByText("Apples");
    fireEvent.press(editButton);

    const nameInput = getByPlaceholderText("Item Name");
    fireEvent.changeText(nameInput, "Green Apples");

    const updateButton = getByText("Update Items");
    fireEvent.press(updateButton);

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(
        editItems({ id: "1", name: "Green Apples" })
      );
    });
  });

  it("deletes an item", async () => {
    const { getByText } = render(
      <ReduxProvider store={store}>
        <ShopScreen />
      </ReduxProvider>
    );

    // Press delete icon
    const deleteButton = getByText("delete");
    fireEvent.press(deleteButton);

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(deleteItems("1"));
    });
  });

  it("toggles purchased status", async () => {
    const { getByText } = render(
      <ReduxProvider store={store}>
        <ShopScreen />
      </ReduxProvider>
    );

    // Press the checkbox to toggle purchased
    const itemCheckbox = getByText("Apples");
    fireEvent.press(itemCheckbox);

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(togglePurchaseds("1"));
    });
  });
});
