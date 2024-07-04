import { OPEN_MODAL } from "../types/modalTypes"

const initialState = { openCLose: "close", content: "" };

export const modalReducers = (state = initialState, action) => {
  if (action.type === OPEN_MODEL) {
    return action.payload;
  }
  return state;
};
