import { UserActionTypes } from "./user.types"

interface state {
  currentUser: any
}

const INITIAL_STATE: state = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}

export default userReducer
