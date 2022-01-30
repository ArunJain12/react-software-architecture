import { SET_INCREMENT_BY } from "../types/actionTypes";

export const incrementReducer = (state = 1, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_INCREMENT_BY:
            return payload.increment;

        default:
            return state;
    }
};