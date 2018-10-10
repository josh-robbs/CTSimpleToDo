import React from 'react';
import FetchApi from '../fetch-api';
import Todo from './Todo';
import TodoCounter from './TodoCounter';

const ENTER_KEY_CODE = 13;

export default class TodoApp extends React.Component {
	state = { todos: [], newText: '' };

	constructor(props) {
		super(props);
		this.getTodos();
	}

	getTodos = () => {
		return FetchApi
			.get('/todo')
			.then(todos => this.setState({ todos }))
			.catch(() => alert('There was an error getting todos'));
	};

	createTodo = () => {
		FetchApi
			.post('/todo', { text: this.state.newText, complete: false })
			.then((newTodo) => {
				const newTodos = Array.from(this.state.todos);
				newTodos.push(newTodo);
				this.setState({ todos: newTodos, newText: '' });
			})
			.catch(() => alert('There was an error creating the todo'));
	};

	handleDeleteRequest = (id) => {
		FetchApi
			.delete(`/todo/${id}`)
			.then(() => {
				const newTodos = Array.from(this.state.todos);
				const todoIndex = newTodos.findIndex(todo => todo.id.toString() === id.toString());
				newTodos.splice(todoIndex, 1);
				this.setState({ todos: newTodos });
			})
			.catch(() => alert('Error removing todo'));
	};

	handleChange = e => {
		this.setState({ newText: e.target.value });
	};

	handleKeyDown = e => {
		if (e.keyCode !== ENTER_KEY_CODE) return;
		this.createTodo();
	};

	handleCheckBox = (id, todo) => {
		FetchApi
			.put(`/todo/${id}`, {complete: todo.complete})
			.then(() => {
				todo.complete = !todo.complete
				const newTodos = Array.from(this.state.todos);
				const todoIndex = newTodos.findIndex(todo => todo.id.toString() === id.toString());
				newTodos[todoIndex] = todo 
				this.setState({ todos: newTodos });
			})
			.catch(() => alert('Error updating tacos'));
  }

	render() {
		
		const todolist = this.state.todos.map(todo => {
			return <Todo 	key={todo.id}
										todo={todo}
										handleDeleteRequest={this.handleDeleteRequest} 
										handleCheckBox={this.handleCheckBox} />
		})

		return (
			<div>
				<h1>To Do List</h1>
				<input 	autoFocus
								onChange={this.handleChange}
								onKeyDown={this.handleKeyDown}
								placeholder="What needs to be done?"
								value={this.state.newText} />
				<ul>
					{todolist}
				</ul>
				<TodoCounter todos={this.state.todos} />
			</div>
		);
	}
}
