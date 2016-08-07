import { CALL_API } from './../../constants/Api'
import * as types from './../../constants/ActionTypes'

export const addTodo = (param) => {
  return {
    [CALL_API]: {
      types: [ types.ADD_TODO_REQUEST, types.ADD_TODO_SUCCESS, types.ADD_TODO_FAILURE ],
      endpoint: 'todos.json',
      param: { todo: param },
      method: "POST"
    }
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
