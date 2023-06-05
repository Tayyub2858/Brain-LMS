import { createStore } from "redux";

import rootReducer from "../Reducer/CombineRudcer";

const Store = createStore(rootReducer);
export default Store;