import axios from 'axios'
import { GET_ALL_TASKS } from '../constants'

// export const getAllTasks = () => ({
//   type: GET_ALL_TASKS
// })

const baseURI = `http://localhost:4000/api/tasks`

export const getAllTasks = () => async dispatch => {
  await axios.get(baseURI).then(response => {
    console.log('response', response)
    return dispatch({ type: GET_ALL_TASKS, payload: response.data })
  })
}
