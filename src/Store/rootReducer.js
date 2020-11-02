import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import groceryStoreReducer from "./reducers/groceryStoreReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["grocery"],
};

const rootReducer = combineReducers({
  grocery: groceryStoreReducer,
});

export default persistReducer(persistConfig, rootReducer);
