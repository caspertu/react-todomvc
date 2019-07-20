import React from 'react'
import PropTypes from 'prop-types'

class TodoFooter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: 'all'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(filter) {
    const {showFilter} = this.props
    this.setState({filter})
    // console.log(`showFilter('${filter}')`)
    showFilter(filter)
  }


  render() {
    const {todoCount, clearCompleted} = this.props
    const {filter} = this.state
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{todoCount}</strong>
          {' '}item{todoCount > 1 ? 's' : ''} left
        </span>
        <ul className="filters">
          <li>
            <a 
              className={filter === 'all' ? 'selected' : ''} 
              href="#/"
              onClick={() => this.handleClick('all')}
            >All</a>
          </li>
          <li>
            <a className={filter === 'active' ? 'selected' : ''} 
              href="#/active"
              onClick={() => this.handleClick('active')}
            >Active</a>
          </li>
          <li>
            <a 
              className={filter === 'completed' ? 'selected' : ''}
              href="#/completed"
              onClick={() => this.handleClick('completed')}
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
  todoCount: PropTypes.number.isRequired,
  showFilter: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired
}

export default TodoFooter
