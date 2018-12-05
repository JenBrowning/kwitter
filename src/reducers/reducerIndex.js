
import { REGISTER_SUCCESS, REGISTER_FAIL, REGISTER } from "../actions/action";
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN } from "../actions/action";

const initialState = { register: {}, registerResult: "", loginData: {token: "", id: 0, success: false} };

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
        // link to main feed page?
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

    default:
      return state;
  }
};

export default reducer;

// with log out button, return everything to initial state.