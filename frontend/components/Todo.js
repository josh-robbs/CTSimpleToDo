import React, { Component } from 'react'

class Todo extends Component {

  render(){
    return (
      <li key={this.props.todo.id}>
        <div className="view">
          <input  type="checkbox" 
                  onChange={(e) => this.props.handleCheckBox(this.props.todo.id, this.props.todo)} 
                  checked={this.props.todo.complete} />
          <label>{this.props.todo.text}</label>
          <button onClick={() => this.props.handleDeleteRequest(this.props.todo.id)}>Remove Todo</button>
        </div>
      </li>
    )
  }

}

export default Todo

