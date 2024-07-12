import { OPEN_MODAL } from "../types/modalTypes"

const initialState = { openCLose: "closed", content: "" };

export const modalReducers = (state = initialState, action) => {
  if (action.type === OPEN_MODAL) {
    return action.payload;
  }
  return state;
};
