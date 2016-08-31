import CreateTodo from '../../containers/todos/CreateTodo'
import TodoList from '../../containers/todos/TodoList'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <CreateTodo />
        <TodoList />
      </div>
    )
  }
}
