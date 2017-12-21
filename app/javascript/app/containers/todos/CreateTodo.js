import { connect } from 'react-redux'
import CreateTodo from '../../components/todos/CreateTodo'
import { createTodo } from '../../actions/todos'
import { bindActionCreators } from 'redux'

const mapStateToProps = () => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      createTodo,
    }, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTodo)
