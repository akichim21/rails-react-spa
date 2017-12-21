import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

export default class Todo extends React.Component {
  render() {
    const { id, isCompleted, text, onClick } = this.props
    return (
      <li>
        <p style={{display: "inline", textDecoration: isCompleted ? 'line-through' : 'none'}}>{text}</p>
        [<Link to={"todos/" + id }>詳細</Link>]
        [<a href="#" onClick={onClick}>{isCompleted ? "未完了" : "完了"}にする</a>]
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
