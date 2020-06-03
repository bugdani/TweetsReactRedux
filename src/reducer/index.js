import { combineReducers } from "redux";
import modalReducers from "./modalReducers";
import validationReducers from "./validationReducers";
import tweetReducers from "./tweetReducers";

export default combineReducers({
  modal: modalReducers,
  validation: validationReducers,
  tweet: tweetReducers,
});
