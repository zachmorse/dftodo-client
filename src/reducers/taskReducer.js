import { GET_ALL_TASKS } from '../constants'

const initialState = {
  incompleteTodos: [],
  proceedingTodos: [],
  completedTodos: []
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TASKS:
      return {
        ...state,
        incompleteTodos: action.payload.filter(x => x.status === 'incomplete'),
        proceedingTodos: action.payload.filter(x => x.status === 'proceeding'),
        completedTodos: action.payload.filter(x => x.status === 'complete')
      }

    default:
      return state
  }
}

export default taskReducer
