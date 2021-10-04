import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { List, ListItem, listItemButton } from '@material-ui/core'

const useStyles = makeStyles({
  taskContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

const TaskCard = ({ data, category }) => {
  const styles = useStyles()
  console.log('ZCM', data)
  return (
    <div className={styles.taskContainer}>
      <h3>{category}</h3>
      <ul>
        {data.map((task, idx) => (
          <li key={idx}>{task.description}</li>
        ))}
      </ul>
    </div>
  )
}

export default TaskCard
