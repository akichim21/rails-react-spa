import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default class Todo extends React.Component {
  render() {
    const { id, isCompleted, text, onClick } = this.props
    return (
      <li>
        <p style={{display: "inline", textDecoration: isCompleted ? 'line-through' : 'none'}}>{text}</p>
        [<Link to={"todos/" + id }>詳細</Link>]
        [<a href="#" onClick={onClick}>完了</a>]
      </li>
    )
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Todo
