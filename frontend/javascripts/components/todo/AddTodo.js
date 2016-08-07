import React, { PropTypes } from 'react'
import { addTodo } from '../../actions/todo'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo({ text: input.value }))
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
AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
}
export default AddTodo
