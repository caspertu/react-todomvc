import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => {
  return (
    <a
      className={active ? 'selected': ''}
      href="#/"
      onClick={onClick}
      disabled={active}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link