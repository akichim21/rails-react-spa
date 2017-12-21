import * as types from './../../constants/ActionTypes'

const INITIAL_STATE = {
  todos: [],
  todo: undefined,
}

const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_TODO_SUCCESS:
      return Object.assign({}, state, {
        todos: [...state.todos, action.response.todo]
      })
    case types.UPDATE_TODO_SUCCESS:
      return Object.assign({}, state, {
        todos: state.todos.map(t => {
          if (t.id == action.response.todo.id) {
            return action.response.todo
          } else {
            return t
          }
        })
      })
    case types.FETCH_TODOS_REQUEST:
      return Object.assign({}, state, {
        todos: []
      })
    case types.FETCH_TODOS_SUCCESS:
      return Object.assign({}, state, {
        todos: action.response.todos
      })
    case types.FETCH_TODO_REQUEST:
      return Object.assign({}, state, {
        todo: undefined
      })
    case types.FETCH_TODO_SUCCESS:
      return Object.assign({}, state, {
        todo: action.response.todo
      })
    default:
      return state
  }
}

export default todos
