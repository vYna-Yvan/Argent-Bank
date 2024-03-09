import { GET_PROFILE_URL, LOGIN_USER_URL, REGISTER_USER_URL } from "../api/api";
import {
  CLEAR_LOADING,
  GET_PROFILE_FAILED,
  GET_PROFILE_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER_REQUEST,
  LOGOUT_USER,
  //REGISTER_USER_FAILED,
  //REGISTER_USER_REQUEST,
  //REGISTER_USER_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_USER_REQUEST,
} from "../types/userTypes";

export const loginUser = (body, setError, dispatch) => {
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

      if (!token) {
        setError("E-mail ou mot de passe invalide. Veuillez réessayer.");
        return dispatch({ type: LOGIN_USER_FAILED });
      } else {
        getProfile(token, dispatch);
      }
    })
    .catch(() => {
      setError("E-mail ou mot de passe invalide. Veuillez réessayer.");
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
        return dispatch({ type: GET_PROFILE_FAILED });
      } else {
        return response.json();
      }
    })
    .then((data) => {
      if (!data?.body) {
        return dispatch({ type: GET_PROFILE_FAILED });
      } else {
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

export const logOutUser = (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};
