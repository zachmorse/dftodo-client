import { GET_ALL_TASKS, CREATE_TASK, WRITE_PENDING_TASK } from '../constants'

const initialState = {
  pendingTask: '',
  incompleteTodos: [],
  proceedingTodos: [],
  completedTodos: []
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    //eslint-disable-next-line
    case CREATE_TASK:
      return {
        ...state,
        pendingTask: '',
        incompleteTodos: action.payload.filter(x => x.status === 'incomplete'),
        proceedingTodos: action.payload.filter(x => x.status === 'proceeding'),
        completedTodos: action.payload.filter(x => x.status === 'complete')
      }
    case GET_ALL_TASKS:
      return {
        ...state,
        incompleteTodos: action.payload.filter(x => x.status === 'incomplete'),
        proceedingTodos: action.payload.filter(x => x.status === 'proceeding'),
        completedTodos: action.payload.filter(x => x.status === 'complete')
      }

    case WRITE_PENDING_TASK:
      return { ...state, pendingTask: action.payload }

    default:
      return state
  }
}

export default taskReducer
