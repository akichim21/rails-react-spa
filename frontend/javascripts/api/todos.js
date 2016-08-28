import _todos from './todos.json'

export default {
  getTodos(param) {
    let todos = _todos
    return { todos: todos }
  },
  getTodo(param) {
    return { todo: _todos.find(todo => todo.id == param.id ) }
  },
  updateTodo(param) {
    let todo = _todos.find(todo => todo.id == param.id )
    Object.keys(todo).map(key => {
      if (typeof(param["todo"][key]) !== "undefined") {
        todo[key] = param["todo"][key]
      }
    })
    return { todo: todo }
  }
}
