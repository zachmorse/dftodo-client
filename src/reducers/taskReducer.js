import {
  GET_ALL_TASKS,
  CREATE_TASK,
  WRITE_PENDING_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  INITIATE_UPDATE,
  CANCEL_UPDATE
} from '../constants'

const initialState = {
  pendingTask: '',
  taskStagedForUpdate: null,
  allTasks: [],
  incompleteTasks: [],
  proceedingTasks: [],
  completedTasks: []
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    //eslint-disable-next-line
    case GET_ALL_TASKS:
      return {
        ...state,
        allTasks: action.payload,
        incompleteTasks: action.payload.filter(x => x.status === 'incomplete'),
        proceedingTasks: action.payload.filter(x => x.status === 'proceeding'),
        completedTasks: action.payload.filter(x => x.status === 'complete')
      }
    case CREATE_TASK:
      return {
        ...state,
        pendingTask: '',
        allTasks: action.payload,
        incompleteTasks: action.payload.filter(x => x.status === 'incomplete'),
        proceedingTasks: action.payload.filter(x => x.status === 'proceeding'),
        completedTasks: action.payload.filter(x => x.status === 'complete')
      }
    case DELETE_TASK:
      return {
        ...state,
        allTasks: action.payload,
        incompleteTasks: action.payload.filter(x => x.status === 'incomplete'),
        proceedingTasks: action.payload.filter(x => x.status === 'proceeding'),
        completedTasks: action.payload.filter(x => x.status === 'complete')
      }

    case UPDATE_TASK:
      return {
        ...state,
        allTasks: action.payload,
        taskStagedForUpdate: null,
        incompleteTasks: action.payload.filter(x => x.status === 'incomplete'),
        proceedingTasks: action.payload.filter(x => x.status === 'proceeding'),
        completedTasks: action.payload.filter(x => x.status === 'complete')
      }

    case WRITE_PENDING_TASK:
      return { ...state, pendingTask: action.payload }

    case INITIATE_UPDATE:
      return {
        ...state,
        taskStagedForUpdate: action.payload
      }

    case CANCEL_UPDATE:
      return {
        ...state,
        taskStagedForUpdate: null
      }
    default:
      return state
  }
}

export default taskReducer
