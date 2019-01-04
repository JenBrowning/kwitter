import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REGISTER,
  POST_MESSAGES
} from "../actions/action";

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN } from "../actions/action";
import {
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER
} from "../actions/action";
import { GET_MESSAGES } from "../actions/action";

import {
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE
} from "../actions/action";
import {
  GET_USER,
  GET_ALL_USERS,
  GET_USER_SUCCESS,
  GET_USER_MESSAGES
} from "../actions/action";

import { LOGOUT_USER } from "../actions/action";

import { UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_FAILURE } from "../actions/action";

const initialState = {
  register: {},
  registerResult: "",
  loginData: { token: "", id: 0, success: false },
  loginResult: "",
  isLoggingIn: false,
  uploadImageResult: "",

  user: {
    id: 0,
    username: "",
    displayName: "",
    about: "",
    createdAt: "",
    updatedAt: "",
    messages: []
  },
  users: [
    {
      id: 0,
      username: "",
      displayName: "",
      about: "",
      createdAt: "",
      updatedAt: ""
    }
  ],
  displayName: "",
  updateResult: "",
  deleteUserResult: "",
  messages: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // cases below are for the registering
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
        loginData: action.loginData,
        isLoggingIn: false
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loginResult: action.result,
        isLoggingIn: false
      };
    // above line for login failure window alert
    case LOGIN:
      return {
        ...state,
        isLoggingIn: true
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        ...initialState
      };

    case DELETE_USER_FAILURE:
      return {
        ...state,
        deleteUserResult: action.deleteUserResult
      };

    case DELETE_USER:
      return {
        ...state
      };

    case GET_MESSAGES:
      return {
        ...state,
        messages: action.messages
      };

    case POST_MESSAGES:
      return {
        ...state,
        messages: action.result
      };

    // cases below are for updating the user's info
    case UPDATE_USER:
      return {
        ...state
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

    case GET_USER:
      return {
        ...state
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.user
      };

    case GET_ALL_USERS:
      return {
        ...state,
        users: action.users
      };

    case GET_USER_MESSAGES:
      return {
        ...state,
        AHMessages: action.messages
      };

    case LOGOUT_USER:
      return {
        ...initialState
      };

    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        uploadImageResult: action.uploadImageResult
      };

    case UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        uploadImageResult: action.uploadImageResult
      };

    default:
      return state;
  }
};

export default reducer;

// with log out button, return everything to initial state.
