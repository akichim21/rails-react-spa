import * as types from './../../constants/ActionTypes'

const todos = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_TODO_SUCCESS:
      return [
        ...state,
        action.response.todo
      ]
    case types.UPDATE_TODO_SUCCESS:
      return state.map(t => {
        if (t.id == action.response.todo.id) {
          return action.response.todo
        } else {
          return t
        }
      })
    case types.FETCH_TODOS_SUCCESS:
      return action.response.todos
    default:
      return state
  }
}

export default todos
