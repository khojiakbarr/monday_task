import { combineReducers } from "redux";
import productsReducer from "./reducers/reducers";

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
