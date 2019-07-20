import React, { Component } from "react"
import TodoItems from './TodoItems'
import "./TodoList.css";
 
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      text: '',
      visibilityFilter: 'SHOW_ALL'
    }
    this.addItem = this.addItem.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  handleChange(e) {
    this.setState({text: e.target.value})
  }

  addItem(e) {
    e.preventDefault()
    const {items, text} = this.state
    if (text !== '') {
      const newItem = {
        text: text,
        key: Date.now(),
        completed: false
      }
      this.setState({
        items: [
          ...items,
          newItem
        ],
        text: ''
      })
    }
  }

  deleteItem(key) {
    const {items} = this.state
    this.setState({
      items: items.filter(item => item.key !== key)
    })
  }

  render() {
    const {text, items} = this.state
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input placeholder="enter task" onChange={this.handleChange} value={text}/>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems items={items} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}
 
export default TodoList