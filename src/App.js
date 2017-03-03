import React, { Component } from 'react';
import './App.css';
import TodoList from './containers/TodoList';
import AddTodo from './containers/AddTodo';
import Filter from './containers/Filter';

class App extends Component {
  render() {
    return (
      <div className="container">
        <AddTodo/>
        <TodoList/>
        <Filter/>
      </div>
    );
  }
}

export default App;
