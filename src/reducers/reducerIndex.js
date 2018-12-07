
import { REGISTER_SUCCESS, REGISTER_FAIL, REGISTER } from "../actions/action";
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN } from "../actions/action";

import { UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE } from "../actions/action";

const initialState = { register: {}, registerResult: "", loginData: {token: "", id: 0, success: false}, displayName: "", updateResult: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return state;
    case REGISTER_SUCCESS:
      return {
        ...state,
        register: action.register,
        registerResult: action.result
      };
    case REGISTER_FAIL:
      return {
        ...state,
        registerResult: action.result
      };
    // cases below are for the login page
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginData: action.loginData
      };
    
    case LOGIN_FAILURE:
      return {
        ...state,
        loginResult: action.result
      };

    case LOGIN:
      return {
        ...state,
        loginResult: action.result
      };

    case UPDATE_USER:
      return {
        ...state,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        displayName: action.displayName
      };

    case UPDATE_USER_FAILURE:
      return {
        ...state,
        updateResult: action.updateResult
      };

    default:
      return state;
  }
};

export default reducer;

// with log out button, return everything to initial state.