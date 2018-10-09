import React from 'react';
import FetchApi from '../fetch-api';
import Todo from './Todo';

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

	render() {
		
		const todolist = this.state.todos.map(todo => {
			return <Todo todo={todo} handleDeleteRequest={this.handleDeleteRequest} />
		})

		return (
			<div>
				<h1>todos</h1>
				<input
					autoFocus
					onChange={this.handleChange}
					onKeyDown={this.handleKeyDown}
					placeholder="What needs to be done?"
					value={this.state.newText}
				/>
				<ul>
					{todolist}
				</ul>
			</div>
		);
	}
}
