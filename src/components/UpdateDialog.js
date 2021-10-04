import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import { useDispatch } from 'react-redux'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  TextField,
  Button,
  MenuItem
} from '@material-ui/core'
import { cancelUpdate, updateTask } from '../actions/taskActions'

const useStyles = makeStyles({
  dialogTitle: {
    marginBottom: 0
  },
  textField: {
    marginBottom: '16px'
  }
})

const UpdateDialog = ({ open, data }) => {
  const [stagedItem, setStagedItem] = useState(null)
  const styles = useStyles()

  const dispatch = useDispatch()

  useEffect(() => {
    setStagedItem(open ? data : null)
  }, [open, data])

  return (
    open && (
      <Dialog open={open} className={styles.dialog}>
        <DialogTitle className={styles.dialogTitle}>Update Task</DialogTitle>
        <DialogContent>
          <TextField
            className={styles.textField}
            autoFocus
            margin='dense'
            type='text'
            fullWidth
            variant='standard'
            value={stagedItem?.description}
            placeholder='description'
            onChange={e => setStagedItem(prev => ({ ...prev, description: e.target.value }))}
          />
          <Select
            value={stagedItem?.status}
            onChange={e => setStagedItem(prev => ({ ...prev, status: e.target.value }))}
          >
            <MenuItem value={'incomplete'}>Incomplete</MenuItem>
            <MenuItem value={'proceeding'}>Proceeding</MenuItem>
            <MenuItem value={'complete'}>Complete</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(cancelUpdate())}>Cancel</Button>
          <Button disabled={stagedItem?.description === ''} onClick={() => dispatch(updateTask(stagedItem))}>
            Update Task
          </Button>
        </DialogActions>
      </Dialog>
    )
  )
}

export default UpdateDialog
