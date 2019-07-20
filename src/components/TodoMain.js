import React from 'react'
import PropTypes from 'prop-types'

export default class TodoMain extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(todoItemId) {
    const {changeTodoItem} = this.props
    changeTodoItem(todoItemId)
  }

  handleDelete(todoItemId) {
    const {deleteTodoItem} = this.props
    deleteTodoItem(todoItemId)
  }

  render() {
    const {todoItems} = this.props
    const todoList = todoItems.map(todo => (
      <li key={todo.id} className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={todo.completed ? 'checked' : ''} 
            onChange={() => this.handleChange(todo.id)} />
          <label>{todo.text}</label>
          <button className="destroy"
            onClick={() => this.handleDelete(todo.id)}
          />
        </div>
      </li>
    ))
    return(
      <section className="main">
        <ul className="todo-list">
            {todoList}
          </ul>
      </section>
    )
  }
}

TodoMain.propTypes = {
  todoItems: PropTypes.array.isRequired,
  changeTodoItem: PropTypes.func.isRequired,
  deleteTodoItem: PropTypes.func.isRequired
}
