import * as Types from '../constants/ActionTypes'

export const addTodo = (text) => ({type: Types.ADD_TODO, text})
export const toggleTodo = (id) => ({type: Types.TOGGLE_TODO, id})
export const deleteTodo = (id) => ({type: Types.DELETE_TODO, id})
export const editTodo = (id, text) => ({type: Types.EDIT_TODO, id, text})
export const completeTodo = (id) => ({type: Types.COMPLETE_TODO, id})
export const completeAllTodos = () => ({type: Types.COMPLETE_ALL_TODOS})
export const clearCompleted = () => ({type: Types.CLEAR_COMPLETED})
export const setVisibilityFilter = (filter) => ({type: Types.SET_VISIBILITY_FILTER, filter })
