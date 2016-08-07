import React, { PropTypes } from 'react'

const Todo = ({ onClick, isCompleted, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: isCompleted ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
