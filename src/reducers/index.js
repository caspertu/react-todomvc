import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp

// const todos = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       console.log(`state=${state}, action=${action}`)
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           completed: false
//         }
//       ]
//     case TOGGLE_TODO:
//       return state.map(todo => {
//         if (todo.id === action.id) {
//           return {
//             ...todo,
//             completed: !todo.completed
//           }
//         } else {
//           return todo
//         }
//       })
//     case DELETE_TODO:
//       return state.filter(todo => 
//         todo.id !== action.id
//       )
//     case COMPLETE_ALL_TODO:
//       return state.map(todo => todo.completed ? todo : ({
//         ...todo,
//         complete: !todo.completed
//       }))
//     case CLEAR_TODO:
//       return state.filter(todo => !todo.completed)
//     default:
//       return state
//   }
// }


