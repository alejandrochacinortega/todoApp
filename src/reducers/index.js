import{combineReducers} from 'redux';
import todosReducer from './reducer_todos';
import filteringReducer from './reducer_filtering';

const rootReducer = combineReducers({
    todos: todosReducer,
    filtering: filteringReducer
});

export default rootReducer;