import React, { useEffect } from 'react'
import { getAllTasks } from './actions/taskActions'
import { useDispatch, useSelector } from 'react-redux'
// import { useAppDispatch, useAppSelector } from './hooks/hooks'

const App = () => {
  const dispatch = useDispatch()

  const incompleteTodos = useSelector(state => state?.tasks?.incompleteTodos)
  const proceedingTodos = useSelector(state => state?.tasks.proceedingTodos)
  const completedTodos = useSelector(state => state?.tasks.completedTodos)

  useEffect(() => {
    console.log('todos', incompleteTodos)
    console.log('todos', proceedingTodos)
    console.log('todos', completedTodos)
  }, [incompleteTodos, proceedingTodos, completedTodos])

  return (
    <>
      <div>APP</div>
      <button onClick={() => dispatch(getAllTasks())}>get all tasks</button>
    </>
  )
}

export default App
