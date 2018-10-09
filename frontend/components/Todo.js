import React, { Component } from 'react'

class Todo extends Component {

  state = {
    complete: null
  }

  componentDidMount(){
    this.setState({
      complete: this.props.todo.complete
    })
  }

  toggleCheckBox = () => {
    this.setState({
      complete: !this.state.complete
    })
  }

  render(){
    return (
      <li key={this.props.todo.id}>
        <div className="view">
          <input type="checkbox" onChange={this.toggleCheckBox}></input>
          <label>{this.props.todo.text}</label>
          <button onClick={() => this.props.handleDeleteRequest(this.props.todo.id)}>Remove Todo</button>
        </div>
      </li>
    )
  }

}

export default Todo

