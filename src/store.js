import { createStore } from "redux";
import reducer from "./reducer";
import {
  getStateLocalStorage,
  setStateLocalStorage,
} from "./utils/localStorage";

const localStorageState = getStateLocalStorage();

const store = createStore(
  reducer,
  localStorageState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  setStateLocalStorage({
    tweets: store.getState().tweet,
  });
});

export default store;
