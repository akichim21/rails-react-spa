import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default class Show extends React.Component {
  componentWillMount() {
    this.props.actions.fetchTodo(this.props.id)
  }
  render() {
    const { todo } = this.props
    console.log(typeof todo)
    if (typeof todo === "undefined") {
      return (<div></div>)
    }
    return (
      <div>
        <p>{todo.text}</p>
        <p>{todo.isCompleted ? "完了" : "未完了"}</p>
        <Link to="/todos">一覧へ</Link>
      </div>
    )
  }
}

Show.propTypes = {
  id: PropTypes.number.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }),
  actions: PropTypes.shape({
    fetchTodo: PropTypes.func.isRequired,
  })
}

export default Show
