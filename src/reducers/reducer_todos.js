import {ADD_TODO, TOGGLE_TASK, DELETE_TASK} from '../actions/index';

import Immutable from 'immutable';

let initialState = Immutable.List([]);

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.push(action.payload);
        case TOGGLE_TASK:
            return state.setIn([action.index, 'completed'],
                !state.getIn([action.index, 'completed']));
        case DELETE_TASK:
            return state.delete(action.index);
        default:
            return state;
    }
    return state;
}
