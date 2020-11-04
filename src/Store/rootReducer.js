import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import groceryStoreReducer from "./reducers/groceryStoreReducer";
import visibilityFilter from "./reducers/groceryFilterReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["grocery", "filter"],
};

const rootReducer = combineReducers({
  grocery: groceryStoreReducer,
  filter: visibilityFilter
});

export default persistReducer(persistConfig, rootReducer);
