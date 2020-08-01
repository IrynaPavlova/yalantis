import Type from "./types";

export const users = (state = [], { type, payload }) => {
  switch (type) {
    case Type.GET_USERS_SUCCESS:
      return payload.value;
    default:
      return state;
  }
};
