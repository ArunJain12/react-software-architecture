import { SET_INCREMENT_BY } from "../types/actionTypes";

export const setIncrementBy = (increment) => ({
    type: SET_INCREMENT_BY,
    payload: { increment }
});