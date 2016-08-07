import * as types from './../../constants/ActionTypes'

const todo = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_TODO_SUCCESS:
      return action.response.todo
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        isCompleted: !state.isCompleted
      })

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO_SUCCESS:
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
