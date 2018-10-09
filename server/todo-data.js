let todosCreated = 1;
let todos = [{
	id: 1,
	text: 'Finish coding exercise',
	complete: false
}];

export default class TodoData {
	static create(todo) {
		return new Promise((resolve) => {
			todo.id = ++todosCreated;
			todos.push(todo);
			resolve(todo);
		});
	}

	static findAll() {
		return new Promise((resolve) => resolve(todos));
	}

	static getOne(id) {
		return new Promise((resolve, reject) => {
			const todoIndex = todos.findIndex(todo => todo.id.toString() === id.toString());
			if (todoIndex < 0 || todoIndex >= todos.length) return reject();
			resolve(todos[todoIndex])
		})
	}

	static delete(id) {
		return new Promise((resolve, reject) => {
			const todoIndex = todos.findIndex(todo => todo.id.toString() === id.toString());
			if (todoIndex < 0 || todoIndex >= todos.length) return reject();
			todos.splice(todoIndex, 1);
			resolve();
		})
	}

	static update(id, todo) {
		return new Promise((resolve, reject) => {
			// TODO: Implement
			const todoIndex = todos.findIndex(todo => todo.id.toString() === id.toString());
			if (todoIndex < 0 || todoIndex >= todos.length) return reject();
			todos[todoIndex].complete = !todo.complete
			resolve(todo)
		})
	}
}
