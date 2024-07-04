import { OPEN_MODAL } from "../types/modalTypes";
export const openModal = (openCLose, content) => {
  return {
    type: OPEN_MODAL,
    payload: {
      openCLose,
      content,
    },
  };
};
