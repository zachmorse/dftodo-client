import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { List, ListItem, IconButton } from '@material-ui/core'
import UpdateOutlinedIcon from '@material-ui/icons/UpdateOutlined'
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined'

import { deleteTask, initiateUpdate } from '../actions/taskActions'
import { useDispatch } from 'react-redux'

const STATUS_COLORS = {
  incomplete: '#dc7d7b',
  proceeding: '#f1c667',
  complete: '#66c4ea'
}

const useStyles = makeStyles({
  listItem: {
    display: 'grid',
    gridTemplateColumns: '1fr 96px',
    gridTemplateRows: 'auto',
    background: '#fff',
    color: 'rgb(81 89 98)',
    transition: 'background 125ms',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.02)'
    }
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  metaData: {
    fontStyle: 'italic',
    fontSize: '12px'
  },
  iconButton: {
    color: 'rgb(81 89 98)'
  }
})

const TaskItem = ({ data, showStatus = false }) => {
  const styles = useStyles()
  const dispatch = useDispatch()

  const formatTimeString = str => {
    const d = new Date(str)
    return `Added ${d.toLocaleDateString()}, ${d.toLocaleTimeString()}`
  }

  return (
    <div className={styles.taskContainer}>
      <List>
        {data.map((task, idx) => (
          <ListItem className={styles.listItem} key={idx}>
            <div className={styles.infoContainer}>
              <span className={styles.taskDescription}>{task.description}</span>
              <span className={styles.metaData}>
                {formatTimeString(task.dateCreated)}{' '}
                {showStatus && <span style={{ color: STATUS_COLORS[task.status] }}>{task.status}</span>}
              </span>
            </div>
            <div className={styles.buttonContainer}>
              <IconButton
                className={styles.iconButton}
                onClick={() => {
                  console.log('stage item for update by passing id up to action creator, open dialog for item update')
                  dispatch(initiateUpdate(task))
                  // setUpdatePanelOpen(true)
                }}
              >
                <UpdateOutlinedIcon size='small' />
              </IconButton>
              <IconButton className={styles.iconButton} onClick={() => dispatch(deleteTask(task.id))}>
                <DeleteForeverOutlinedIcon size='small' />
              </IconButton>
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default TaskItem
