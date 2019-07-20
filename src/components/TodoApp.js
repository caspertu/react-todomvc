import React from 'react'
import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain'
import TodoFooter from './TodoFooter'
import 'todomvc-app-css/index.css'

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.id = 1
    this.state = {
      todoItems: [],
      filter: 'all',
    }
    this.addTodo = this.addTodo.bind(this)
    this.changeTodoItem = this.changeTodoItem.bind(this)
    this.deleteTodoItem = this.deleteTodoItem.bind(this)
    this.showFilter = this.showFilter.bind(this)
    this.clearCompleted = this.clearCompleted.bind(this)
  }

  addTodo(todoItem) {
    if (!todoItem.id) {
      todoItem.id = this.id++
    }
    const {todoItems} = this.state
    this.setState({
      todoItems: [
        ...todoItems,
        todoItem
      ]
    })
  }

  deleteTodoItem(id) {
    const {todoItems} = this.state
    this.setState({
      todoItems: todoItems.filter(todoItem => todoItem.id !== id)
    })
  }

  changeTodoItem(id) {
    const {todoItems} = this.state
    this.setState({
      todoItems: todoItems.map(item => item.id === id ? {
        ...item,
        completed: !item.completed
      } : {
        ...item
      })
    })
  }

  showFilter(filter) {
    this.setState({filter})
  }

  clearCompleted() {
    console.log(`clearCompleted`)
    const {todoItems} = this.state
    this.setState({
      todoItems: todoItems.filter(item => !item.completed)
    })
  }

  render() {
    const {todoItems, filter} = this.state

    const todoCount = todoItems.reduce((prev, curr) => curr.completed ? prev : prev + 1, 0)
    
    const shownTodos = todoItems.filter(item => {
      switch (filter) {
        case 'active':
          return !item.completed
        case 'completed':
          return item.completed
        case 'all':
        default:
          return true
      }
    })

    return (
      <section className="todoapp">
        <TodoHeader 
          addTodo={this.addTodo}
        />
        <TodoMain
          todoItems={shownTodos}
          changeTodoItem={this.changeTodoItem}
          deleteTodoItem={this.deleteTodoItem}
        />
        <TodoFooter 
          todoCount={todoCount}
          showFilter={this.showFilter}
          clearCompleted={this.clearCompleted}
        />
        
        <footer className="info">
        </footer>
      </section>
    )
  }
}
