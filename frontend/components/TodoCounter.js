import React, { Component } from 'react'

class TodoCounter extends Component {

  render(){
    let count = this.props.todos.length
    let completed = this.props.todos.filter((todo)=>todo.complete===true).length
    return (
      <div>
        <p>You have completed {completed} of {count} todos.</p>
      </div>
    )
  }

}

export default TodoCounter

