import React from 'react'
import PropTypes from 'prop-types'


export default class TodoHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ input: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const {input} = this.state
    if (input === '') return
    const {addTodo} = this.props
    let todoItem = {
      text: input,
      completed: false
    }
    addTodo(todoItem)
    this.setState({
      input: ''
    })
  }

  render() {
    const {input} = this.state
    return(
      <header className="header">
        <form onSubmit={this.handleSubmit}>
          <h1>todos</h1>
          <input 
            className="new-todo" 
            placeholder="What needs to be done?" 
            autoFocus
            onChange={this.handleChange}
            value={input}
          />
        </form>
      </header>
    )
  }
}

TodoHeader.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
