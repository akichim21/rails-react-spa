import React, { PropTypes } from 'react'

let input
export default class CreateTodo extends React.Component {
  render() {
    const { createTodo } = this.props.actions
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          createTodo({ text: input.value })
          input.value = ''
        }}>
          <input ref={node => {
            input = node
          }} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }
}
CreateTodo.propTypes = {
  actions: PropTypes.shape({
    createTodo: PropTypes.func.isRequired
  })
}
