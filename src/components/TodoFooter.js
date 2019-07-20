import React from 'react'
import PropTypes from 'prop-types'

const TodoFooter = ({todoCount}) => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{todoCount}</strong>{' '}item{todoCount > 1 ? 's' : ''} left
    </span>
    <ul className="filters">
      <li>
        <a className="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button className="clear-completed">Clear completed</button>
  </footer>
)

TodoFooter.propTypes = {
  todoCount: PropTypes.number.isRequired
}

export default TodoFooter
