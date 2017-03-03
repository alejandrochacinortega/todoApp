import { ADD_TODO, TOGGLE_TASK } from '../actions/index';

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
        default:
            return state;
    }
    return state;
}