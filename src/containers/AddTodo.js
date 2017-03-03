import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);

        this.state = {
            term: ""
        };
    }

    onChange(event) {
        this.setState({ term: event.target.value})
    };

    onSubmit(event) {
        event.preventDefault();
        this.props.addTodo(this.state.term);
        this.setState({ term: "" })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text"
                       placeholder="Add task"
                       onChange={this.onChange}
                       value={this.state.term}
                />
                <button type="submit">Add</button>
            </form>
        )
    }

}

export default connect(null, { addTodo })(AddTodo);