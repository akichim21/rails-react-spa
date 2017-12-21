import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import api from '../middleware/api'
import mockApi from '../middleware/mockApi'

export default function configureStore(reducers, initialState) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(
      thunk,
      api,
      mockApi,
      createLogger()
    )
  )

  return store
}
