// npm i next-redux-wrapper
import { createWrapper } from "next-redux-wrapper";
import { legacy_createStore as createStore } from "redux";

import rootReducer from "../reducers";

const configureStore = () => {
  const store = createStore(rootReducer);
  store.dispatch({
    type: "LOG_IN",
    data: "Lee",
  });
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
