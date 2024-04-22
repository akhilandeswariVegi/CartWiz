// Reducer for managing cart state
export const cartReducer = (state, action) => {
  switch (action.type) {
    // Add item to cart
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    // Remove item from cart
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    // Change quantity of an item in cart
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.map((c) =>
          c.id === action.payload.id ? { ...c, qty: action.payload.qty } : c
        ),
      };
    default:
      return state;
  }
};

// Reducer for managing product filtering and sorting state
export const productReducer = (state, action) => {
  switch (action.type) {
    // Sort products by price
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    // Toggle stock filter
    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock };
    // Toggle fast delivery filter
    case "FILTER_BY_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    // Filter products by rating
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    // Filter products by search query
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    // Clear all filters
    case "CLEAR_FILTERS":
      return { byStock: false, byFastDelivery: false, byRating: 0 };
    default:
      return state;
  }
};
