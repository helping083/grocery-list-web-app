import { ADD_GROCERY, TOGGLE_GROCERY, REMOVE_GROCERY } from "../constants/grocery";

export const AddGrocery = (data) => ({
  type: ADD_GROCERY,
  payload: data,
});

export const ToggleStatus = (data) => ({
  type: TOGGLE_GROCERY,
  payload: data,
});

export const DeleteGrocery = (id) => ({
  type: REMOVE_GROCERY,
  payload: id,
});
