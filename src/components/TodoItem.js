import React from 'react'
import PropTypes from 'prop-types'
import TodoInputText from './TodoTextInput'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, text) => {
    const { editTodo } = this.props
    editTodo(id, text)
    this.setState({ editing: false })
  }

  render() {
    const { todo, deleteTodo, completeTodo } = this.props
    const { editing } = this.state

    let element
    if (editing) {
      element = (
        <TodoInputText
          isNewTodo={false}
          text={todo.text}
          editing={editing}
          onSave={(text) => this.handleSave(todo.id, text)} />
      )
    } else {
      element = (
        <li className={todo.completed ? 'completed' : ''}>
          <div className="view">
            <input 
              className="toggle" 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => completeTodo(todo.id)} 
            />    
            <label onDoubleClick={this.handleDoubleClick}>
              {todo.text}
            </label>
            <button 
              className="destroy"
              onClick={() => deleteTodo(todo.id)}
            />
          </div>
        </li>
      )
    }
    return element
  }
}

TodoItem.propTypes = {
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
}

export default TodoItem