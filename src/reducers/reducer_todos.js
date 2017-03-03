import {ADD_TODO, TOGGLE_TASK, DELETE_TASK} from '../actions/index';
import _ from 'lodash';

export default function (state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.payload
            ];
        case TOGGLE_TASK:
            return state.map((todo) => {
                if (todo.id !== action.payload) {
                    return todo
                }

                return Object.assign({}, todo, {
                    completed: !todo.completed
                })
            });
        case DELETE_TASK:
            return state.filter(t => t.id !== action.payload
            );
        default:
            return state;
    }
    return state;
}