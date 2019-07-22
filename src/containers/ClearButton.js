import React from 'react'
import { connect } from 'react-redux'
import { clearTodo } from '../actions'

let ClearButton = ({ dispatch }) => {
  return (
    <button 
      className="clear-completed"
      onClick={() => dispatch(clearTodo())}
    >
      Clear completed
    </button>
  )
}

ClearButton = connect()(ClearButton)

export default ClearButton