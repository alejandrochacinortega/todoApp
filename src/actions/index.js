export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const FILTERING = "FILTERING";
export const DELETE_TASK  = "DELETE_TASK";

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
    return {
        type: FILTERING,
        payload: filter
    }
}

export function deleteTask(taskId) {
    return {
        type: DELETE_TASK,
        payload: taskId
    }
}