import React from 'react'
import { connect } from 'react-redux'
import { clearTodo } from '../actions'

let Counter = ({ dispatch }) => {
  return (
    <button 
      className="clear-completed"
      onClick={() => dispatch(clearTodo())}
    >
      Clear completed
    </button>
  )
}

Counter = connect()(Counter)

export default Counter