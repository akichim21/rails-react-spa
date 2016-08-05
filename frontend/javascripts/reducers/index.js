import { combineReducers } from 'redux'
import todos from './todo/todos'
import visibilityFilter from './todo/visibilityFilter'

const index = {
  todos,
  visibilityFilter
}

export default index
