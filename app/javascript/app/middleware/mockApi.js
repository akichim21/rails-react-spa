import { camelizeKeys } from 'humps'
import { MOCK_API } from './../constants/Api'
import api from './../api'

const mockEndpoint = {
  'todos.json': {
    'GET': api.todos.getTodos
  },
  'todos/\\d+.json': {
    'PUT': api.todos.updateTodo,
    'GET': api.todos.getTodo
  },
}

function getData(endpoint, method, param) {
  const apiMethod = getApiMethod(endpoint, method)
  return apiMethod(param)
}

function getApiMethod(endpoint, method = 'GET') {
  const key = Object.keys(mockEndpoint).find((key) => {
    const value = mockEndpoint[key]
    const regexp = new RegExp(key)
    if (endpoint.match(regexp) && value[method]) return value[method]
  })
  return mockEndpoint[key][method]
}

function callApi(endpoint, method='GET', data={}) {
  const promise = new Promise((resolve) => {
    // emulate network latency
    setTimeout(resolve, 1000)
  })

  return promise.then(() => {
    let returned = getData(endpoint, method, data)
    const camelizedJson = camelizeKeys(returned)
    return camelizedJson
  })
}

// fake data for apis that are not implemented yet
export default store => next => action => {
  const callAPI = action[MOCK_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI

  const { types, method, param, hash } = callAPI

  if (!getApiMethod(endpoint, method)) {
    return next(action)
  }

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  function actionWith(param) {
    const finalAction = Object.assign({}, action, param)
    delete finalAction[MOCK_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType, ...hash }))

  return callApi(endpoint, method, param).then(
    response => next(actionWith({
      response,
      type: successType,
      ...hash
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened',
      ...hash
    }))
  )
}

