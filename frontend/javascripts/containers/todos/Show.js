import { connect } from 'react-redux'
import { fetchTodo } from '../../actions/todos'
import Show from '../../components/todos/Show'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state, ownProps) => {
  return {
    id: Number(ownProps.params.id),
    todo: state.todos.todo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      fetchTodo
    }, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show)
