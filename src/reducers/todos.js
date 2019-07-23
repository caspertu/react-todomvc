import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED,
} from '../constants/ActionTypes'

// const mockInitialState = [
//   {
//     text: 'Use Redux',
//     completed: false,
//     id: 0
//   }
// ]

// localStorage.setItem('todos', JSON.stringify(mockInitialState))

const getTodos = () => {
  return JSON.parse(localStorage.getItem('todos'))
}

const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
  return todos
}

const initialState = getTodos()

console.log(initialState);

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const todos = [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }
      ]
      return saveTodos(todos)

    case DELETE_TODO:
      return saveTodos(state.filter(todo => todo.id !== action.id))

    case EDIT_TODO:
      return saveTodos(state.map(todo => 
        todo.id === action.id ? 
          ({ ...todo, text: action.text }) :
          todo
      ))

    case COMPLETE_TODO:
      return saveTodos(state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      ))

    case COMPLETE_ALL_TODOS:
      const areAllMarked = state.every(todo => todo.completed)
      return saveTodos(state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      })))

    case CLEAR_COMPLETED:
      return saveTodos(state.filter(todo => todo.completed === false))

    default:
      return state
  }
}
