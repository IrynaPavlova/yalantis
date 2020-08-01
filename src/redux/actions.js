import Type from "./types";

export const fetchStart = () => ({
  type: Type.FETCH_START
});

export const fetchError = error => ({
  type: Type.FETCH_ERROR,
  payload: { error }
});

export const getUsersSuccess = value => ({
  type: Type.GET_USERS_SUCCESS,
  payload: { value }
});
