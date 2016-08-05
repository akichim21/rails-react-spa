import 'babel-polyfill'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import Index from "./todo/Index"

import reducers from './../reducers'

import devConfigureStore from './../store/configureStore.dev'
import prodConfigureStore from './../store/configureStore.prod'

const storeArgs = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = process.env.NODE_ENV === 'production' ? prodConfigureStore(storeArgs) : devConfigureStore(storeArgs)

const history = syncHistoryWithStore(browserHistory, store)

//const propTypes = {
//  token: React.PropTypes.string.isRequired,
//  email: React.PropTypes.string.isRequired
//}

export default class Todo extends React.Component {
  componentWillMount() {
    //localStorage.setItem("token", this.props.token)
    //localStorage.setItem("email", this.props.email)
  }
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="todo" component={Index}/>
        </Router>
      </Provider>
    )
  }
}
//Todo.propTypes = propTypes

window.Todo = Todo;