import { connect } from 'react-redux'
import { updateTodo, fetchTodos } from '../../actions/todos'
import TodoList from '../../components/todos/TodoList'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      updateTodo,
      fetchTodos
    }, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
