import { COUNTER_BUTTON_CLICKED } from "../types/actionTypes";
 
export const counterButtonClicked_V1 = {
    type: COUNTER_BUTTON_CLICKED,
    payload: { amount: 1 }
};

export const counterButtonClicked_V2 = amount => ({
    type: COUNTER_BUTTON_CLICKED,
    payload: { amount }
});