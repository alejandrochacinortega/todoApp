import React from 'react';

class ListItem extends React.Component {

    render() {
        return (
            <div>
                <span style={{ textDecoration: this.props.completed ? 'line-through' : ''}}>{this.props.task}</span>
                <input type="checkbox" onClick={this.props.toggleTask} style={{ marginLeft: "5px"}}/>
                <span onClick={this.props.deleteTask} style={{ marginLeft: "5px"}}>delete</span>
            </div>
        )
    }

}

export default ListItem;