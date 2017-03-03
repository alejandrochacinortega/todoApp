import React from 'react';
import { filtering } from '../actions/index';
import { connect } from 'react-redux';

class Filter extends React.Component {

    render() {
        return (
            <div>
                <hr/>
                <span onClick={() => this.props.filtering("showAll")} style={{ color: this.props.filter === "showAll" ? "blue" : "" }}>Show all</span>
                <span onClick={() => this.props.filtering("completed")} style={{ color: this.props.filter === "completed" ? "blue" : "", marginLeft: "10px" }}>Completed</span>
                <span onClick={() => this.props.filtering("todo")} style={{ color: this.props.filter === "todo" ? "blue" : "", marginLeft: "10px" }}>To do</span>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        filter: state.filtering
    }
}

export default connect(mapStateToProps, { filtering })(Filter);