import { CALL_API } from './../../constants/Api'
import * as types from './../../constants/ActionTypes'

export const createTodo = (param) => {
  return {
    [CALL_API]: {
      types: [ types.CREATE_TODO_REQUEST, types.CREATE_TODO_SUCCESS, types.CREATE_TODO_FAILURE ],
      endpoint: 'todos.json',
      param: { todo: param },
      method: "POST"
    }
  }
}

export const fetchTodos = () => {
  return {
    [CALL_API]: {
      types: [ types.FETCH_TODOS_REQUEST, types.FETCH_TODOS_SUCCESS, types.FETCH_TODOS_FAILURE ],
      endpoint: "todos.json",
    }
  }
}

export const updateTodo = (id, param) => {
  return {
    [CALL_API]: {
      types: [ types.UPDATE_TODO_REQUEST, types.UPDATE_TODO_SUCCESS, types.UPDATE_TODO_FAILURE ],
      endpoint: "todos/" + id + ".json",
      param: { id: id,  todo: param },
      method: "PUT"
    }
  }
}
