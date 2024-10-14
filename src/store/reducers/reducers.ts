export interface ProductItem {
  id: string;
  url: string;
  name: string;
  price: number;
}

interface Action {
  type: string;
  payload?: ProductItem; // Payload tipini aniqlash
}

const initialState: { products: ProductItem[] } = {
  products: [
    {
      id: "1",
      url: "https://i.pinimg.com/236x/78/0b/c9/780bc94187c2ece6350465393273db75.jpg",
      name: "Product 1",
      price: 10.99,
    },
  ],
};

const productsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "EDIT":
      const newProducts = state.products.map((product) =>
        product.id === action.payload!.id ? action.payload : product
      );
      return {
        ...state,
        products: newProducts,
      };
    case "":
    // const newProducts = state.products.map((product) =>
    //   product.id === action.payload!.id ? action.payload : product
    // );
    // return {
    //   ...state,
    //   products: newProducts,
    // };
    default:
      return state;
  }
};

export default productsReducer;
