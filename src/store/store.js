import { createStore, combineReducers } from 'redux';
import { counterReducer } from '../reducers/counterReducer';
import { incrementReducer } from '../reducers/incrementReducer';

const rootReducer = combineReducers({
    numberOfClicks: counterReducer,
    incrementBy: incrementReducer
});

export const store = createStore(rootReducer);