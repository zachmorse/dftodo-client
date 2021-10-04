import axios from 'axios'
import {
  GET_ALL_TASKS,
  CREATE_TASK,
  WRITE_PENDING_TASK,
  DELETE_TASK,
  INITIATE_UPDATE,
  UPDATE_TASK,
  CANCEL_UPDATE
} from '../constants'

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
  await axios.delete(`${baseURI}/delete`, { data: { id: id } }).then(response => {
    return dispatch({ type: DELETE_TASK, payload: response.data })
  })
}

export const initiateUpdate = task => ({ type: INITIATE_UPDATE, payload: task })
export const cancelUpdate = () => ({ type: CANCEL_UPDATE })

export const updateTask = (id, description, status) => async dispatch => {
  await axios.put(`${baseURI}/update`, { id: id, description: description, status: status }).then(response => {
    return dispatch({ type: UPDATE_TASK, payload: response.data })
  })
}
