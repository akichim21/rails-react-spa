import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'
import { CALL_API } from './../constants/Api'

function serialize(obj, prefix) {
  let str = []
  for(const p in obj) {
    if (obj.hasOwnProperty(p)) {
      const k = prefix ? prefix + "[" + p + "]" : p, v = obj[p]
      if (Object.prototype.toString.call(v) === '[object Object]') {
        str.push(serialize(v, k))
      } else if (Object.prototype.toString.call(v) === '[object Array]') { 
        v.map((v) => {
          str.push(encodeURIComponent(k + "[]") + "=" + encodeURIComponent(v))
        })
      } else {
        str.push(encodeURIComponent(k) + "=" + encodeURIComponent(v))
      }
    }
  }
  return str.join("&")
}


function callApi(endpoint, param, method = "GET") {
  const fullUrl = "/" + endpoint
  const token = document.getElementsByTagName("meta")["csrf-token"].getAttribute("content")
  const newParam = Object.assign({}, param, {
    token: token,
  })
  const body = JSON.stringify(newParam)
  const parameter = {
    method: method,
    body: method == "GET" ? null : body,
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    }
  }
  const url = method == "GET" ? fullUrl + "?" + serialize(newParam) : fullUrl

  return fetch(url, parameter)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      const camelizedJson = camelizeKeys(json)

      return camelizedJson
    })
}


// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI
  const { types, param, hash, method } = callAPI

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

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType, ...hash }))

  return callApi(endpoint, param, method).then(
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

