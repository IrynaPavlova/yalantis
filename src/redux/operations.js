import { fetchStart, fetchError, getUsersSuccess } from "./actions";

import services from "../services/services";
export const getUsers = () => async dispatch => {
  dispatch(fetchStart());
  try {
    const response = await services.getUsers();
    dispatch(getUsersSuccess(response.data));
  } catch (error) {
    dispatch(fetchError(error.message));
    throw new Error(error);
  }
};
