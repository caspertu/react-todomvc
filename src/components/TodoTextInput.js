import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class TodoTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text || ''
    }
  }

  // 用于编辑模式
  handleBlur = e => {
    const { isNewTodo, onSave } = this.props
    if (!isNewTodo) {
      onSave(e.target.value)
    }
  }

  handleChange = e => this.setState({ text: e.target.value })

  handleSubmit = e => {
    // console.log(e.which)
    if (e.which === 13) {
      const { onSave, isNewTodo } = this.props
      const text = e.target.value.trim()
      onSave(text)
      if (isNewTodo) {
        this.setState({ text: '' })
        // console.log(this.state.text)
      }
    }
  }

  render() {
    const { editing, placeholder, isNewTodo } = this.props 
    const { text } = this.state
    return (
      <input
        type="text" 
        className={
          classnames({
            edit: editing,
            'new-todo': isNewTodo
          })
        }
        value={text}
        placeholder={placeholder}
        autoFocus={true}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    )
  }
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  isNewTodo: PropTypes.bool
}

export default TodoTextInput
