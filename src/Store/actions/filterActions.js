import { SET_VISIBILITY_FILTER } from "../constants/fiters";

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});
