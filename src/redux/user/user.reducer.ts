import UserActionTypes from "./user.types"

interface state {
  currentUser: any
  error: any
}

const INITIAL_STATE: state = {
  currentUser: null,
  error: null
}

const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default userReducer
