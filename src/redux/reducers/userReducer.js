import {
  CLEAR_LOADING,
  GET_PROFILE_FAILED,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from "../types/userTypes";

const initialeState = {
  token: null,
  user: null,
  userLoading: false,
  appLoading: true,
};

const userReducer = (state = initialeState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        userLoading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        userLoading: false,
      };
    case LOGIN_USER_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        userLoading: false,
        appLoading: false,
      };
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        userLoading: true,
      };
    case GET_PROFILE_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        userLoading: false,
        appLoading: false,
      };
    case GET_PROFILE_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        userLoading: false,
        appLoading: false,
      };
    case CLEAR_LOADING:
      return {
        ...state,
        userLoading: false,
        appLoading: false,
      };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};
export default userReducer;
