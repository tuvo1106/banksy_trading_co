import UserActionTypes from "./user.types"

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
})

export const emailSignInStart = (emailAndPassword: any) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
})

export const signInSuccess = (user: any) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
})

export const signInFailure = (error: any) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
})
