import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../constants/fiters";
import { STATUS } from "../../Enums/groceryStatus.enum";

export const getFilter = (state) => state.filter;

export const getVisibleTodos = (state, filter) => () => {
  switch (filter) {
    case SHOW_ALL:
      return state;
    case SHOW_COMPLETED:
      return state.filter((groceri) => groceri.status === STATUS.RAN_OUT);
    case SHOW_ACTIVE:
      return state.filter((groceri) => groceri.status === STATUS.HAVE);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};
