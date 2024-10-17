import shopReducer, {
  addItems,
  deleteItems,
  editItems,
  togglePurchaseds,
  ShopState,
} from "../src/redux/slices/shop";

describe("shopSlice reducer", () => {
  const initialState: ShopState = {
    shopList: [],
  };

  const mockItems = [
    { id: "1", Name: "Apples", Quantity: 5, Unit: "pcs", Purchased: false },
    { id: "2", Name: "Bananas", Quantity: 10, Unit: "pcs", Purchased: false },
  ];

  it("should return the initial state", () => {
    expect(shopReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it("should handle addItems", () => {
    const newItems = [
      { id: "3", Name: "Milk", Quantity: 2, Unit: "L", Purchased: false },
    ];

    const action = addItems(newItems);
    const nextState = shopReducer(initialState, action);

    expect(nextState.shopList).toEqual(newItems);
  });

  it("should handle deleteItems", () => {
    const initialStateWithItems = { shopList: mockItems };

    const action = deleteItems("1");
    const nextState = shopReducer(initialStateWithItems, action);

    expect(nextState.shopList).toEqual([
      { id: "2", Name: "Bananas", Quantity: 10, Unit: "pcs", Purchased: false },
    ]);
  });

  it("should handle editItems", () => {
    const initialStateWithItems = { shopList: mockItems };

    const action = editItems({ id: "1", name: "Green Apples" });
    const nextState = shopReducer(initialStateWithItems, action);

    expect(nextState.shopList[0].Name).toEqual("Green Apples");
  });

  it("should handle togglePurchaseds", () => {
    const initialStateWithItems = { shopList: mockItems };

    const action = togglePurchaseds("1");
    const nextState = shopReducer(initialStateWithItems, action);

    expect(nextState.shopList[0].Purchased).toBe(true);
  });
});
