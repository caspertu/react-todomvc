import React from 'react'
import PropTypes from 'prop-types'

class TodoFooter extends React.Component {
  render() {
    const {count, completedCount, clearCompleted, nowShowing, showFilter} = this.props
    return (
      <footer className="footer">
        <span className="todo-count">
          
          <strong>{nowShowing === 'completed' ? completedCount : count}</strong>
          {' '}item{count > 1 ? 's' : ''} left
        </span>
        <ul className="filters">
          <li>
            <a 
              className={nowShowing === 'all' ? 'selected' : ''} 
              href="#/"
              onClick={() => showFilter('all')}
            >All</a>
          </li>
          <li>
            <a className={nowShowing === 'active' ? 'selected' : ''} 
              href="#/active"
              onClick={() => showFilter('active')}
            >Active</a>
          </li>
          <li>
            <a 
              className={nowShowing === 'completed' ? 'selected' : ''}
              href="#/completed"
              onClick={() => showFilter('completed')}
            >Completed</a>
          </li>
        </ul>
        <button 
          className="clear-completed"
          onClick={() => clearCompleted()}
        >
          Clear completed
        </button>
      </footer>
    )
  }
}

TodoFooter.propTypes = {
  count: PropTypes.number.isRequired,
  showFilter: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired
}

export default TodoFooter
