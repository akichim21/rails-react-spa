import React, { PropTypes } from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  componentWillMount() {
    this.props.actions.fetchTodos()
  }
  render() {
    const { todos } = this.props
    const { updateTodo } = this.props.actions
    return (
      <ul>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => updateTodo(todo.id, { is_completed: !todo.isCompleted })}
          />
        )}
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.shape({
    updateTodo: PropTypes.func.isRequired,
    fetchTodos: PropTypes.func.isRequired,
  })
}
