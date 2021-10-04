import React, { useEffect } from 'react'

import { getAllTasks, createTask, writePendingTask } from './actions/taskActions'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/styles'

import Title from './components/Title'
import TaskPanel from './components/TaskPanel'
import Form from './components/Form'

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'rgb(168, 186, 204)'
  }
})

const App = () => {
  const styles = useStyles()
  const dispatch = useDispatch()

  const pendingTask = useSelector(state => state.tasks.pendingTask)
  const allTasks = useSelector(state => state?.tasks?.allTasks)
  const incompleteTasks = useSelector(state => state?.tasks?.incompleteTasks)
  const proceedingTasks = useSelector(state => state?.tasks?.proceedingTasks)
  const completedTasks = useSelector(state => state?.tasks?.completedTasks)

  useEffect(() => {
    dispatch(getAllTasks())
  }, [dispatch])

  return (
    <div className={styles.root}>
      <Title />
      <Form
        onSubmit={e => {
          dispatch(createTask(pendingTask))
        }}
        onChange={value => dispatch(writePendingTask(value))}
        value={pendingTask}
      />
      <TaskPanel
        allTasks={allTasks}
        incompleteTasks={incompleteTasks}
        proceedingTasks={proceedingTasks}
        completedTasks={completedTasks}
      />
    </div>
  )
}

export default App
