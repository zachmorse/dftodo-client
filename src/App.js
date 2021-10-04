import React, { useEffect } from 'react'
import { getAllTasks, createTask, writePendingTask } from './actions/taskActions'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const pendingTask = useSelector(state => state.tasks.pendingTask)
  // const incompleteTodos = useSelector(state => state?.tasks?.incompleteTodos)
  // const proceedingTodos = useSelector(state => state?.tasks?.proceedingTodos)
  // const completedTodos = useSelector(state => state?.tasks?.completedTodos)

  return (
    <>
      <div>APP</div>
      <button onClick={() => dispatch(getAllTasks())}>get all tasks</button>
      <h1>Add A Task</h1>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(createTask(pendingTask))
        }}
      >
        <input
          id='task'
          placeholder='Add Task'
          type='text'
          onChange={e => dispatch(writePendingTask(e.target.value))}
          value={pendingTask}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
