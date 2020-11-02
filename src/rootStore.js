import { createStore } from "redux";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Store/rootReducer";

const store = createStore(rootReducer, composeWithDevTools());

const persistor = persistStore(store);

export { store, persistor };
