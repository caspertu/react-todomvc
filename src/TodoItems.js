import React from 'react'
import PropTypes from 'prop-types'
import FlipMove from "react-flip-move";

class TodoItems extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  
  onClick(key) {
    this.props.deleteItem(key)
  }

  render() {
    const {items, deleteItem} = this.props
    const listItems = items.map(item => (
      <li onClick={() => deleteItem(item.key)} key={item.key}>
        {item.text}
      </li>
    ))
    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    )
  }
}

TodoItems.propTypes = {
  deleteItem: PropTypes.func.isRequired,
}

export default TodoItems