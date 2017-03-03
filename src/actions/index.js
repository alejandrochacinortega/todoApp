export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const FILTERING = "FILTERING";

let nextTodoId = 0;
export function addTodo(task) {
    return {
        type: ADD_TODO,
        payload: {
            task: task,
            id: nextTodoId++,
            completed: false
        }
    }
}

export function toggleTask(taskId) {
    return {
        type: TOGGLE_TASK,
        payload: taskId
    }
}

export function filtering(filter) {
    console.log(' filtering ', filter);
    return {
        type: FILTERING,
        payload: filter
    }
}