import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import * as TodoActions from '../actions'
import {bindActionCreators} from 'redux'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    filteredTodos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(TodoActions, dispatch)})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
