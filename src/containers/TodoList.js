import React from 'react';
import {connect} from 'react-redux';
import ListItem from '../components/ListItem';
import {toggleTask} from '../actions/index';


class TodoList extends React.Component {

    render() {
        return (
            <div>
                {this.props.todos.map((todo) =>
                    <ListItem key={todo.id}
                              {...todo}
                              toggleTask={() => this.props.toggleTask(todo.id)}
                    />
                )}
            </div>
        )
    }

}

function getState(todos, filtering) {
    switch (filtering) {
        case "showAll":
            return todos;
        case "completed":
            return todos.filter(t => t.completed);
        case "todo":
            return todos.filter(t => !t.completed);
    }
}

function mapStateToProps(state) {
    return {
        todos: getState(state.todos, state.filtering)
    }
}

export default connect(mapStateToProps, {toggleTask})(TodoList);