import React, { Component } from 'react'
import { Input, Button } from 'react-materialize'

class Todo extends Component {

  render(){
    return (
      <li key={this.props.todo.id}>
        <div className="view" >
          <Input  name='todo'
                  type="checkbox"
                  label={this.props.todo.text}
                  onChange={(e) => this.props.handleCheckBox(this.props.todo.id, this.props.todo)} 
                  checked={this.props.todo.complete} />
          <Button floating 
                  small 
                  className='red'
                  waves='light' 
                  icon='remove'
                  onClick={() => this.props.handleDeleteRequest(this.props.todo.id)} />
        </div>
      </li>
    )
  }

}

export default Todo

