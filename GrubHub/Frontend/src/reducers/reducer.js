import {combineReducers } from "redux";
import LoginReducer from "./loginReducer"
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
    form: formReducer,
    loginreducer: LoginReducer
})

export default rootReducer