import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import api from '../middleware/api'

export default function configureStore(reducers, initialState) {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk, api)
  )
}
