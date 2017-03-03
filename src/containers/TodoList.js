import React from 'react';
import {connect} from 'react-redux';
import ListItem from '../components/ListItem';
import {toggleTask, deleteTask} from '../actions/index';


class TodoList extends React.Component {

    render() {
        return (
            <div>
                {this.props.todos.map((todo, index) =>
                    <ListItem key={index}
                              completed={todo.get('completed')}
                              task={todo.get('task')}
                              toggleTask={() => this.props.toggleTask(index)}
                              deleteTask={() => this.props.deleteTask(index)}
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
            return todos.filter(t => t.get('completed'));
        case "todo":
            return todos.filter(t => !t.get('completed'));
    }
}

function mapStateToProps(state) {
    return {
        todos: getState(state.todos, state.filtering)
    }
}

export default connect(mapStateToProps, {toggleTask, deleteTask})(TodoList);