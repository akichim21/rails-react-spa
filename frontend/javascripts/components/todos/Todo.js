import React, { PropTypes } from 'react'

const Todo = ({ onClick, isCompleted, text }) => (
  <li>
    <p style={{display: "inline", textDecoration: isCompleted ? 'line-through' : 'none'}}>{text}</p>
    [<a>詳細</a>]
    [<a onClick={onClick}>完了</a>]
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
