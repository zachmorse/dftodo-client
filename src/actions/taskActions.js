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

const baseURI = `https://serene-sands-93685.herokuapp.com/api/tasks`

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

export const updateTask = data => async dispatch => {
  await axios.put(`${baseURI}/update`, data).then(response => {
    return dispatch({ type: UPDATE_TASK, payload: response.data })
  })
}
