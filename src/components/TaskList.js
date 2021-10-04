import React from 'react'
import { makeStyles } from '@material-ui/styles'
import TaskCard from './TaskCard'

const useStyles = makeStyles({
  container: {},
  taskGrid: {
    backgroundColor: '#FFF',
    width: '70vw',
    maxWidth: 800,
    padding: 20,
    boxShadow: `
      2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
      100px 100px 80px rgba(0, 0, 0, 0.07)
    `,
    borderRadius: '6px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr'
  }
})

const TaskList = ({ incompleteTasks, proceedingTasks, completedTasks }) => {
  const styles = useStyles()

  return (
    <div className={styles.taskGrid}>
      <TaskCard data={incompleteTasks} category='Incomplete' />
      <TaskCard data={proceedingTasks} category='In Progress'/>
      <TaskCard data={completedTasks} category='Complete'/>
    </div>
  )
}

export default TaskList
