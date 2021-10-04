import { GET_ALL_TASKS, CREATE_TASK, WRITE_PENDING_TASK } from '../constants'

const initialState = {
  pendingTask: '',
  allTasks: [],
  incompleteTasks: [],
  proceedingTasks: [],
  completedTasks: []
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    //eslint-disable-next-line
    case CREATE_TASK:
      return {
        ...state,
        pendingTask: '',
        allTasks: action.payload,
        incompleteTasks: action.payload.filter(x => x.status === 'incomplete'),
        proceedingTasks: action.payload.filter(x => x.status === 'proceeding'),
        completedTasks: action.payload.filter(x => x.status === 'complete')
      }
    case GET_ALL_TASKS:
      return {
        ...state,
        allTasks: action.payload,
        incompleteTasks: action.payload.filter(x => x.status === 'incomplete'),
        proceedingTasks: action.payload.filter(x => x.status === 'proceeding'),
        completedTasks: action.payload.filter(x => x.status === 'complete')
      }

    case WRITE_PENDING_TASK:
      return { ...state, pendingTask: action.payload }

    default:
      return state
  }
}

export default taskReducer
