import React from 'react';
import TodoList from 'TodoList';
import TodoForm from 'TodoForm';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';
import uuid from 'node-uuid';

var TodoApp = React.createClass({
	getInitialState:function () {
		return {
			showCompleted: false,
			searchText: '',
			todos: TodoAPI.getTodos()
		}
	},
	componentDidUpdate: function () {
		TodoAPI.setTodos(this.state.todos);
	},
	handleNewTodo: function(newTodo){
		this.setState({
			todos: [
			...this.state.todos,
			{
				id: uuid(),
				text: newTodo,
				completed: false
			}
			]
		});
		console.log(this.state.todos);
	},
	handleToggle: function (id){
		var updatedTodos = this.state.todos.map((todo) => {
    		if (todo.id === id) {
        		todo.completed = !todo.completed;
     	}
     	return todo;
     });
		this.setState({todos: updatedTodos});
	},
	handleSearch: function(showCompleted,searchText){
		this.setState({
			searchText: searchText.toLowerCase(),
			showCompleted: showCompleted
		});

	},
	render: function(){
		var {todos, showCompleted, searchText} = this.state;
		var filteredTodos = TodoAPI.filteredTodos(todos, showCompleted, searchText);
		return (
			<div>
			<TodoSearch onSearch={this.handleSearch}/>
			<TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
			<TodoForm onNewTodo={this.handleNewTodo}/>
			</div>
			);
	}
});
module.exports=TodoApp;