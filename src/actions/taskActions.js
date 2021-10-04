import axios from 'axios'
import { GET_ALL_TASKS, CREATE_TASK, WRITE_PENDING_TASK, DELETE_TASK } from '../constants'

const baseURI = `http://localhost:4000/api/tasks`

export const getAllTasks = () => async dispatch => {
  await axios.get(baseURI).then(response => {
    return dispatch({ type: GET_ALL_TASKS, payload: response.data })
  })
}

export const writePendingTask = formValue => ({ type: WRITE_PENDING_TASK, payload: formValue })

export const createTask = task => async dispatch => {
  await axios.post(`${baseURI}/create`, { description: task }).then(response => {
    return dispatch({ type: CREATE_TASK, payload: response.data })
  })
}

export const deleteTask = id => async dispatch => {
  console.log('DELETE', id)
  await axios.delete(`${baseURI}/delete`, { data: { id: id } }).then(response => {
    return dispatch({ type: DELETE_TASK, payload: response.data })
  })
}
