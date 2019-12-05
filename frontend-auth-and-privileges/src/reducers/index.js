import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

export default combineReducers({
  data: dataReducer,
  error: errorReducer,
  auth: authReducer
});
