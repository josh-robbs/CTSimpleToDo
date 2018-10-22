import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';

class Todo extends Component {

  render(){
    return (
      <li>
        <div style={{ display: 'flex',
                      alignItems: 'center',
                      margin: '1vw',
                      justifyContent: 'space-between' }}>
          <Input  name='todo'
                  type='checkbox'
                  label={this.props.todo.text}
                  onChange={(e) => this.props.handleCheckBox(e, this.props.todo.id, this.props.todo)} 
                  checked={this.props.todo.complete} />
          <Button floating 
                  className='red'
                  waves='light' 
                  icon='remove'
                  onClick={() => this.props.handleDeleteRequest(this.props.todo.id)}
                  style={{  minWidth: '2vw',
                            marginLeft: '1vw' }} />
        </div>
      </li>
    )
  }

}

export default Todo;

