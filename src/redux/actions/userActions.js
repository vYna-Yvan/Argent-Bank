import { GET_PROFILE_URL, LOGIN_USER_URL, REGISTER_USER_URL } from "../api/api";
import {
  CLEAR_LOADING,
  GET_PROFILE_FAILED,
  GET_PROFILE_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER_REQUEST,
  REGISTER_USER_FAILED,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_USER_REQUEST,
} from "../types/userTypes";

export const loginUser = (body, dispatch) => {
  dispatch({
    type: LOGIN_USER_REQUEST,
  });
  fetch(LOGIN_USER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (!response.ok) {
        return dispatch({ type: LOGIN_USER_FAILED });
      } else {
        return response.json();
      }
    })
    .then((data) => {
      const token = data?.body?.token;
      console.log("Réponse api", token);
      if (!token) {
        return dispatch({ type: LOGIN_USER_FAILED });
      } else {
        getProfile(token, dispatch);
      }
    });
};

export const getProfile = (token, dispatch) => {
  dispatch({
    type: LOGIN_USER_REQUEST,
  });
  fetch(GET_PROFILE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        console.log(3);
        return dispatch({ type: GET_PROFILE_FAILED });
      } else {
        console.log(4);
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      if (!data?.body) {
        console.log(1);
        return dispatch({ type: GET_PROFILE_FAILED });
      } else {
        console.log(2);
        dispatch({
          type: GET_PROFILE_SUCCESS,
          payload: {
            token: token,
            user: data.body,
          },
        });
      }
    });
};

export const clearLoading = (dispatch) => {
  dispatch({ type: CLEAR_LOADING });
};

export const registerUser = (body, clearForm) => {
  fetch(REGISTER_USER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => {
    if (!response.ok) {
      console.log("user register failed");
    } else {
      alert("user registered");
      clearForm();
    }
  });
};

export const updateUser = (token, body, dispatch) => {
  dispatch({
    type: UPDATE_USER_REQUEST,
  });
  fetch(GET_PROFILE_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  }).then((response) => {
    if (!response.ok) {
      return dispatch({ type: UPDATE_USER_FAILED });
    } else {
      getProfile(token, dispatch);
    }
  });
};
