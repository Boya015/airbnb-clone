import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { listingListReducers } from "./reducers/listingReducers";
import { modalReducers } from "./reducers/modalReducers";
import { userLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  listingList: listingListReducers,
  modal: modalReducers,
  userLogin: userLoginReducer,
});

const userInfoFromLS = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initalState = {
  userLogin: { userInfo: userInfoFromLS },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
