import React from 'react';

class ListItem extends React.Component {

    render() {
        return (
            <div>
                <span style={{ textDecoration: this.props.completed ? 'line-through' : ''}}>{this.props.task}</span>
                <input type="checkbox" onClick={this.props.toggleTask}/>
            </div>
        )
    }

}

export default ListItem;