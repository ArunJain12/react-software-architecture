import { COUNTER_BUTTON_CLICKED } from "../types/actionTypes";

export const counterReducer = (state = 0, action) => {
    const { type, payload } = action;
    switch (type) {
        case COUNTER_BUTTON_CLICKED:
            return state + payload.amount;
        default:
            return state;
    }
};