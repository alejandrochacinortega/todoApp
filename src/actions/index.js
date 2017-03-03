import Immutable from 'immutable';
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const FILTERING = "FILTERING";
export const DELETE_TASK  = "DELETE_TASK";

export function addTodo(task) {
    return {
        type: ADD_TODO,
        payload: Immutable.fromJS({
            task: task,
            completed: false
        })
    }
}

export function toggleTask(index) {
    return {
        type: TOGGLE_TASK,
        index
    }
}

export function filtering(filter) {
    return {
        type: FILTERING,
        payload: filter
    }
}

export function deleteTask(index) {
    return {
        type: DELETE_TASK,
        index,
    }
}